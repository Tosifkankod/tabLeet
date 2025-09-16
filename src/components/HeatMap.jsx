import React from "react";

const levels = [
  "bg-gray-200",
  "bg-green-200",
  "bg-green-400",
  "bg-green-600",
  "bg-green-800",
];

function Heatmap() {
  const today = new Date();
  const startMonth = new Date(today.getFullYear(), today.getMonth() - 2, 1); // 3 months ago
  const endMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0); // end of current month

  // Generate days from startMonth to endMonth
  const days = [];
  for (let d = new Date(startMonth); d <= endMonth; d.setDate(d.getDate() + 1)) {
    days.push(new Date(d));
  }

  // Fake activity data (random counts)
  const activity = days.map((d) => ({
    date: d,
    count: d <= today ? Math.floor(Math.random() * 10) : null, // null = future/blank
  }));

  // Get color level
  const getLevel = (count) => {
    if (count === null) return "bg-transparent border border-gray-700"; // blank for future
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
      {months.map((month, monthIndex) => {
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
                              ? `${day.date.toDateString()} - ${day.count} activities`
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