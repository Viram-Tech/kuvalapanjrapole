import { useState } from 'react'
import { SEVA } from '../data/site.js'

// Stacked bar chart of monthly spend by category. Rising totals read as
// momentum; the stack shows where every rupee goes. Built as plain SVG.
const CATS = SEVA.categories
const MONTHS = SEVA.months

const W = 760
const H = 380
const M = { top: 24, right: 16, bottom: 40, left: 44 }
const plotW = W - M.left - M.right
const plotH = H - M.top - M.bottom

const totals = MONTHS.map((m) => CATS.reduce((s, c) => s + m[c.key], 0))
const maxTotal = Math.ceil(Math.max(...totals) / 2) * 2 // round up to even
const yTicks = Array.from({ length: maxTotal / 2 + 1 }, (_, i) => i * 2)

const bandW = plotW / MONTHS.length
const barW = Math.min(56, bandW * 0.56)

const x = (i) => M.left + i * bandW + (bandW - barW) / 2
const y = (v) => M.top + plotH - (v / maxTotal) * plotH

export default function SevaChart() {
  const [hover, setHover] = useState(null) // index

  return (
    <figure className="relative m-0">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Monthly seva spend by category">
        {/* gridlines + y axis labels */}
        {yTicks.map((v) => (
          <g key={v}>
            <line x1={M.left} x2={W - M.right} y1={y(v)} y2={y(v)} stroke="#dbdad4" strokeWidth="1" />
            <text x={M.left - 10} y={y(v) + 4} textAnchor="end" className="fill-ink/45" fontSize="12">
              {v}
            </text>
          </g>
        ))}

        {/* bars */}
        {MONTHS.map((m, i) => {
          let acc = 0
          const isHi = hover === i
          return (
            <g
              key={m.month}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            >
              {/* hit area */}
              <rect x={M.left + i * bandW} y={M.top} width={bandW} height={plotH} fill="transparent" />
              {CATS.map((c, ci) => {
                const v = m[c.key]
                const segH = (v / maxTotal) * plotH
                acc += v
                const yTop = y(acc)
                const isTop = ci === CATS.length - 1
                return (
                  <rect
                    key={c.key}
                    x={x(i)}
                    y={yTop}
                    width={barW}
                    height={Math.max(0, segH - 2)} /* 2px surface gap between segments */
                    rx={isTop ? 4 : 0}
                    fill={c.color}
                    opacity={hover === null || isHi ? 1 : 0.35}
                    style={{ transition: 'opacity .15s' }}
                  />
                )
              })}
              {/* total label */}
              <text
                x={x(i) + barW / 2}
                y={y(totals[i]) - 8}
                textAnchor="middle"
                fontSize="12"
                className={isHi ? 'fill-ink' : 'fill-ink/55'}
                fontWeight={isHi ? 600 : 500}
              >
                {totals[i].toFixed(1)}
              </text>
              {/* x label */}
              <text x={x(i) + barW / 2} y={H - 14} textAnchor="middle" fontSize="12" className="fill-ink/55">
                {m.month}
              </text>
            </g>
          )
        })}
      </svg>

      {/* legend */}
      <figcaption className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
        {CATS.map((c) => (
          <span key={c.key} className="inline-flex items-center gap-2 text-sm text-ink/70">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: c.color }} />
            {c.label}
          </span>
        ))}
        <span className="ml-auto text-xs text-ink/45">Amounts in {SEVA.unit} · aggregate, no names</span>
      </figcaption>

      {/* tooltip */}
      {hover !== null && (
        <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 rounded-xl border border-line bg-paper px-4 py-3 text-sm shadow-xl backdrop-blur">
          <p className="mb-1 font-semibold text-ink">
            {MONTHS[hover].month} · {totals[hover].toFixed(1)} {SEVA.unit}
          </p>
          <ul className="space-y-0.5">
            {CATS.map((c) => (
              <li key={c.key} className="flex items-center gap-2 text-ink/75">
                <span className="h-2 w-2 rounded-full" style={{ background: c.color }} />
                <span className="w-16">{c.label}</span>
                <span className="tabular-nums">{MONTHS[hover][c.key].toFixed(1)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </figure>
  )
}
