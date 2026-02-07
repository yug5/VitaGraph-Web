import React from "react";

export default function Habit() {
  const habits = [
    { name: "Drink Water", date: "2025-12-29", streak: 5, progress: 70 },
    { name: "Exercise", date: "2025-12-29", streak: 3, progress: 50 },
    { name: "Read Books", date: "2025-12-29", streak: 7, progress: 80 },
    { name: "Meditate", date: "2025-12-29", streak: 2, progress: 40 },
    { name: "Sleep Early", date: "2025-12-29", streak: 6, progress: 60 },
  ];
  return (
    <div className="flex flex-col h-full">
      {/* top part */}
      <div className=" flex flex-row h-[64px] justify-between border-b border-[#171d31]">
        <h1 className="flex text-2xl p-5  font-semibold  items-center ">
          Habits
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

      <div className="flex-1 py-5 px-10 pb-5 ">
        {/* grid */}

        <div className="grid grid-cols-5 grid-rows-5 gap-4 h-full w-full">
          <div className="col-span-3 text-xl font-semibold row-span-5 ">
            Habit list
            <div className="max-h-[calc(100vh-128px)] overflow-y-auto no-scrollbar py-1 pr-2">
              {habits.map((habit) => (
                <div
                  key={habit.name}
                  className="mb-4 p-4 bg-[#121523] border-2 rounded-lg border-[#171d31]"
                >
                  <h2 className="text-lg font-semibold text-white mb-2">
                    {habit.name}
                  </h2>
                  <p className="text-sm text-[#9ca3af] mb-1">
                    Date: {habit.date}
                  </p>
                  <p className="text-sm text-[#9ca3af] mb-1">
                    Streak: {habit.streak} days
                  </p>
                  <div className="w-full bg-[#171d31] rounded-full h-4">
                    <div
                      className="bg-[#0a7482] h-4 rounded-full"
                      style={{ width: `${habit.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2 row-span-5 col-start-4 bg-[#121523] border-2 rounded-lg border-[#171d31]">
            2
          </div>
        </div>
      </div>
    </div>
  );
}
