"use client";

import { X } from "lucide-react";

export function SimpleDialog({ open, onClose, title, description, children }: { open: boolean; onClose: () => void; title: string; description?: string; children: React.ReactNode; }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-[#0B0D16] p-6 text-white">
        <button onClick={onClose} className="absolute right-4 top-4 rounded-full p-2 hover:bg-white/10" aria-label="Fermer">
          <X className="h-4 w-4" />
        </button>
        <h3 className="text-xl font-semibold">{title}</h3>
        {description && <p className="mt-1 text-sm text-white/70">{description}</p>}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
