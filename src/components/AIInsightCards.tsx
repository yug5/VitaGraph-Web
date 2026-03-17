"use client";
import { memo } from "react";
import { Moon, Footprints, CalendarDays, Flame } from "lucide-react";

const insights = [
    {
        id: 1,
        icon: Moon,
        title: "Better Sleep",
        description: "Sleep improved 12% on low screen time days.",
        color: "border-[#4ECDC4]",
        iconColor: "text-[#4ECDC4]",
    },
    {
        id: 2,
        icon: Footprints,
        title: "Active Mindfulness",
        description: "You walk 40% more on meditation days.",
        color: "border-[#F4A261]",
        iconColor: "text-[#F4A261]",
    },
    {
        id: 3,
        icon: Flame,
        title: "Consistency",
        description: "Best sleep streak: 4 days this week.",
        color: "border-[#4ECDC4]",
        iconColor: "text-[#4ECDC4]",
    },
    {
        id: 4,
        icon: CalendarDays,
        title: "Weekend Drop",
        description: "Habit completion fell by 15% this weekend.",
        color: "border-[#F4A261]",
        iconColor: "text-[#F4A261]",
    },
];

const AIInsightCards = memo(function AIInsightCards() {
    return (
        <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#111827] to-[#0d1520] rounded-[18px] border border-white/[0.06] p-4 sm:p-5 shadow-lg relative overflow-hidden will-change-transform">
            <div className="flex items-center gap-2 shrink-0 mb-4">
                <h2 className="text-slate-100 font-semibold text-base tracking-tight">
                    Smart Insights
                </h2>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-3 custom-scrollbar">
                {insights.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={item.id}
                            className={`flex items-start gap-3 p-3 bg-[#0d1520]/50 hover:bg-[#0d1520] transition-colors rounded-lg border-l-4 ${item.color} animate-in fade-in slide-in-from-bottom-5 duration-500 fill-mode-both cursor-pointer`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className={`mt-0.5 shrink-0 ${item.iconColor}`}>
                                <Icon size={18} />
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-slate-200 mb-0.5">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-slate-400 leading-snug">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
});

export default AIInsightCards;
