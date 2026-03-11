import { dashWeek, prog, habit } from "@/lib/mocData";

// ─── Raw value arrays for min/max normalization ───────────────────────────────
const sleepValues  = dashWeek.map((d) => d.sleepMinutes);
const stepsValues  = dashWeek.map((d) => d.steps);
const screenValues = dashWeek.map((d) => d.screenMinutes);

const minSleep  = Math.min(...sleepValues);
const maxSleep  = Math.max(...sleepValues);
const minSteps  = Math.min(...stepsValues);
const maxSteps  = Math.max(...stepsValues);
const minScreen = Math.min(...screenValues);
const maxScreen = Math.max(...screenValues);

// ─── Map day label → ISO date string used in prog data ───────────────────────
// dashWeek days line up with the prog dates starting 2025-01-20 (Monday)
const dayToDate: Record<string, string> = {
  Mon: "2025-01-20",
  Tue: "2025-01-21",
  Wed: "2025-01-22",
  Thu: "2025-01-23",
  Fri: "2025-01-24",
  Sat: "2025-01-25",
  Sun: "2025-01-26",
};

const totalHabits = habit.length; // 4

// ─── Build chartData ──────────────────────────────────────────────────────────
const chartData = dashWeek.map((d) => {
  // 0–1 normalized metrics
  const sleepNorm  = (d.sleepMinutes  - minSleep)  / (maxSleep  - minSleep);
  const stepsNorm  = (d.steps         - minSteps)  / (maxSteps  - minSteps);
  const screenNorm = (d.screenMinutes - minScreen) / (maxScreen - minScreen);

  // Habit completion ratio for this day (0–1)
  const isoDate = dayToDate[d.date] ?? "";
  const dayProg = prog.filter((p) => p.date === isoDate);
  const habitsCompleted = dayProg.filter((p) => p.completed).length;
  // If no prog data found for this day, default to 0
  const habitScore = totalHabits > 0 ? habitsCompleted / totalHabits : 0;

  // Overall avg score now includes habitScore
  const avgScore = (sleepNorm + stepsNorm + screenNorm + habitScore) / 4;

  // Average sleep minutes across the whole week (same for every row)
  const avgSleepMin = Math.round(
    sleepValues.reduce((a, b) => a + b, 0) / sleepValues.length
  );

  return {
    ...d,
    sleepNorm,   // 0–1
    stepsNorm,   // 0–1
    screenNorm,  // 0–1
    habitScore,  // 0–1  ← NEW
    avgScore,    // 0–1  overall
    avgSleepMin,
    habitsCompleted, // raw count e.g. 3
    totalHabits,     // raw count e.g. 4
  };
});

export { chartData };