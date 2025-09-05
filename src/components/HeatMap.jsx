const levels = [
  "bg-gray-200",
  "bg-green-200",
  "bg-green-400",
  "bg-green-600",
  "bg-green-800",
];

export default function Heatmap() {
  const today = new Date();
  const yearStart = new Date(today.getFullYear(), 0, 1);

  // generate days from Jan 1 to today
  const days = [];
  for (let d = new Date(yearStart); d <= today; d.setDate(d.getDate() + 1)) {
    days.push(new Date(d));
  }

  // fake activity data (random counts)
  const activity = days.map((d) => ({
    date: d,
    count: Math.floor(Math.random() * 10),
  }));

  // get color level
  const getLevel = (count) => {
    if (count === 0) return levels[0];
    if (count < 3) return levels[1];
    if (count < 6) return levels[2];
    if (count < 9) return levels[3];
    return levels[4];
  };

  return (
    <div className="flex items-center gap-1 bg-[#1d2120] md:w-fit rounded-xl p-2">
      {/* group by week (15 weeks visible just like your version) */}
      {Array.from({ length: 15 }).map((_, weekIndex) => (
        <div key={weekIndex} className="flex flex-col gap-1">
          {Array.from({ length: 7 }).map((_, dayIndex) => {
            const day = activity[weekIndex * 7 + dayIndex];
            if (!day) return <div key={dayIndex} className="w-4 h-4" />;
            return (
              <div
                key={dayIndex}
                title={`${day.date.toDateString()} - ${day.count} activities`}
                className={`w-4 h-4 rounded-sm ${getLevel(day.count)}`}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
