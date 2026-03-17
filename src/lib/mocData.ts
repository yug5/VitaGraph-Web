const dash = [
  { "date": "20 jan", "sleepMinutes": 435, "steps": 6120, "screenMinutes": 210 },
  { "date": "21 jan", "sleepMinutes": 462, "steps": 7480, "screenMinutes": 195 },
  { "date": "22 jan", "sleepMinutes": 398, "steps": 5320, "screenMinutes": 260 },
  { "date": "23 jan", "sleepMinutes": 445, "steps": 8010, "screenMinutes": 180 },
  { "date": "24 jan", "sleepMinutes": 480, "steps": 9100, "screenMinutes": 165 },

  { "date": "25 jan", "sleepMinutes": 455, "steps": 6870, "screenMinutes": 220 },
  { "date": "26 jan", "sleepMinutes": 510, "steps": 10230, "screenMinutes": 150 },
  { "date": "27 jan", "sleepMinutes": 470, "steps": 8450, "screenMinutes": 175 },
  { "date": "28 jan", "sleepMinutes": 430, "steps": 7210, "screenMinutes": 205 },
  { "date": "29 jan", "sleepMinutes": 455, "steps": 7690, "screenMinutes": 190 },

  { "date": "30 jan", "sleepMinutes": 495, "steps": 11020, "screenMinutes": 145 },
  { "date": "31 jan", "sleepMinutes": 440, "steps": 6840, "screenMinutes": 215 },
  { "date": "1 feb", "sleepMinutes": 460, "steps": 7920, "screenMinutes": 185 },
  { "date": "2 feb", "sleepMinutes": 505, "steps": 9800, "screenMinutes": 160 }
]
const dashWeek = [
  { "date": "Mon", "sleepMinutes": 435, "steps": 6120, "screenMinutes": 210 },
  { "date": "Tue", "sleepMinutes": 462, "steps": 7480, "screenMinutes": 195 },
  { "date": "Wed", "sleepMinutes": 398, "steps": 5320, "screenMinutes": 260 },
  { "date": "Thu", "sleepMinutes": 445, "steps": 8010, "screenMinutes": 180 },
  { "date": "Fri", "sleepMinutes": 480, "steps": 9100, "screenMinutes": 165 },

  { "date": "Sat", "sleepMinutes": 510, "steps": 10230, "screenMinutes": 150 },
  { "date": "Sun", "sleepMinutes": 470, "steps": 8450, "screenMinutes": 175 },

]
const habit =
  [
    { "id": "h1", "name": "Meditate" },
    { "id": "h2", "name": "Exercise" },
    { "id": "h3", "name": "Read" },
    { "id": "h4", "name": "Journal" }
  ]
const prog =
  [
    { "habitId": "h1", "date": "2025-01-20", "completed": true },
    { "habitId": "h2", "date": "2025-01-20", "completed": false },
    { "habitId": "h3", "date": "2025-01-20", "completed": true },
    { "habitId": "h4", "date": "2025-01-20", "completed": true },

    { "habitId": "h1", "date": "2025-01-21", "completed": true },
    { "habitId": "h2", "date": "2025-01-21", "completed": true },
    { "habitId": "h3", "date": "2025-01-21", "completed": false },
    { "habitId": "h4", "date": "2025-01-21", "completed": true },

    { "habitId": "h1", "date": "2025-01-22", "completed": false },
    { "habitId": "h2", "date": "2025-01-22", "completed": false },
    { "habitId": "h3", "date": "2025-01-22", "completed": true },
    { "habitId": "h4", "date": "2025-01-22", "completed": false },

    { "habitId": "h1", "date": "2025-01-23", "completed": true },
    { "habitId": "h2", "date": "2025-01-23", "completed": true },
    { "habitId": "h3", "date": "2025-01-23", "completed": true },
    { "habitId": "h4", "date": "2025-01-23", "completed": true },

    { "habitId": "h1", "date": "2025-01-24", "completed": true },
    { "habitId": "h2", "date": "2025-01-24", "completed": false },
    { "habitId": "h3", "date": "2025-01-24", "completed": true },
    { "habitId": "h4", "date": "2025-01-24", "completed": true },

    { "habitId": "h1", "date": "2025-01-25", "completed": true },
    { "habitId": "h2", "date": "2025-01-25", "completed": true },
    { "habitId": "h3", "date": "2025-01-25", "completed": false },
    { "habitId": "h4", "date": "2025-01-25", "completed": true },

    { "habitId": "h1", "date": "2025-01-26", "completed": true },
    { "habitId": "h2", "date": "2025-01-26", "completed": true },
    { "habitId": "h3", "date": "2025-01-26", "completed": true },
    { "habitId": "h4", "date": "2025-01-26", "completed": false },

    { "habitId": "h1", "date": "2025-01-27", "completed": false },
    { "habitId": "h2", "date": "2025-01-27", "completed": true },
    { "habitId": "h3", "date": "2025-01-27", "completed": true },
    { "habitId": "h4", "date": "2025-01-27", "completed": true },

    { "habitId": "h1", "date": "2025-01-28", "completed": true },
    { "habitId": "h2", "date": "2025-01-28", "completed": false },
    { "habitId": "h3", "date": "2025-01-28", "completed": true },
    { "habitId": "h4", "date": "2025-01-28", "completed": true },

    { "habitId": "h1", "date": "2025-01-29", "completed": true },
    { "habitId": "h2", "date": "2025-01-29", "completed": true },
    { "habitId": "h3", "date": "2025-01-29", "completed": false },
    { "habitId": "h4", "date": "2025-01-29", "completed": true },

    { "habitId": "h1", "date": "2025-01-30", "completed": true },
    { "habitId": "h2", "date": "2025-01-30", "completed": true },
    { "habitId": "h3", "date": "2025-01-30", "completed": true },
    { "habitId": "h4", "date": "2025-01-30", "completed": true },

    { "habitId": "h1", "date": "2025-01-31", "completed": false },
    { "habitId": "h2", "date": "2025-01-31", "completed": false },
    { "habitId": "h3", "date": "2025-01-31", "completed": true },
    { "habitId": "h4", "date": "2025-01-31", "completed": false },

    { "habitId": "h1", "date": "2025-02-01", "completed": true },
    { "habitId": "h2", "date": "2025-02-01", "completed": true },
    { "habitId": "h3", "date": "2025-02-01", "completed": true },
    { "habitId": "h4", "date": "2025-02-01", "completed": true },

    { "habitId": "h1", "date": "2025-02-02", "completed": true },
    { "habitId": "h2", "date": "2025-02-02", "completed": true },
    { "habitId": "h3", "date": "2025-02-02", "completed": false },
    { "habitId": "h4", "date": "2025-02-02", "completed": true }
  ]
export { dash, habit, prog, dashWeek };;