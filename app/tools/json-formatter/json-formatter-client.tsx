"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function JsonFormatterClient() {
  const [input, setInput] = React.useState("");
  const [output, setOutput] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  const formatJson = () => {
    try {
      if (!input.trim()) {
        setOutput("");
        setError(null);
        return;
      }
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError(null);
    } catch (e: any) {
      setError(e.message || "Invalid JSON");
      setOutput("");
    }
  };

  const minifyJson = () => {
    try {
      if (!input.trim()) return;
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError(null);
    } catch (e: any) {
      setError(e.message || "Invalid JSON");
      setOutput("");
    }
  };

  const copyToClipboard = () => {
    if (output) {
      navigator.clipboard.writeText(output);
    }
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setError(null);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold tracking-tight">Input JSON</label>
          <Button variant="ghost" size="sm" onClick={clearAll} className="h-8 px-2 text-xs">
            Clear
          </Button>
        </div>
        <Textarea
          placeholder="Paste your JSON here..."
          className="min-h-[400px] font-mono text-sm resize-y"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          spellCheck={false}
        />
        <div className="flex gap-3">
          <Button onClick={formatJson} className="w-full">
            Format
          </Button>
          <Button variant="secondary" onClick={minifyJson} className="w-full">
            Minify
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold tracking-tight">Output</label>
          <Button variant="outline" size="sm" onClick={copyToClipboard} className="h-8 px-3 text-xs" disabled={!output}>
            Copy
          </Button>
        </div>
        <div className={`relative flex flex-col min-h-[400px] rounded-md border ${error ? 'border-destructive/50' : 'border-input'} bg-muted/40 overflow-hidden`}>
          {error ? (
            <div className="p-4 text-sm font-mono text-destructive">
              {error}
            </div>
          ) : (
            <textarea
              readOnly
              className="flex-1 w-full bg-transparent p-3 shadow-sm font-mono text-sm outline-none resize-y"
              value={output}
              placeholder="Result will appear here..."
              spellCheck={false}
            />
          )}
        </div>
      </div>
    </div>
  );
}
