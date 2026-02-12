"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070912]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="text-sm font-semibold tracking-wide text-white">
          Studio <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">[TON NOM]</span>
        </Link>
        <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition",
                  active ? "bg-white/10 text-white" : "text-white/70 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
