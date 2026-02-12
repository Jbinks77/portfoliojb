"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { day: "Lun", visites: 220, conversion: 2.1 },
  { day: "Mar", visites: 260, conversion: 2.7 },
  { day: "Mer", visites: 300, conversion: 3.1 },
  { day: "Jeu", visites: 280, conversion: 2.9 },
  { day: "Ven", visites: 350, conversion: 3.6 },
  { day: "Sam", visites: 400, conversion: 4.1 },
  { day: "Dim", visites: 370, conversion: 3.8 },
];

export function DashboardWidget() {
  return (
    <Card>
      <CardHeader><CardTitle>Widget #2 — Mini dashboard</CardTitle></CardHeader>
      <CardContent className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="vis" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" stroke="#94a3b8" fontSize={12} />
            <YAxis stroke="#94a3b8" fontSize={12} />
            <Tooltip />
            <Area type="monotone" dataKey="visites" stroke="#22d3ee" fill="url(#vis)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
