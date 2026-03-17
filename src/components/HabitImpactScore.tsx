"use client";
import { memo } from "react";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Cell,
} from "recharts";

const data = [
    { name: "Meditate", score: 92 },
    { name: "Exercise", score: 85 },
    { name: "Read", score: 70 },
    { name: "Journal", score: 65 },
].sort((a, b) => b.score - a.score);

interface CustomTooltipProps {
    active?: boolean;
    payload?: { value: number; payload: { name: string } }[];
}
const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (!active || !payload?.length) return null;
    return (
        <div className="bg-gradient-to-br from-[#111827] to-[#0d1520] border border-[#1e2d3d] rounded-[10px] py-1.5 px-3 text-xs shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <span className="text-slate-300 font-medium">{payload[0].payload.name}: </span>
            <span className="text-[#4ECDC4] font-bold">{payload[0].value}%</span>
        </div>
    );
};

const HabitImpactScore = memo(function HabitImpactScore() {
    return (
        <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#111827] to-[#0d1520] rounded-[18px] border border-white/[0.06] p-4 sm:p-5 shadow-lg relative overflow-hidden will-change-transform">
            <div className="flex items-center justify-between shrink-0 mb-4 z-10">
                <h2 className="text-slate-100 font-semibold text-base tracking-tight">
                    Habit Impact Score
                </h2>
                <span className="text-slate-500 font-medium text-xs hidden sm:block">This Week</span>
            </div>

            <div className="flex-1 min-h-0 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} layout="vertical" margin={{ top: 0, right: 25, left: -20, bottom: 0 }} barSize={16}>
                        <XAxis type="number" hide domain={[0, 100]} />
                        <YAxis
                            type="category"
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#cbd5e1", fontSize: 12, fontWeight: 500 }}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: "#ffffff05" }} />

                        <Bar dataKey="score" radius={[0, 4, 4, 0]} background={{ fill: '#1e2d3d', radius: 4 }}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill="#4ECDC4" />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
});

export default HabitImpactScore;
