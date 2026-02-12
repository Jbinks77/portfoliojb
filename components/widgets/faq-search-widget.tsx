"use client";

import { useMemo, useState } from "react";
import { SimpleAccordion } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { faqs } from "@/lib/data";

export function FaqSearchWidget() {
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => faqs.filter((f) => f.question.toLowerCase().includes(search.toLowerCase())), [search]);

  return (
    <Card>
      <CardHeader><CardTitle>Widget #6 — FAQ avec recherche</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher une question..." />
        <SimpleAccordion items={filtered.map((faq) => ({ title: faq.question, content: faq.answer }))} />
      </CardContent>
    </Card>
  );
}
