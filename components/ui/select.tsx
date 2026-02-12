"use client";

import type { ReactNode, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function SelectNative({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { children: ReactNode }) {
  return (
    <select
      className={cn("flex h-11 w-full rounded-xl border border-white/15 bg-black/30 px-4 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400", className)}
      {...props}
    >
      {children}
    </select>
  );
}
