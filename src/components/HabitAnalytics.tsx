"use client";
import { useEffect, useRef, useState, memo } from "react";

interface Habit {
  name: string;
  color: string;
  data: number[];
}

const habits: Habit[] = [
  {
    name: "Meditate",
    color: "#4ECDC4",
    data: [3, 4, 3.5, 5, 4, 5.5, 5, 6, 5.5, 6.5, 6, 7],
  },
  {
    name: "Exercise",
    color: "#F4A261",
    data: [2, 3, 2.5, 4, 3, 2, 3.5, 4, 5, 4.5, 5, 5.5],
  },
  {
    name: "Read",
    color: "#4ECDC4",
    data: [5, 4, 5, 3.5, 4.5, 4, 3, 4, 3.5, 4, 4.5, 5],
  },
  {
    name: "Journal",
    color: "#4ECDC4",
    data: [4, 3, 2, 3, 2.5, 1.5, 2, 2.5, 3, 2, 2.5, 3],
  },
];

interface SparklineProps {
  data: number[];
  color: string;
  width?: number;
  height?: number;
}

const Sparkline = memo(function Sparkline({
  data,
  color,
  width = 90,
  height = 32,
}: SparklineProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const pad = 4;
    const w = width;
    const h = height;

    const points = data.map((v, i) => ({
      x: pad + (i / (data.length - 1)) * (w - pad * 2),
      y: h - pad - ((v - min) / range) * (h - pad * 2),
    }));

    // Gradient fill
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, color + "33");
    grad.addColorStop(1, color + "00");

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cpx = (prev.x + curr.x) / 2;
      ctx.bezierCurveTo(cpx, prev.y, cpx, curr.y, curr.x, curr.y);
    }
    ctx.lineTo(points[points.length - 1].x, h);
    ctx.lineTo(points[0].x, h);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Line
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cpx = (prev.x + curr.x) / 2;
      ctx.bezierCurveTo(cpx, prev.y, cpx, curr.y, curr.x, curr.y);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.8;
    ctx.stroke();

    // End dot
    const last = points[points.length - 1];
    ctx.beginPath();
    ctx.arc(last.x, last.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }, [data, color, width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="block will-change-transform"
    />
  );
});

const HabitAnalytics = memo(function HabitAnalytics() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      <div className="w-full h-full flex flex-col bg-gradient-to-br from-[#111827] to-[#0d1520] rounded-[18px] border border-white/[0.06] p-4 sm:p-5 shadow-lg relative overflow-hidden will-change-transform">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center gap-2 shrink-0 mb-4 z-10">
            <h2 className="text-slate-100 font-semibold text-base tracking-tight">
              Habit Analytics
            </h2>
          </div>

          {/* Best Streak */}
          <div className="flex justify-between items-center py-[7px] border-b border-white/10">
            <span className="text-xs text-[#94a3b8] font-normal">
              Best Streak
            </span>
            <span className="text-[11px] font-semibold text-[#4ECDC4] bg-teal-500/10 rounded-md py-[2px] px-2 tracking-[0.02em]">
              10 · 6EH
            </span>
          </div>
        </div>

        {/* Habit rows */}
        <div className="flex flex-col gap-[2px]">
          {habits.map((habit, i) => (
            <div
              key={habit.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`flex justify-between items-center py-2.5 px-2 rounded-[10px] transition-colors duration-200 cursor-pointer will-change-transform ${
                hovered === i ? "bg-white/5" : "bg-transparent"
              }`}
            >
              <span
                className={`text-[13px] font-medium transition-colors duration-200 min-w-[68px] ${
                  hovered === i ? "text-[#f1f5f9]" : "text-[#cbd5e1]"
                }`}
              >
                {habit.name}
              </span>
              <Sparkline
                data={habit.data}
                color={habit.color}
                width={120}
                height={32}
              />
            </div>
          ))}
        </div>

        <div className="mt-[14px] border-t border-white/10 pt-3 pb-2 flex justify-between items-center cursor-pointer">
          <span className="text-xs text-[#64748b] font-normal">Hsc</span>
          <span className="text-[13px] font-semibold text-[#e2e8f0]">
            Monte
          </span>
          <span className="text-sm text-[#4ECDC4] font-light">›</span>
        </div>
      </div>
    </>
  );
});

export default HabitAnalytics;
