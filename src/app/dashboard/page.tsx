"use client";
import LivingGraph from "@/components/LivingGarph";
import React from "react";

export default function Dashboard() {
  const [selected, setSelected] = React.useState("Week");

  return (
    <div className="flex flex-col h-full">
      {/* top part */}
      <div className=" flex flex-row h-[64px] justify-between border-b border-[#171d31]">
        <h1 className="flex text-2xl p-5  font-semibold  items-center ">
          Living Graph
        </h1>
        <div className="flex  justify-center">
          <div className="flex items-center p-5 text-sm text-[#9ca3af]">
            Last synced 2 min ago
          </div>
          <div className="w-10 h-10 flex items-center m-3 ml-0 justify-center bg-[#161c2a] rounded-full">
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
      <div>
        {/* button */}
        <div className="flex flex-row space-x-1 m-4 ml-0 px-10 ">
          {["Week", "Month", "Custom"].map((option) => (
            <button
              key={option}
              className={`px-4 py-2 text-md rounded-full  ${
                selected === option
                  ? "bg-[#171d31] text-white"
                  : " text-[#9ca3af]"
              }`}
              onClick={() => setSelected(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 px-10 pb-5">
        {/* grid */}
        <div className="grid grid-cols-5 grid-rows-5 gap-4 w-full h-full">
          <div className="col-span-5 bg-[#121523] border-2 rounded-lg border-[#171d31]    row-span-2">
            <LivingGraph />
          </div>
          <div className="row-span-3  bg-[#121523] border-2 rounded-lg border-[#171d31]  col-start-5 row-start-3">
            2
          </div>
          <div className="bg-[#121523] border-2 rounded-lg border-[#171d31]   col-start-1 row-start-3">
            3
          </div>
          <div className="bg-[#121523] border-2 rounded-lg border-[#171d31]  col-start-2 row-start-3">
            4
          </div>
          <div className="bg-[#121523] border-2 rounded-lg border-[#171d31]  col-start-3 row-start-3">
            5
          </div>
          <div className="bg-[#121523] border-2 rounded-lg border-[#171d31] col-start-4 row-start-3">
            6
          </div>
          <div className="col-span-2 bg-[#121523] border-2 rounded-lg border-[#171d31] row-span-2 row-start-4">
            7
          </div>
          <div className="col-span-2 bg-[#121523] border-2 rounded-lg border-[#171d31] row-span-2  col-start-3 row-start-4">
            8
          </div>
        </div>
      </div>
    </div>
  );
}
