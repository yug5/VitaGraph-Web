"use client";
import { memo } from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
} from "recharts";

const data = [
  { i: 0, streak: 3, screen: 5 },
  { i: 1, streak: 3.5, screen: 4.5 },
  { i: 2, streak: 4, screen: 5.5 },
  { i: 3, streak: 3.2, screen: 4.8 },
  { i: 4, streak: 4.5, screen: 4 },
  { i: 5, streak: 4, screen: 4.5 },
  { i: 6, streak: 5, screen: 3.8 },
  { i: 7, streak: 4.8, screen: 4.2 },
  { i: 8, streak: 5.5, screen: 3.5 },
  { i: 9, streak: 5, screen: 4 },
  { i: 10, streak: 6, screen: 3.2 },
  { i: 11, streak: 5.8, screen: 3.8 },
  { i: 12, streak: 6.5, screen: 3 },
  { i: 13, streak: 6, screen: 3.5 },
  { i: 14, streak: 7, screen: 4 },
  { i: 15, streak: 6.5, screen: 3.2 },
  { i: 16, streak: 7.2, screen: 3.8 },
  { i: 17, streak: 7, screen: 3.5 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: { name: string; color: string; value: number }[];
}
function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-gradient-to-br from-[#111827] to-[#0d1520] border border-[#1e2d3d] rounded-[10px] p-3 text-xs shadow-[0_8px_32px_rgba(0,0,0,0.5)] will-change-transform">
      {payload.map((p: { name: string; color: string; value: number }) => (
        <div key={p.name} className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: p.color }}
          />
          <span className="text-slate-400 capitalize">{p.name}</span>
          <span className="text-slate-100 font-semibold ml-1">{p.value}</span>
        </div>
      ))}
    </div>
  );
}

const HabitAnalyticsWide = memo(function HabitAnalyticsWide() {
  return (
    <>
      <div
        className="w-full h-full flex flex-col bg-gradient-to-br from-[#111827] to-[#0d1520] rounded-[18px] border border-white/[0.06] p-4 sm:p-5 shadow-lg relative overflow-hidden will-change-transform"
      >
        {/* Header */}
        <div className="flex items-center gap-2 shrink-0 mb-1.5 z-10">
          <h2 className="text-slate-100 font-semibold text-base tracking-tight">
            Habit Analytics
          </h2>
          <span className="text-slate-500 text-xs sm:text-sm">Bet 02 %</span>
        </div>

        {/* Label */}
        <div className="shrink-0 mb-1">
          <span className="text-slate-400 text-xs sm:text-sm font-medium">
            Best Streak
          </span>
        </div>

        {/* Chart — fills remaining height */}
        <div className="flex-1 min-h-0 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 8, right: 8, left: 8, bottom: 4 }}
            >
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ stroke: "rgba(255,255,255,0.08)", strokeWidth: 1 }}
              />
              <Line
                type="monotone"
                dataKey="streak"
                stroke="#4ECDC4"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: "#4ECDC4", strokeWidth: 0 }}
              />
              <Line
                type="monotone"
                dataKey="screen"
                stroke="#F4A261"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: "#F4A261", strokeWidth: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
});

export default HabitAnalyticsWide;
