"use client";
import React from "react";
import Logo from "./logo";
import { MdSpaceDashboard } from "react-icons/md";
import { PiStackPlus } from "react-icons/pi";
import { CgInsights } from "react-icons/cg";
import { MdOutlineDisplaySettings } from "react-icons/md";

export default function NavBar() {
  const list = [
    { name: "Dashboard", icon: <MdSpaceDashboard size={20} /> },
    { name: "Habits", icon: <PiStackPlus size={20} /> },
    { name: "Insights", icon: <CgInsights size={20} /> },
    { name: "Settings", icon: <MdOutlineDisplaySettings size={20} /> },
  ];

  const [selected, setSelected] = React.useState("Dashboard");

  return (
    <div
      className="
        group
        h-screen
        w-[72px]
        hover:w-[250px]
        transition-all
        duration-200
        bg-[#0a0e17]
        border-r
        border-[#171d31]
        flex
        flex-col
        shrink-0
        mr-0
        pr-0
      "
    >
      <div className="h-[64px] flex items-center justify-start group-hover:pl-10 gap-3 px-4 border-b border-[#171d31]">
        <div className="w-[40px] flex items-center justify-center scale-125">
          <Logo />
        </div>

        <span
          className="
      text-white font-semibold text-lg
      whitespace-nowrap
      opacity-0
      group-hover:opacity-100
      transition-opacity
    "
        >
          VitaGraph
        </span>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {list.map((item) => (
          <div
            key={item.name}
            onClick={() => setSelected(item.name)}
            className={`
              flex items-center gap-3
              px-3 py-2
              rounded-lg
              cursor-pointer
              transition-colors
              ${
                selected === item.name
                  ? "bg-[#161c2a] text-white "
                  : "text-[#9ca3af] hover:bg-[#0b101c]"
              }
            `}
          >
            <div className="w-[40px] flex justify-center">{item.icon}</div>
            <span
              className="
                whitespace-nowrap
                opacity-0
                group-hover:opacity-100
                transition-opacity
              "
            >
              {item.name}
            </span>
          </div>
        ))}
      </nav>
    </div>
  );
}
