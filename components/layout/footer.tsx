export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 mt-auto">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-medium text-muted-foreground">
          © {new Date().getFullYear()} Toolzeni. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}
