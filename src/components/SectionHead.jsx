// Section header — just a large heading (index/kicker no longer shown).
export default function SectionHead({ title, className = '' }) {
  return (
    <div className={className}>
      <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-5xl md:text-6xl">
        {title}
      </h2>
    </div>
  )
}
