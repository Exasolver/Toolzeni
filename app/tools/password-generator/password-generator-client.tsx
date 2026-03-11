"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Copy, RefreshCw } from "lucide-react";

export function PasswordGeneratorClient() {
  const [password, setPassword] = React.useState("");
  const [length, setLength] = React.useState(16);
  const [includeUppercase, setIncludeUppercase] = React.useState(true);
  const [includeLowercase, setIncludeLowercase] = React.useState(true);
  const [includeNumbers, setIncludeNumbers] = React.useState(true);
  const [includeSymbols, setIncludeSymbols] = React.useState(true);

  const generatePassword = React.useCallback(() => {
    let charset = "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    if (!charset) {
      setPassword("");
      return;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  React.useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
    }
  };

  return (
    <div className="flex flex-col gap-8 p-6 md:p-8 rounded-xl border border-border/50 bg-card/50 shadow-sm mt-4">
      {/* Password Display */}
      <div className="relative flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-input overflow-hidden group">
        <span className="font-mono text-xl sm:text-2xl tracking-wider select-all break-all pr-12">
          {password || "Select options..."}
        </span>
        <div className="absolute right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="ghost" size="icon" onClick={copyToClipboard} className="h-8 w-8 hover:bg-background">
            <Copy className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={generatePassword} className="h-8 w-8 hover:bg-background">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Length Control */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold tracking-tight">Password Length</label>
            <span className="font-mono text-sm bg-muted px-2 py-1 rounded-md">{length}</span>
          </div>
          <Slider
            value={[length]}
            onValueChange={(val) => setLength(val[0])}
            max={64}
            min={8}
            step={1}
            className="w-full"
          />
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center justify-between p-3 rounded-md border border-border/50 bg-background/50">
            <label htmlFor="uppercase" className="text-sm font-medium leading-none cursor-pointer">
              Uppercase (A-Z)
            </label>
            <Switch
              id="uppercase"
              checked={includeUppercase}
              onCheckedChange={setIncludeUppercase}
            />
          </div>
          <div className="flex items-center justify-between p-3 rounded-md border border-border/50 bg-background/50">
            <label htmlFor="lowercase" className="text-sm font-medium leading-none cursor-pointer">
              Lowercase (a-z)
            </label>
            <Switch
              id="lowercase"
              checked={includeLowercase}
              onCheckedChange={setIncludeLowercase}
            />
          </div>
          <div className="flex items-center justify-between p-3 rounded-md border border-border/50 bg-background/50">
            <label htmlFor="numbers" className="text-sm font-medium leading-none cursor-pointer">
              Numbers (0-9)
            </label>
            <Switch
              id="numbers"
              checked={includeNumbers}
              onCheckedChange={setIncludeNumbers}
            />
          </div>
          <div className="flex items-center justify-between p-3 rounded-md border border-border/50 bg-background/50">
            <label htmlFor="symbols" className="text-sm font-medium leading-none cursor-pointer">
              Symbols (!-?)
            </label>
            <Switch
              id="symbols"
              checked={includeSymbols}
              onCheckedChange={setIncludeSymbols}
            />
          </div>
        </div>
      </div>

      <Button onClick={generatePassword} size="lg" className="w-full font-semibold">
        Generate New Password
      </Button>
    </div>
  );
}
