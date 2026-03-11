"use client";

import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { chartData } from "@/lib/charData";
import { useEffect, useState } from "react";

const SLEEP_MAX = 600; // minutes (10 h)
const STEPS_MAX = 15000;
const SCREEN_MAX = 480; // minutes (8 h)

const normalizedData = chartData.slice(0, 7).map((item: any) => ({
  ...item,
  sleepN: Math.min((item.sleepMinutes ?? 0) / SLEEP_MAX, 1),
  stepsN: Math.min((item.steps ?? 0) / STEPS_MAX, 1),
  screenN: Math.min((item.screenMinutes ?? 0) / SCREEN_MAX, 1),
}));

// ─── Custom Tooltip ───────────────────────────────────────────────────────────
const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  const d = payload[0]?.payload;

  const fmt = (mins: number) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return h > 0 ? `${h}h ${m}m` : `${m}m`;
  };

  return (
    <div
      style={{
        background: "#0f172a",
        border: "1px solid #1e293b",
        borderRadius: 10,
        padding: "12px 16px",
        minWidth: 180,
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
      }}
    >
      <p
        style={{
          color: "#94a3b8",
          fontSize: 12,
          marginBottom: 8,
          fontWeight: 600,
        }}
      >
        {label}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {[
          {
            color: "#2dd4bf",
            label: "Sleep",
            value: fmt(d?.sleepMinutes ?? 0),
          },
          {
            color: "#38bdf8",
            label: "Steps",
            value: (d?.steps ?? 0).toLocaleString(),
          },
          {
            color: "#fb923c",
            label: "Screen Time",
            value: fmt(d?.screenMinutes ?? 0),
          },
          {
            color: "#94a3b8",
            label: "Habits Completed",
            value: `${d?.habitsCompleted ?? 0} / ${d?.totalHabits ?? 0}`,
          },
        ].map(({ color, label, value }) => (
          <div
            key={label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: color,
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <span style={{ color: "#cbd5e1", flex: 1 }}>{label}</span>
            <span style={{ color: "#f1f5f9", fontWeight: 600 }}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function LivingGraph() {
  const [barGap, setBarGap] = useState(35);

  const colors = {
    sleep: "rgba(45,212,191,0.28)",
    steps: "rgba(56,189,248,0.28)",
    screen: "rgba(251,146,60,0.28)",
    habit: "rgba(148,163,184,0.28)",
  };

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setBarGap(4);
      else if (w < 1024) setBarGap(10);
      else if (w < 1280) setBarGap(20);
      else setBarGap(35);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="w-full h-[320px] p-2 flex flex-col">
      {/* ── Legend — sits ABOVE the chart, outside ResponsiveContainer ── */}
      <div
        style={{
          display: "flex",
          gap: 16,
          margin: 10,
          justifyContent: "flex-end",
        }}
      >
        {[
          { color: "#2dd4bf", label: "Sleep" },
          { color: "#38bdf8", label: "Steps" },
          { color: "#fb923c", label: "Screen Time" },
          { color: "#94a3b8", label: "Habits Completed" },
        ].map(({ color, label }) => (
          <div
            key={label}
            style={{ display: "flex", alignItems: "center", gap: 6 }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: color,
                display: "inline-block",
              }}
            />
            <span style={{ color: "#94a3b8", fontSize: 12 }}>{label}</span>
          </div>
        ))}
      </div>

      {/* ── Chart — flex-1 so it fills the remaining height ── */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={normalizedData}
            barCategoryGap="42%"
            barGap={barGap}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />

            <YAxis
              yAxisId="line"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              domain={[0, 1]}
            />

            <YAxis yAxisId="bar" orientation="right" domain={[0, 2]} hide />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: "#1e293b", strokeWidth: 1 }}
            />

            {/* ── 3 bars per day ── */}
            <Bar
              yAxisId="bar"
              dataKey="sleepN"
              name="Sleep"
              fill={colors.sleep}
              radius={[3, 3, 0, 0]}
              barSize={8}
            />
            <Bar
              yAxisId="bar"
              dataKey="stepsN"
              name="Steps"
              fill={colors.steps}
              radius={[3, 3, 0, 0]}
              barSize={8}
            />
            <Bar
              yAxisId="bar"
              dataKey="screenN"
              name="Screen Time"
              fill={colors.screen}
              radius={[3, 3, 0, 0]}
              barSize={8}
            />
            <Bar
              yAxisId="bar"
              dataKey="habitScore"
              name="Habits Completed"
              fill={colors.habit}
              radius={[3, 3, 0, 0]}
              barSize={8}
            />

            {/* ── Smooth avgScore line with dots ── */}
            <Line
              yAxisId="line"
              type="monotone"
              dataKey="avgScore"
              stroke="#2dd4bf"
              strokeWidth={2}
              dot={{ fill: "#2dd4bf", r: 4, strokeWidth: 0 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
