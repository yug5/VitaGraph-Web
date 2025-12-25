import React from "react";

export default function Dashboard() {
  return (
    <div>
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
      <div>{/* button */}</div>
    </div>
  );
}
