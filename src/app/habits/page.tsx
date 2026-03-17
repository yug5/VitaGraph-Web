"use client";
import { useState, memo } from "react";
import { Plus, Check, Trash2, Droplets, Dumbbell, BookOpen, Brain, Moon } from "lucide-react";

interface Habit {
  id: string;
  name: string;
  icon: any; // Using any here for component passthrough simplification, typically would be React.ElementType
  color: string;
  streak: number;
  best: number;
  progress: number;
}

const initialHabits: Habit[] = [
  { id: "1", name: "Drink Water", icon: Droplets, color: "#4ECDC4", streak: 5, best: 12, progress: 70 },
  { id: "2", name: "Exercise", icon: Dumbbell, color: "#F4A261", streak: 3, best: 8, progress: 50 },
  { id: "3", name: "Read Books", icon: BookOpen, color: "#4ECDC4", streak: 7, best: 21, progress: 80 },
  { id: "4", name: "Meditate", icon: Brain, color: "#4ECDC4", streak: 2, best: 14, progress: 40 },
  { id: "5", name: "Sleep Early", icon: Moon, color: "#F4A261", streak: 6, best: 10, progress: 60 },
];

const availableIcons = [
  { icon: Droplets, name: 'Droplets' },
  { icon: Dumbbell, name: 'Dumbbell' },
  { icon: BookOpen, name: 'BookOpen' },
  { icon: Brain, name: 'Brain' },
  { icon: Moon, name: 'Moon' }
];

const HabitsPageContent = memo(function HabitsPageContent() {
  const [habits, setHabits] = useState<Habit[]>(initialHabits);
  const [completedToday, setCompletedToday] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New Habit State
  const [newHabitName, setNewHabitName] = useState("");
  const [newHabitIcon, setNewHabitIcon] = useState<any>(Droplets);
  const [newHabitColor, setNewHabitColor] = useState("#4ECDC4");

  const toggleCheck = (id: string) => {
    setCompletedToday((prev) =>
      prev.includes(id) ? prev.filter((hId) => hId !== id) : [...prev, id]
    );
  };

  const deleteHabit = (id: string) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
    setCompletedToday((prev) => prev.filter((hId) => hId !== id));
  };

  const addHabit = () => {
    if (!newHabitName.trim()) return;

    const newHabit: Habit = {
      id: Date.now().toString(),
      name: newHabitName,
      icon: newHabitIcon,
      color: newHabitColor,
      streak: 0,
      best: 0,
      progress: 0,
    };

    setHabits([...habits, newHabit]);
    setIsModalOpen(false);
    setNewHabitName("");
  };

  const todayStr = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  const completedCount = completedToday.length;
  const totalCount = habits.length;
  const progressPercent = totalCount === 0 ? 0 : (completedCount / totalCount) * 100;

  return (
    <div className="flex flex-col h-full w-full relative">
      <div className="flex flex-col flex-1 overflow-y-auto no-scrollbar pb-10">

        {/* ─── Today's Habits Section ─── */}
        <div className="mb-10 w-full relative">
          <div className="flex items-center justify-between mb-4 mt-2">
            <div>
              <h2 className="text-xl font-bold text-slate-100 tracking-tight">Today's Habits</h2>
              <p className="text-slate-400 text-sm">{todayStr}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#111827] rounded-xl border border-white/[0.06] p-4 mb-6 shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-slate-200">Daily Progress</span>
              <span className="text-sm text-slate-400">{completedCount} of {totalCount} completed</span>
            </div>
            <div className="w-full bg-[#1e2d3d] rounded-full h-2.5 overflow-hidden">
              <div
                className="bg-[#4ECDC4] h-2.5 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {habits.map((habit) => {
              const isChecked = completedToday.includes(habit.id);
              const Icon = habit.icon;
              return (
                <div
                  key={habit.id}
                  className={`relative flex items-center justify-between p-4 rounded-xl border border-white/[0.06] shadow-lg transition-all duration-300 will-change-transform
                    ${isChecked ? 'bg-[#0d1520] border-[#4ECDC4]/30' : 'bg-[#111827] hover:bg-[#18223a]'}`}
                  style={{ borderLeftColor: isChecked ? habit.color : undefined, borderLeftWidth: isChecked ? '4px' : '1px' }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-[${habit.color}]/10 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none rounded-xl ${isChecked ? 'opacity-100' : ''}`} />

                  <div className="flex items-center gap-4 z-10" style={{ borderLeft: !isChecked ? `4px solid ${habit.color}` : 'none', paddingLeft: !isChecked ? '12px' : '0px', marginLeft: !isChecked ? '-1px' : '11px', transition: 'all 0.3s' }}>
                    <div className={`p-2 rounded-lg transition-colors ${isChecked ? 'bg-[#4ECDC4]/10 text-[#4ECDC4]' : 'bg-[#1e2d3d] text-slate-400'}`}>
                      <Icon size={20} />
                    </div>
                    <span className={`font-semibold text-base transition-all ${isChecked ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
                      {habit.name}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleCheck(habit.id)}
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 z-10
                      ${isChecked ? 'bg-[#4ECDC4] border-[#4ECDC4] text-[#111827] scale-100' : 'border-[#1e2d3d] text-transparent hover:border-[#4ECDC4]/50'}`}
                  >
                    <Check size={16} strokeWidth={isChecked ? 3 : 2} className={`transition-transform duration-300 ${isChecked ? 'scale-100' : 'scale-50'}`} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── All Habits Section ─── */}
        <div className="w-full">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-100 tracking-tight">All Habits</h2>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-[#4ECDC4] hover:bg-[#3dbbb3] text-[#0d1520] font-semibold py-2 px-4 rounded-lg transition-colors shadow-lg cursor-pointer"
            >
              <Plus size={18} />
              Add Habit
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {habits.map((habit) => (
              <div
                key={`list-${habit.id}`}
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gradient-to-br from-[#111827] to-[#0d1520] rounded-[18px] border border-white/[0.06] shadow-sm hover:border-white/10 transition-colors gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: habit.color }} />
                  <span className="font-semibold text-slate-200 text-base">{habit.name}</span>
                </div>

                <div className="flex items-center gap-8 text-sm">
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-xs uppercase tracking-wider mb-1">Current</span>
                    <span className="text-slate-200 font-medium">🔥 {habit.streak} days</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-xs uppercase tracking-wider mb-1">Best</span>
                    <span className="text-slate-200 font-medium">{habit.best} days</span>
                  </div>
                  <div className="flex flex-col min-w-[120px]">
                    <span className="text-slate-500 text-xs uppercase tracking-wider mb-1">Weekly Rate</span>
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-[#1e2d3d] rounded-full h-1.5 flex-1">
                        <div className="h-1.5 rounded-full" style={{ width: `${habit.progress}%`, backgroundColor: habit.color }} />
                      </div>
                      <span className="text-slate-300 text-xs font-medium w-8 text-right">{habit.progress}%</span>
                    </div>
                  </div>

                  <button
                    onClick={() => deleteHabit(habit.id)}
                    className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 shrink-0"
                    title="Delete habit"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}

            {habits.length === 0 && (
              <div className="w-full p-8 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-[18px]">
                <p className="text-slate-400 mb-4">No habits defined yet.</p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-[#4ECDC4] font-medium hover:underline"
                >
                  Create your first habit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ─── Add Habit Modal ─── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-md bg-[#111827] border border-[#1e2d3d] rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <h3 className="text-xl font-bold text-slate-100 mb-6 tracking-tight">Create New Habit</h3>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">Habit Name</label>
                <input
                  type="text"
                  value={newHabitName}
                  onChange={(e) => setNewHabitName(e.target.value)}
                  placeholder="e.g. Read 10 Pages"
                  className="w-full bg-[#0d1520] border border-[#1e2d3d] rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:border-[#4ECDC4] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">Select Icon</label>
                <div className="flex gap-2">
                  {availableIcons.map(({ icon: IconComponent, name }) => (
                    <button
                      key={name}
                      onClick={() => setNewHabitIcon(() => IconComponent)}
                      className={`p-3 rounded-lg border transition-colors ${newHabitIcon === IconComponent ? 'bg-[#1e2d3d] border-[#4ECDC4] text-[#4ECDC4]' : 'bg-[#0d1520] border-[#1e2d3d] text-slate-400 hover:bg-[#1e2d3d]'}`}
                    >
                      <IconComponent size={20} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1.5">Accent Color</label>
                <div className="flex gap-3">
                  {['#4ECDC4', '#F4A261'].map((color) => (
                    <button
                      key={color}
                      onClick={() => setNewHabitColor(color)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${newHabitColor === color ? 'scale-110 ring-2 ring-slate-400 ring-offset-2 ring-offset-[#111827]' : 'hover:scale-110'}`}
                      style={{ backgroundColor: color }}
                    >
                      {newHabitColor === color && <Check size={14} className="text-[#111827]" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={addHabit}
                disabled={!newHabitName.trim()}
                className="px-5 py-2 text-sm font-semibold bg-[#4ECDC4] hover:bg-[#3dbbb3] text-[#0d1520] rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                Add Habit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default function HabitPage() {
  return (
    <div className="flex flex-col h-full w-full">
      {/* top part */}
      <div className="flex flex-row h-[64px] shrink-0 justify-between items-center border-b border-[#171d31]">
        <h1 className="flex text-2xl px-5 font-semibold items-center">
          Habits
        </h1>
        <div className="flex justify-center items-center">
          <div className="flex items-center px-5 text-sm text-[#9ca3af]">
            Last synced 2 min ago
          </div>
          <div className="w-10 h-10 flex items-center m-3 ml-0 justify-center bg-[#161c2a] rounded-full cursor-pointer hover:bg-[#1f2937] transition-colors">
            <svg
              className="w-10 h-10 pt-3 fill-[#8e8e8e]"
              viewBox="0 0 448 912"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* content wrapper */}
      <div className="flex-1 overflow-hidden p-5 sm:px-10 pb-5">
        <HabitsPageContent />
      </div>
    </div>
  );
}
