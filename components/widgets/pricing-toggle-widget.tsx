"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

export function PricingToggleWidget() {
  const [annual, setAnnual] = useState(false);
  const base = 700;
  const price = annual ? base * 10 : base;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Widget #1 — Pricing toggle</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="inline-flex rounded-full border border-white/10 p-1">
          <Button variant={!annual ? "default" : "ghost"} size="sm" onClick={() => setAnnual(false)}>Mensuel</Button>
          <Button variant={annual ? "default" : "ghost"} size="sm" onClick={() => setAnnual(true)}>Annuel</Button>
        </div>
        <motion.p key={String(annual)} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-semibold text-cyan-200">
          {formatCurrency(price)} <span className="text-sm text-white/60">/{annual ? "an" : "mois"}</span>
        </motion.p>
      </CardContent>
    </Card>
  );
}
