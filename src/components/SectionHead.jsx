// Horizon-style section header: a full-width rule with the "/A" index on the
// left and a bulleted category label on the right, then a large heading.
export default function SectionHead({ index, kicker, title, className = '' }) {
  return (
    <div className={className}>
      <div className="relative flex items-center border-b border-ink/25 pb-4">
        <span className="font-display text-sm font-semibold text-ink">/{index}</span>
        {kicker && (
          <span className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 text-sm text-ink-2">
            <span className="h-1.5 w-1.5 rounded-full bg-ink" />
            {kicker}
          </span>
        )}
      </div>
      <h2 className="mt-10 font-display text-4xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-5xl md:text-6xl">
        {title}
      </h2>
    </div>
  )
}
