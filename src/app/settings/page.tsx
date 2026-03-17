"use client";
import React, { useState } from "react";
import { Camera } from "lucide-react";

export default function SettingsPage() {
  const [themeDark, setThemeDark] = useState(true);
  const [unitsMetric, setUnitsMetric] = useState(true);
  const [language, setLanguage] = useState("English");

  const [notifDaily, setNotifDaily] = useState(true);
  const [notifWeekly, setNotifWeekly] = useState(true);
  const [notifGoals, setNotifGoals] = useState(true);

  const Toggle = ({ active, onChange }: { active: boolean; onChange: () => void }) => (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none cursor-pointer ${active ? 'bg-[#4ECDC4]' : 'bg-[#1e2d3d]'}`}
    >
      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${active ? 'translate-x-6' : 'translate-x-1'}`} />
    </button>
  );

  return (
    <div className="flex flex-col h-full w-full bg-[#0d1520]">
      {/* top part */}
      <div className="flex flex-row h-[64px] shrink-0 justify-between items-center border-b border-[#171d31]">
        <h1 className="flex text-2xl px-5 font-semibold items-center text-white">
          Settings
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
      <div className="flex-1 overflow-y-auto no-scrollbar p-6 sm:p-10 pb-20">
        <div className="max-w-2xl mx-auto space-y-12">

          {/* Section 1 — Profile */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-100 tracking-tight">Profile</h2>
            <div className="bg-[#111827] rounded-xl border border-white/[0.06] p-6">

              <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mb-6">
                <div className="relative shrink-0">
                  <div className="w-20 h-20 rounded-full bg-[#1e2d3d] flex items-center justify-center text-slate-400 border border-white/10 overflow-hidden">
                    <svg className="w-12 h-12 text-slate-500" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996C0 14.631 8.01 10 12 10s12 4.631 12 10.993zM12 8c-2.204 0-4-1.796-4-4s1.796-4 4-4 4 1.796 4 4-1.796 4-4 4z" /></svg>
                  </div>
                  <button className="absolute bottom-0 right-0 w-7 h-7 bg-[#1e2d3d] border border-white/10 rounded-full flex items-center justify-center hover:bg-[#2a3c53] transition-colors cursor-pointer text-slate-300">
                    <Camera size={14} />
                  </button>
                </div>

                <div className="flex-1 w-full space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-slate-400 mb-1.5">Full Name</label>
                      <input
                        type="text"
                        defaultValue="Alex Carter"
                        className="w-full bg-[#1e2d3d] border-none rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:ring-1 focus:ring-[#4ECDC4] transition-shadow placeholder:text-slate-500"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-slate-400 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        defaultValue="alex@example.com"
                        className="w-full bg-[#1e2d3d] border-none rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:ring-1 focus:ring-[#4ECDC4] transition-shadow placeholder:text-slate-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-5 mt-2 border-t border-white/[0.06]">
                <button className="bg-[#4ECDC4] hover:bg-[#3dbbb3] text-[#0d1520] font-semibold py-2 px-6 rounded-lg transition-colors cursor-pointer text-sm">
                  Save Changes
                </button>
              </div>

            </div>
          </section>

          {/* Section 2 — Preferences */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-100 tracking-tight">Preferences</h2>
            <div className="bg-[#111827] rounded-xl border border-white/[0.06] flex flex-col">

              <div className="flex items-center justify-between p-5 sm:px-6 border-b border-white/[0.06]">
                <div>
                  <span className="block font-medium text-slate-200">Theme</span>
                  <span className="block text-sm text-slate-500 mt-0.5">Dark / Light Mode</span>
                </div>
                <Toggle active={themeDark} onChange={() => setThemeDark(!themeDark)} />
              </div>

              <div className="flex items-center justify-between p-5 sm:px-6 border-b border-white/[0.06]">
                <div>
                  <span className="block font-medium text-slate-200">Units</span>
                  <span className="block text-sm text-slate-500 mt-0.5">kg or lbs / km or miles</span>
                </div>
                <Toggle active={unitsMetric} onChange={() => setUnitsMetric(!unitsMetric)} />
              </div>

              <div className="flex items-center justify-between p-5 sm:px-6">
                <div>
                  <span className="block font-medium text-slate-200">Language</span>
                </div>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="bg-[#1e2d3d] border border-white/10 rounded-lg px-3 py-1.5 text-sm text-slate-200 focus:outline-none focus:border-[#4ECDC4] transition-colors cursor-pointer"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                </select>
              </div>

            </div>
          </section>

          {/* Section 3 — Notifications */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-100 tracking-tight">Notifications</h2>
            <div className="bg-[#111827] rounded-xl border border-white/[0.06] flex flex-col">

              <div className="flex items-center justify-between p-5 sm:px-6 border-b border-white/[0.06]">
                <div className="pr-4">
                  <span className="block font-medium text-slate-200">Daily Reminder</span>
                  <span className="block text-sm text-slate-500 mt-0.5">Get reminded to log your daily habits and sleep.</span>
                </div>
                <Toggle active={notifDaily} onChange={() => setNotifDaily(!notifDaily)} />
              </div>

              <div className="flex items-center justify-between p-5 sm:px-6 border-b border-white/[0.06]">
                <div className="pr-4">
                  <span className="block font-medium text-slate-200">Weekly Report</span>
                  <span className="block text-sm text-slate-500 mt-0.5">Receive a summary of your weekly health scores.</span>
                </div>
                <Toggle active={notifWeekly} onChange={() => setNotifWeekly(!notifWeekly)} />
              </div>

              <div className="flex items-center justify-between p-5 sm:px-6">
                <div className="pr-4">
                  <span className="block font-medium text-slate-200">Goal Achieved Alerts</span>
                  <span className="block text-sm text-slate-500 mt-0.5">Be notified when you hit your step or sleep targets.</span>
                </div>
                <Toggle active={notifGoals} onChange={() => setNotifGoals(!notifGoals)} />
              </div>

            </div>
          </section>

          {/* Section 4 — Data & Privacy */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-100 tracking-tight">Data & Privacy</h2>
            <div className="bg-[#111827] rounded-xl border border-white/[0.06] p-6">
              <p className="text-slate-400 text-sm mb-5">Download a copy of your personal data or clear all activity history from this device.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="border border-[#4ECDC4]/50 text-[#4ECDC4] hover:border-[#4ECDC4] hover:bg-[#4ECDC4]/10 font-medium py-2 px-5 rounded-lg transition-colors cursor-pointer text-sm">
                  Export Data
                </button>
                <button className="border border-slate-600 text-slate-300 hover:bg-slate-500/10 hover:border-slate-400 hover:text-white font-medium py-2 px-5 rounded-lg transition-colors cursor-pointer text-sm">
                  Clear All Data
                </button>
              </div>
            </div>
          </section>

          {/* Section 5 — Danger Zone */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-red-500/80 tracking-tight">Danger Zone</h2>
            <div className="bg-red-500/5 rounded-xl border border-red-500/20 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <p className="text-slate-200 font-medium mb-1">Delete Account</p>
                <p className="text-red-400/80 text-sm">This will permanently delete all your data.</p>
              </div>
              <button className="whitespace-nowrap shrink-0 border border-red-500/50 text-red-400 hover:bg-red-500 hover:text-white hover:border-red-500 font-semibold py-2 px-5 rounded-lg transition-colors cursor-pointer text-sm">
                Delete Account
              </button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
