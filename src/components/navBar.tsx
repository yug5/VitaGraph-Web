"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import { MdSpaceDashboard } from "react-icons/md";
import { PiStackPlus } from "react-icons/pi";
import { CgInsights } from "react-icons/cg";
import { MdOutlineDisplaySettings } from "react-icons/md";
import { LogOut } from "lucide-react";

export default function NavBar() {
  const pathname = usePathname();

  const list = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <MdSpaceDashboard size={20} />,
    },
    { name: "Habits", href: "/habits", icon: <PiStackPlus size={20} /> },
    { name: "Insights", href: "/insights", icon: <CgInsights size={20} /> },
    {
      name: "Settings",
      href: "/settings",
      icon: <MdOutlineDisplaySettings size={20} />,
    },
  ];

  if (pathname === "/auth") {
    return null;
  }

  return (
    <aside className="sticky top-0 z-50 group h-screen w-[72px] hover:w-[260px] transition-all bg-[#0a0e17] border-r border-[#171d31] flex flex-col shrink-0">
      {/* Logo */}
      <div className="h-[64px] flex items-center justify-start gap-3 px-4 border-b border-[#171d31]">
        <div className="w-[40px] flex justify-center scale-125">
          <Logo />
        </div>
        <span className="opacity-0 group-hover:opacity-100 text-white font-semibold">
          VitaGraph
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 flex flex-col pt-3">
        <div className="flex-1 space-y-1">
          {list.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                  ${active
                    ? "bg-[#161c2a] text-white"
                    : "text-[#9ca3af] hover:bg-[#0b101c]"
                  }`}
              >
                <div className="w-[40px] flex justify-center">{item.icon}</div>
                <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Logout */}
        <div className="pt-3 mt-3 border-t border-[#171d31]">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-[#9ca3af] hover:text-[#4ECDC4] hover:bg-[#0b101c] cursor-pointer">
            <div className="w-[40px] flex justify-center"><LogOut size={20} /></div>
            <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap">
              Logout
            </span>
          </button>
        </div>
      </nav>
    </aside>
  );
}
