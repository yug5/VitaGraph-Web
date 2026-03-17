"use client";
import { memo } from "react";
import {
    ResponsiveContainer,
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    Tooltip,
    CartesianGrid,
    Cell,
    ReferenceLine,
} from "recharts";

const data = [
    { day: "Mon", steps: 6000, sleep: 7.2 },
    { day: "Tue", steps: 8500, sleep: 8.5 },
    { day: "Wed", steps: 5200, sleep: 6.8 }, // outlier
    { day: "Thu", steps: 11000, sleep: 7.8 },
    { day: "Fri", steps: 4000, sleep: 6.2 }, // outlier
    { day: "Sat", steps: 14000, sleep: 8.0 },
    { day: "Sun", steps: 9000, sleep: 8.2 },
];

interface CustomTooltipProps {
    active?: boolean;
    payload?: { payload: { day: string; steps: number; sleep: number } }[];
}
const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (!active || !payload?.length) return null;
    const data = payload[0].payload;
    return (
        <div className="bg-gradient-to-br from-[#111827] to-[#0d1520] border border-[#1e2d3d] rounded-[10px] p-3 text-sm shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <p className="text-slate-300 font-semibold mb-2 border-b border-[#1e2d3d] pb-1">{data.day}</p>
            <div className="flex flex-col gap-1">
                <p className="text-slate-400 text-xs">Steps: <span className="text-slate-100 font-medium">{data.steps.toLocaleString()}</span></p>
                <p className="text-slate-400 text-xs">Sleep: <span className="text-slate-100 font-medium">{data.sleep}h</span></p>
            </div>
        </div>
    );
};

const SleepStepsCorrelation = memo(function SleepStepsCorrelation() {
    return (
        <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#111827] to-[#0d1520] rounded-[18px] border border-white/[0.06] p-4 sm:p-5 shadow-lg relative overflow-hidden will-change-transform">
            <div className="flex items-center gap-2 shrink-0 mb-4 z-10">
                <h2 className="text-slate-100 font-semibold text-base tracking-tight">
                    Sleep vs. Steps Correlation
                </h2>
            </div>

            <div className="flex-1 min-h-0 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <ScatterChart margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid stroke="#1e2d3d" strokeDasharray="3 3" />
                        <XAxis
                            type="number"
                            dataKey="steps"
                            name="Steps"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#94a3b8", fontSize: 10 }}
                            domain={['dataMin - 1000', 'dataMax + 1000']}
                            tickFormatter={(v) => `${v / 1000}k`}
                            dx={5}
                        />
                        <YAxis
                            type="number"
                            dataKey="sleep"
                            name="Sleep (hrs)"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#94a3b8", fontSize: 10 }}
                            domain={['dataMin - 1', 'dataMax + 1']}
                        />
                        <ZAxis type="category" dataKey="day" name="Day" />
                        <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3', stroke: '#ffffff20' }} />

                        {/* Simple trend line reference */}
                        <ReferenceLine
                            segment={[{ x: 4000, y: 6.2 }, { x: 14000, y: 8.3 }]}
                            stroke="#ffffff15"
                            strokeWidth={2}
                        />

                        <Scatter name="Days" data={data}>
                            {data.map((entry, index) => {
                                const isOutlier = entry.sleep < 7 && entry.steps < 6000;
                                return (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={isOutlier ? "#F4A261" : "#4ECDC4"}
                                        r={6}
                                        stroke="#111827"
                                        strokeWidth={1.5}
                                    />
                                );
                            })}
                        </Scatter>
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
});

export default SleepStepsCorrelation;
