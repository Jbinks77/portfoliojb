import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const Badge = ({ className, children }: { className?: string; children: ReactNode }) => {
  return <span className={cn("rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200", className)}>{children}</span>;
};
