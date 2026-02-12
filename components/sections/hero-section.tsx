"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const badges = ["Next.js", "UI premium", "SEO", "Performance"];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="aurora-bg" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-7xl"
        >
          Studio [TON NOM]
          <span className="block bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent transition hover:brightness-125">
            Des sites web qui font vendre — design, performance, conversion.
          </span>
        </motion.h1>
        <p className="mt-6 max-w-2xl text-white/70 md:text-lg">
          Une direction artistique luxury tech, une architecture solide et des interactions premium qui transforment chaque visite en opportunité business.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild><Link href="/contact">Demander un devis <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          <Button asChild variant="secondary"><Link href="/mes-creations">Voir mes créations</Link></Button>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {badges.map((item) => <Badge key={item}>{item}</Badge>)}
        </div>
      </div>
    </section>
  );
}
