import { Metadata } from "next";
import { PasswordGeneratorClient } from "./password-generator-client";

export const metadata: Metadata = {
  title: "Secure Password Generator | Toolzeni",
  description: "Generate highly secure, random passwords locally in your browser. Customize length, characters, and symbols with 100% privacy.",
};

export default function PasswordGeneratorPage() {
  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Password Generator</h1>
        <p className="text-muted-foreground text-base">
          Generate highly secure, random passwords entirely within your browser. 
        </p>
      </div>
      <PasswordGeneratorClient />
    </div>
  );
}
