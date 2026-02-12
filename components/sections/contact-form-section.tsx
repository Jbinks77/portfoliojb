"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectNative } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type Errors = Partial<Record<"name" | "email" | "budget" | "type" | "message", string>>;

export function ContactFormSection() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", budget: "", type: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});

  const validate = () => {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Nom trop court";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Email invalide";
    if (!form.budget) e.budget = "Budget requis";
    if (!form.type) e.type = "Type de projet requis";
    if (form.message.trim().length < 20) e.message = "Message trop court (20 caractères minimum)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log("Payload prêt pour endpoint:", form);
    toast.success("Message envoyé (simulation). Réponse sous 24-48h.");
    setForm({ name: "", email: "", budget: "", type: "", message: "" });
    setLoading(false);
  };

  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-[1.2fr,0.8fr] md:px-6">
      <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <h1 className="text-3xl font-semibold text-white">Parlons de votre projet</h1>
        <div>
          <Input placeholder="Nom" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          {errors.name && <p className="mt-1 text-xs text-rose-300">{errors.name}</p>}
        </div>
        <div>
          <Input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value.trim().toLowerCase() })} />
          {errors.email && <p className="mt-1 text-xs text-rose-300">{errors.email}</p>}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <SelectNative value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}>
              <option value="">Budget</option>
              <option value="< 1000€">&lt; 1000€</option>
              <option value="1000 - 3000€">1000 - 3000€</option>
              <option value="3000 - 7000€">3000 - 7000€</option>
              <option value="> 7000€">&gt; 7000€</option>
            </SelectNative>
            {errors.budget && <p className="mt-1 text-xs text-rose-300">{errors.budget}</p>}
          </div>
          <div>
            <SelectNative value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
              <option value="">Type de projet</option>
              <option value="Site vitrine">Site vitrine</option>
              <option value="Landing page">Landing page</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Optimisation">Optimisation</option>
            </SelectNative>
            {errors.type && <p className="mt-1 text-xs text-rose-300">{errors.type}</p>}
          </div>
        </div>
        <div>
          <Textarea placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          {errors.message && <p className="mt-1 text-xs text-rose-300">{errors.message}</p>}
        </div>
        <Button type="submit" disabled={loading}>{loading ? "Envoi..." : "Envoyer la demande"}</Button>
      </form>
      <aside className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-white/80">
        <h2 className="text-xl font-semibold text-white">Réponse sous 24-48h</h2>
        <p>Créneaux: Lun-Ven, 09:00 → 18:30.</p>
        <div className="space-y-2 text-sm">
          <a href="#" className="block text-cyan-200">WhatsApp (placeholder)</a>
          <a href="#" className="block text-cyan-200">Calendly (placeholder)</a>
          <a href="mailto:hello@studio-tonnom.fr" className="block text-cyan-200">hello@studio-tonnom.fr</a>
        </div>
      </aside>
    </section>
  );
}
