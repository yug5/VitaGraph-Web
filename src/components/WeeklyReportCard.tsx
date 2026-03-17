"use client";
import { memo } from "react";
import {
    LineChart,
    Line,
} from "recharts";

const performanceMetrics = [
    {
        title: "Sleep Quality",
        grade: "A",
        color: "text-[#4ECDC4]",
        comment: "Consistently hit 7.5hr+ average",
        data: [{ v: 6 }, { v: 7 }, { v: 7.5 }, { v: 8 }, { v: 7.8 }, { v: 8.2 }, { v: 8 }],
    },
    {
        title: "Step Goal",
        grade: "B",
        color: "text-[#4ECDC4] opacity-80",
        comment: "Missed target on Thursday",
        data: [{ v: 8 }, { v: 9 }, { v: 8.5 }, { v: 4 }, { v: 7 }, { v: 9 }, { v: 10 }],
    },
    {
        title: "Screen Time",
        grade: "C",
        color: "text-[#F4A261]",
        comment: "High usage over the weekend",
        data: [{ v: 4 }, { v: 3.5 }, { v: 4.2 }, { v: 3.8 }, { v: 4 }, { v: 6 }, { v: 7 }],
    },
    {
        title: "Habits",
        grade: "A",
        color: "text-[#4ECDC4]",
        comment: "Excellent adherence to core habits",
        data: [{ v: 3 }, { v: 4 }, { v: 4 }, { v: 3.5 }, { v: 4.5 }, { v: 5 }, { v: 4 }],
    },
];

const WeeklyReportCard = memo(function WeeklyReportCard() {
    return (
        <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#111827] to-[#0d1520] rounded-[18px] border border-white/[0.06] p-4 sm:p-5 shadow-lg relative overflow-hidden will-change-transform">
            <div className="flex items-center gap-2 shrink-0 mb-4 z-10">
                <h2 className="text-slate-100 font-semibold text-base tracking-tight">
                    Weekly Report Card
                </h2>
            </div>

            <div className="flex-1 overflow-y-auto flex flex-col gap-3 pr-2 custom-scrollbar">
                {performanceMetrics.map((metric, i) => (
                    <div key={i} className="flex flex-row items-center justify-between p-3 bg-[#0d1520]/50 hover:bg-[#0d1520] transition-colors rounded-lg border border-white/[0.06] cursor-pointer">
                        <div className="flex flex-col flex-1 shrink min-w-0 pr-2">
                            <h3 className="text-sm font-semibold text-slate-200 mb-0.5 truncate">{metric.title}</h3>
                            <p className="text-xs text-slate-400 truncate">{metric.comment}</p>
                        </div>

                        <div className="w-[40px] h-[30px] shrink-0 mr-3 hidden sm:block">
                            <LineChart width={40} height={30} data={metric.data}>
                                <Line
                                    type="monotone"
                                    dataKey="v"
                                    stroke={metric.grade === 'C' ? "#F4A261" : metric.grade === 'B' ? "#4ECDC4" : "#4ECDC4"}
                                    strokeWidth={2}
                                    strokeOpacity={metric.grade === 'B' ? 0.8 : 1}
                                    dot={false}
                                    isAnimationActive={false}
                                />
                            </LineChart>
                        </div>

                        <div className={`text-2xl font-bold shrink-0 ${metric.color} drop-shadow-sm`}>
                            {metric.grade}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default WeeklyReportCard;
