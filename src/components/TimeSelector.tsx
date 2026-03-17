"use client";
import { useState } from "react";

export default function TimeSelector() {
    const [selected, setSelected] = useState("Week");
    return (
        <div className="flex flex-row space-x-1 m-4 ml-0 px-10">
            {["Week", "Month", "Custom"].map((option) => (
                <button
                    key={option}
                    className={`px-4 py-2 text-md rounded-full transition-colors cursor-pointer ${selected === option ? "bg-[#171d31] text-white" : "text-[#9ca3af] hover:text-white hover:bg-[#171d31]/50"
                        }`}
                    onClick={() => setSelected(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}
