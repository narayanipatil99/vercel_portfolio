interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ title, subtitle, className = "" }: SectionHeadingProps) {
  return (
    <div className={`text-center mb-20 ${className}`}>
      <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{title}</h2>
      {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{subtitle}</p>}
    </div>
  )
}
