import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const TOOL_CATEGORIES = [
  {
    category: "Developer",
    id: "developer",
    tools: [
      {
        name: "JSON Formatter",
        description: "Parse, format, and validate JSON data instantly.",
        href: "/tools/json-formatter",
      },
      {
        name: "Base64 Encoder",
        description: "Encode or decode strings to Base64 format securely.",
        href: "/tools/base64-encoder",
      },
    ]
  },
  {
    category: "Security",
    id: "security",
    tools: [
      {
        name: "Password Generator",
        description: "Generate highly secure, customizable passwords locally.",
        href: "/tools/password-generator",
      },
      {
        name: "Hash Generator",
        description: "Generate MD5, SHA-1, SHA-256 hashes from text.",
        href: "/tools/hash-generator",
      },
    ]
  },
  {
    category: "Text",
    id: "text",
    tools: [
      {
        name: "Word Counter",
        description: "Count words, characters, and reading time for any text.",
        href: "/tools/word-counter",
      },
      {
        name: "Case Converter",
        description: "Convert text between camelCase, snake_case, etc.",
        href: "/tools/case-converter",
      },
    ]
  }
]

export function ToolsGrid() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-8 pb-32">
      <div className="flex flex-col gap-16">
        {TOOL_CATEGORIES.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-24">
            <h2 className="text-2xl font-bold tracking-tight mb-8">
              {cat.category} Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.tools.map((tool) => (
                <Link key={tool.href} href={tool.href} className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg">
                  <Card className="h-full border-border/40 bg-zinc-50/50 dark:bg-card/50 transition-all hover:border-border hover:bg-zinc-100/50 dark:hover:bg-card hover:shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-base font-semibold tracking-tight transition-colors group-hover:text-primary">
                        {tool.name}
                      </CardTitle>
                      <CardDescription className="text-sm font-medium">
                        {tool.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
