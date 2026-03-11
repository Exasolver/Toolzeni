import { Badge } from "@/components/ui/badge"

export function Hero() {
  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-4 py-24 md:py-32 lg:py-40 text-center">
      <Badge variant="outline" className="px-3 py-1 font-mono text-xs font-medium tracking-tight rounded-full bg-muted/50 text-foreground/80 mb-4 antialiased">
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2" />
        100% Browser-Only Processing
      </Badge>
      
      <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
        Privacy-First Utility Tools. <br className="hidden sm:inline" />
        <span className="text-muted-foreground">Processed entirely on your device.</span>
      </h1>
      
      <p className="max-w-[750px] text-lg sm:text-xl text-muted-foreground font-medium mt-4">
        A premium collection of essential developer, text, and security utilities. 
        No data leaves your browser. Fast, secure, and minimal.
      </p>
    </section>
  )
}
