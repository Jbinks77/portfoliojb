"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { testimonials } from "@/lib/data";

export function TestimonialsCarouselWidget() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((prev) => (prev + 1) % testimonials.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <Card>
      <CardHeader><CardTitle>Widget #3 — Témoignages</CardTitle></CardHeader>
      <CardContent>
        <div className="flex gap-2 pb-3">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} className={`h-2 w-8 rounded-full ${i === idx ? "bg-cyan-300" : "bg-white/20"}`} aria-label={`Aller au témoignage ${i + 1}`} />
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={idx} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
            <p className="text-white/80">“{testimonials[idx].quote}”</p>
            <p className="mt-3 text-sm text-cyan-200">{testimonials[idx].name} — {testimonials[idx].role}</p>
          </motion.div>
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
