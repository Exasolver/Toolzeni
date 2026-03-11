import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-8">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/toolzeni_logo.svg"
              alt="Toolzeni Logo"
              width={100}
              height={32}
              className="h-6 w-auto dark:invert transition-colors"
              priority
            />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/#developer"
              className="flex items-center text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              Developer
            </Link>
            <Link
              href="/#text"
              className="flex items-center text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              Text
            </Link>
            <Link
              href="/#security"
              className="flex items-center text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              Security
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
