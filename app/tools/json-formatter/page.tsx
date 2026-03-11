import { JsonFormatterClient } from "./json-formatter-client";

export default function JsonFormatterPage() {
  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">JSON Formatter</h1>
        <p className="text-muted-foreground text-base">
          Format, validate, and minify JSON data instantly. Entirely browser-based.
        </p>
      </div>
      <JsonFormatterClient />
    </div>
  );
}
