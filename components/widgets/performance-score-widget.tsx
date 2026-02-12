"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const scores = [
  { label: "Performance", value: 96, color: "#22d3ee" },
  { label: "Accessibilité", value: 94, color: "#34d399" },
  { label: "Best Practices", value: 92, color: "#a78bfa" },
];

export function PerformanceScoreWidget() {
  return (
    <Card>
      <CardHeader><CardTitle>Widget #5 — Score performance</CardTitle></CardHeader>
      <CardContent className="grid grid-cols-3 gap-4">
        {scores.map((score) => {
          const circumference = 2 * Math.PI * 24;
          const offset = circumference * (1 - score.value / 100);
          return (
            <div key={score.label} className="flex flex-col items-center gap-2">
              <svg width="72" height="72" viewBox="0 0 72 72">
                <circle cx="36" cy="36" r="24" stroke="#1f2937" strokeWidth="8" fill="none" />
                <motion.circle
                  cx="36"
                  cy="36"
                  r="24"
                  stroke={score.color}
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  whileInView={{ strokeDashoffset: offset }}
                  viewport={{ once: true }}
                  transform="rotate(-90 36 36)"
                />
              </svg>
              <p className="text-sm text-white/70">{score.label}</p>
              <p className="font-semibold text-white">{score.value}</p>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
