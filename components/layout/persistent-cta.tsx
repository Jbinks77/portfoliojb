import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PersistentCTA() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-black/70 px-5 py-3 text-sm text-cyan-100 shadow-glow backdrop-blur-xl transition hover:scale-[1.02]"
    >
      Demander un devis <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
