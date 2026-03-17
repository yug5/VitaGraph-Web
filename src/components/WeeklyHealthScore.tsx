"use client";
import { memo } from "react";
import {
    ResponsiveContainer,
    ComposedChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

const data = [
    { day: "Mon", score: 72 },
    { day: "Tue", score: 85 }, // best
    { day: "Wed", score: 68 },
    { day: "Thu", score: 76 },
    { day: "Fri", score: 62 }, // worst
    { day: "Sat", score: 80 },
    { day: "Sun", score: 82 },
];

interface CustomDotProps {
    cx?: number;
    cy?: number;
    payload?: { day: string };
}
const CustomDot = (props: CustomDotProps) => {
    const { cx, cy, payload } = props;
    if (payload?.day === "Tue") {
        return <circle cx={cx} cy={cy} r={6} fill="#4ECDC4" stroke="#111827" strokeWidth={2} />;
    }
    if (payload?.day === "Fri") {
        return <circle cx={cx} cy={cy} r={6} fill="#F4A261" stroke="#111827" strokeWidth={2} />;
    }
    return null;
};

interface CustomTooltipProps {
    active?: boolean;
    payload?: { value: number }[];
    label?: string;
}
const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (!active || !payload?.length) return null;
    return (
        <div className="bg-gradient-to-br from-[#111827] to-[#0d1520] border border-[#1e2d3d] rounded-[10px] p-3 text-sm shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <p className="text-slate-400 mb-1">{label}</p>
            <p className="text-slate-100 font-semibold">
                Score: <span className="text-[#4ECDC4]">{payload[0].value}</span>
            </p>
        </div>
    );
};

const WeeklyHealthScore = memo(function WeeklyHealthScore() {
    return (
        <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#111827] to-[#0d1520] rounded-[18px] border border-white/[0.06] p-4 sm:p-5 shadow-lg relative overflow-hidden will-change-transform">
            <div className="flex items-center gap-2 shrink-0 mb-4 z-10">
                <h2 className="text-slate-100 font-semibold text-base tracking-tight">
                    Weekly Health Score
                </h2>
            </div>

            <div className="flex-1 min-h-0 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4ECDC4" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#4ECDC4" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid stroke="#1e2d3d" strokeDasharray="3 3" vertical={false} />
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#94a3b8", fontSize: 12 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#94a3b8", fontSize: 12 }}
                            domain={[50, 100]}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#ffffff10" }} />
                        <Area
                            type="monotone"
                            dataKey="score"
                            stroke="#4ECDC4"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorScore)"
                            dot={<CustomDot />}
                            activeDot={{ r: 6, fill: "#4ECDC4", stroke: "#111827", strokeWidth: 2 }}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
});

export default WeeklyHealthScore;
