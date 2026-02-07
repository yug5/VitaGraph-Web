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

import { dash, dashWeek } from "@/lib/mocData";
import { chartData } from "@/lib/charData";

export default function LivingGraph() {
  const dataMax = Math.max(...chartData.map((item) => item.steps));

  return (
    <div className="w-full h-[320px]">
      <ResponsiveContainer>
        <ComposedChart data={chartData} barCategoryGap="20%" barGap={2}>
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
          />
          <YAxis yAxisId="bar" orientation="right" domain={[0, 1]} hide />

          {/* Tooltip */}
          {/* <Tooltip /> */}

          {/* Bars below (steps) */}
          <Bar
            yAxisId="bar"
            dataKey="steps"
            fill="rgba(56,189,248,0.25)"
            radius={[4, 4, 0, 0]}
            barSize={6}
          />
          <Bar
            yAxisId="bar"
            dataKey="screenMinutes"
            fill="rgba(56,189,248,0.25)"
            radius={[4, 4, 0, 0]}
            barSize={6}
          />
          <Bar
            yAxisId="bar"
            dataKey="sleepMinutes"
            fill="rgba(56,189,248,0.25)"
            radius={[4, 4, 0, 0]}
            barSize={6}
          />

          {/* One smooth line */}
          <Line
            yAxisId="line"
            type="monotone"
            dataKey="avgScore"
            stroke="#2dd4bf"
            strokeWidth={2}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
