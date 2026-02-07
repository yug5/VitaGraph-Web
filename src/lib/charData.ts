import { dashWeek } from "@/lib/mocData";

const sleepValues = dashWeek.map(d => d.sleepMinutes)
const stepsValues = dashWeek.map(d => d.steps)
const screenValues = dashWeek.map(d => d.screenMinutes)

const minSleep = Math.min(...sleepValues)
const maxSleep = Math.max(...sleepValues)

const minSteps = Math.min(...stepsValues)
const maxSteps = Math.max(...stepsValues)

const minScreen = Math.min(...screenValues)
const maxScreen = Math.max(...screenValues)

const chartData = dashWeek.map(d => {
  const sleepNorm =
    (d.sleepMinutes - minSleep) / (maxSleep - minSleep)

  const stepsNorm =
    (d.steps - minSteps) / (maxSteps - minSteps)

  const screenNorm =
    (d.screenMinutes - minScreen) / (maxScreen - minScreen)

  const avgScore = (sleepNorm + stepsNorm + screenNorm) / 3

  return {
    ...d,
    avgScore
  }
})

export { chartData };