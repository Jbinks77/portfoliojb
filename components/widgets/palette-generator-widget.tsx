"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0")}`;

export function PaletteGeneratorWidget() {
  const [colors, setColors] = useState(["#22d3ee", "#8b5cf6", "#0ea5e9", "#111827"]);

  return (
    <Card>
      <CardHeader><CardTitle>Widget #4 — Générateur de palette</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-4 gap-2">
          {colors.map((color) => (
            <button
              key={color}
              className="h-14 rounded-lg border border-white/20 text-xs text-white/90"
              style={{ background: color }}
              onClick={() => {
                navigator.clipboard.writeText(color);
                toast.success(`Couleur copiée: ${color}`);
              }}
            >
              {color}
            </button>
          ))}
        </div>
        <Button variant="secondary" onClick={() => setColors([randomHex(), randomHex(), randomHex(), randomHex()])}>Nouvelle palette</Button>
      </CardContent>
    </Card>
  );
}
