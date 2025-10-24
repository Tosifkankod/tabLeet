import React, { useEffect, useState } from "react";

const levels = [
  "bg-gray-200",
  "bg-green-200",
  "bg-green-400",
  "bg-green-600",
  "bg-green-800",
];

function Heatmap() {
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {

    fetch(`http://localhost:3000/api/v1/leetcode/calendar/tosifkankod`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async (response) => {
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Error ${response.status}`);
      }

      const data = await response.json().catch((err) => {
        throw new Error(err.message);
      });
      setActivityData(data.data);
      console.log(data);

    }).catch((err) => {
      alert(err.message)
    })

  }, [])

  const today = new Date("2025-09-16T23:59:59.999+05:30"); // Set to end of day in IST
  const startMonth = new Date(today.getFullYear(), today.getMonth() - 2, 1); // July 1, 2025
  const endMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0); // September 30, 2025

  // Generate days from startMonth to endMonth
  const days = [];
  for (let d = new Date(startMonth); d <= endMonth; d.setDate(d.getDate() + 1)) {
    days.push(new Date(d));
  }

  // Map LeetCode data to activity array
  const activityMap = new Map(activityData.map(item => [item.date, item.count]));
  const activity = days.map((d) => {
    // Normalize date to YYYY-MM-DD in IST
    const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    const count = d <= today ? activityMap.get(dateStr) ?? 0 : null; // Use 0 for missing days, null for future
    return { date: d, count };
  });

  // Debug: Log activity for September 14-16 to verify counts
  console.log("Activity for Sep 14-16:");
  activity
    .filter(day => {
      const dateStr = day.date.toISOString().split("T")[0];
      return dateStr >= "2025-09-14" && dateStr <= "2025-09-16";
    })
    .forEach(day => {
      console.log(`${day.date.toDateString()}: ${day.count}`);
    });

  // Get color level
  const getLevel = (count) => {
    if (count === null) return "bg-transparent border border-gray-700"; // Blank for future
    if (count === 0) return levels[0];
    if (count < 3) return levels[1];
    if (count < 6) return levels[2];
    if (count < 9) return levels[3];
    return levels[4];
  };

  // Group days by month
  const months = [];
  let currentMonth = null;
  let currentMonthDays = [];

  activity.forEach((day) => {
    const monthKey = day.date.toLocaleString("default", { year: "numeric", month: "short" });
    if (monthKey !== currentMonth) {
      if (currentMonth !== null) {
        months.push({
          name: currentMonth,
          days: currentMonthDays,
        });
      }
      currentMonth = monthKey;
      currentMonthDays = [];
    }
    currentMonthDays.push(day);
  });
  // Push the last month
  if (currentMonthDays.length > 0) {
    months.push({
      name: currentMonth,
      days: currentMonthDays,
    });
  }

  return (
    <div className="flex gap-4 bg-[#1d2120] rounded-xl p-4 w-full md:w-fit">
      {months.map((month) => {
        // Pad days to start on Sunday
        const firstDay = month.days[0].date;
        const startDayOfWeek = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.
        const paddedDays = [
          ...Array(startDayOfWeek).fill(null), // Pad with null for days before the first
          ...month.days,
        ];

        // Calculate weeks for this month
        const weeks = [];
        for (let i = 0; i < paddedDays.length; i += 7) {
          weeks.push(paddedDays.slice(i, i + 7));
        }

        return (
          <div key={month.name} className="flex flex-col gap-1">
            {/* Month label */}
            <div className="text-white text-xs font-semibold mb-1">{month.name}</div>
            {/* Weeks */}
            <div className="flex gap-1">
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {Array(7)
                    .fill()
                    .map((_, dayIndex) => {
                      const day = week[dayIndex];
                      if (!day)
                        return <div key={dayIndex} className="w-4 h-4" />;
                      return (
                        <div
                          key={dayIndex}
                          title={
                            day.count !== null
                              ? `${day.date.toDateString()} - ${day.count} problems solved`
                              : day.date.toDateString()
                          }
                          className={`w-4 h-4 rounded-sm ${getLevel(day.count)}`}
                        />
                      );
                    })}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default React.memo(Heatmap);