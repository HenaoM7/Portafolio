interface StatTileProps {
  value: string
  label: string
}

export default function StatTile({ value, label }: StatTileProps) {
  return (
    <div>
      <div className="font-mono text-2xl md:text-3xl text-brass [font-variant-numeric:tabular-nums] leading-none">
        {value}
      </div>
      <div className="mt-2 text-xs text-[#9298a3] max-w-[16ch]">{label}</div>
    </div>
  )
}
