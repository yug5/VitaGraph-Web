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
import { useEffect, useState, memo } from "react";

const SLEEP_MAX = 600; // minutes (10 h)
const STEPS_MAX = 15000;
const SCREEN_MAX = 480; // minutes (8 h)

const normalizedData = chartData.slice(0, 7).map((item: { sleepMinutes?: number; steps?: number; screenMinutes?: number;[key: string]: unknown }) => ({
  ...item,
  sleepN: Math.min((item.sleepMinutes ?? 0) / SLEEP_MAX, 1),
  stepsN: Math.min((item.steps ?? 0) / STEPS_MAX, 1),
  screenN: Math.min((item.screenMinutes ?? 0) / SCREEN_MAX, 1),
}));

const chartColors = {
  sleep: "rgba(78,205,196,0.3)",
  steps: "rgba(244,162,97,0.3)",
  screen: "rgba(78,205,196,0.15)",
  habit: "rgba(244,162,97,0.15)",
};

// ─── Custom Tooltip ───────────────────────────────────────────────────────────
interface CustomTooltipProps {
  active?: boolean;
  payload?: { payload: { sleepMinutes?: number; steps?: number; screenMinutes?: number; habitsCompleted?: number; totalHabits?: number } }[];
  label?: string;
}
const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (!active || !payload?.length) return null;
  const d = payload[0]?.payload;

  const fmt = (mins: number) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return h > 0 ? `${h}h ${m}m` : `${m}m`;
  };

  return (
    <div className="bg-gradient-to-br from-[#111827] to-[#0d1520] border border-[#1e293b] rounded-[10px] py-3 px-4 min-w-[180px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] will-change-transform">
      <p className="text-[#94a3b8] text-xs mb-2 font-semibold">
        {label}
      </p>
      <div className="flex flex-col gap-[7px]">
        {[
          {
            color: "#4ECDC4",
            label: "Sleep",
            value: fmt(d?.sleepMinutes ?? 0),
          },
          {
            color: "#F4A261",
            label: "Steps",
            value: (d?.steps ?? 0).toLocaleString(),
          },
          {
            color: "#4ECDC4",
            label: "Screen Time",
            value: fmt(d?.screenMinutes ?? 0),
          },
          {
            color: "#F4A261",
            label: "Habits Completed",
            value: `${d?.habitsCompleted ?? 0} / ${d?.totalHabits ?? 0}`,
          },
        ].map(({ color, label, value }) => (
          <div
            key={label}
            className="flex items-center gap-2 text-[13px]"
          >
            <span
              className="w-2 h-2 rounded-full inline-block shrink-0"
              style={{ background: color }}
            />
            <span className="text-[#cbd5e1] flex-1">{label}</span>
            <span className="text-[#f1f5f9] font-semibold">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const LivingGraph = memo(function LivingGraph() {
  const [barGap, setBarGap] = useState(35);

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
    <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#111827] to-[#0d1520] rounded-[18px] border border-white/[0.06] p-4 sm:p-5 shadow-lg relative overflow-hidden will-change-transform">
      {/* ── Legend — sits ABOVE the chart, outside ResponsiveContainer ── */}
      <div className="flex gap-4 m-2.5 justify-end">
        {[
          { color: "#4ECDC4", label: "Sleep" },
          { color: "#F4A261", label: "Steps" },
          { color: "#4ECDC4", label: "Screen Time" },
          { color: "#F4A261", label: "Habits Completed" },
        ].map(({ color, label }) => (
          <div
            key={label}
            className="flex items-center gap-[6px]"
          >
            <span
              className="w-[10px] h-[10px] rounded-full inline-block"
              style={{ background: color }}
            />
            <span className="text-[#94a3b8] text-xs">{label}</span>
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
              fill={chartColors.sleep}
              radius={[3, 3, 0, 0]}
              barSize={8}
            />
            <Bar
              yAxisId="bar"
              dataKey="stepsN"
              name="Steps"
              fill={chartColors.steps}
              radius={[3, 3, 0, 0]}
              barSize={8}
            />
            <Bar
              yAxisId="bar"
              dataKey="screenN"
              name="Screen Time"
              fill={chartColors.screen}
              radius={[3, 3, 0, 0]}
              barSize={8}
            />
            <Bar
              yAxisId="bar"
              dataKey="habitScore"
              name="Habits Completed"
              fill={chartColors.habit}
              radius={[3, 3, 0, 0]}
              barSize={8}
            />

            {/* ── Smooth avgScore line with dots ── */}
            <Line
              yAxisId="line"
              type="monotone"
              dataKey="avgScore"
              stroke="#4ECDC4"
              strokeWidth={2}
              dot={{ fill: "#4ECDC4", r: 4, strokeWidth: 0 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
});

export default LivingGraph;
