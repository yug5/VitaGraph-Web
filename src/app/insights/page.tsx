import React from "react";
import dynamic from "next/dynamic";
import AIInsightsCard from "@/components/AIInsightCards";

const HabitImpactScore = dynamic(() => import("@/components/HabitImpactScore"), { ssr: false });
const SleepStepsCorrelation = dynamic(() => import("@/components/SleepStepsCorrelation"), { ssr: false });
const WeeklyHealthScore = dynamic(() => import("@/components/WeeklyHealthScore"), { ssr: false });
const WeeklyReportCard = dynamic(() => import("@/components/WeeklyReportCard"), { ssr: false });

export default function Insight() {
  return (
    <div className="flex flex-col h-full">
      {/* top part */}
      <div className=" flex flex-row h-[64px] justify-between border-b border-[#171d31]">
        <h1 className="flex text-2xl p-5  font-semibold  items-center ">
          Insights
        </h1>
        <div className="flex  justify-center">
          <div className="flex items-center p-5 text-sm text-[#9ca3af]">
            Last synced 2 min ago
          </div>
          <div className="w-10 h-10 flex items-center m-3 ml-0 justify-center bg-[#161c2a] rounded-full cursor-pointer hover:bg-[#1f2937] transition-colors">
            <svg
              className="w-10 h-10 pt-3 fill-[#8e8e8e]"
              viewBox="0 0 448  912"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="flex-1 py-5 px-10 pb-5 ">
        {/* grid */}
        <div className="grid grid-cols-5 grid-rows-4 gap-4 h-full w-full">
          <div className="col-span-3 row-span-2">
            <WeeklyHealthScore />
          </div>
          <div className="col-span-2 row-span-2 col-start-4">
            <AIInsightsCard />
          </div>
          <div className="col-span-2 row-span-3 row-start-3">
            <SleepStepsCorrelation />
          </div>
          <div className="col-span-2 row-span-3 col-start-3 row-start-3">
            <HabitImpactScore />
          </div>
          <div className="row-span-3 col-start-5 row-start-3">
            <WeeklyReportCard />
          </div>
        </div>
      </div>
    </div>
  );
}
