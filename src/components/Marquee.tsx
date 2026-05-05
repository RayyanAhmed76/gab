export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden border-y border-border bg-cream py-6">
      <div className="marquee flex shrink-0 items-center gap-12 whitespace-nowrap pr-12">
        {doubled.map((it, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-3xl md:text-5xl">
            {it}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
