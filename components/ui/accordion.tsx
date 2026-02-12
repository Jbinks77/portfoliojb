"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function SimpleAccordion({ items }: { items: { title: string; content: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      {items.map((item, i) => (
        <div key={item.title} className="border-b border-white/10">
          <button className="flex w-full items-center justify-between py-4 text-left text-white" onClick={() => setOpen(open === i ? null : i)}>
            {item.title}
            <ChevronDown className={`h-4 w-4 transition-transform ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && <p className="pb-4 text-sm text-white/70">{item.content}</p>}
        </div>
      ))}
    </div>
  );
}
