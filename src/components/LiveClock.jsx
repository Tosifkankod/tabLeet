import { useEffect, useState } from "react";

export default function LiveClock() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      // --- Time ---
      let hours = now.getHours();
      const minutes = now.getMinutes();
      // const ampm = hours >= 12 ? "pm" : "am";s
      hours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
      // setTime(`${hours}:${formattedMinutes} ${ampm}`);
      setTime(`${hours}:${formattedMinutes}`);

      // --- Date ---
      const options = { weekday: "long", month: "short", day: "numeric" };
      setDate(now.toLocaleDateString("en-US", options));
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-1">
      <div className="text-5xl md:text-9xl text-[var(--color-primary)]">{time}</div>
      <div className="text-2xl md:text-3xl text-[var(--color-primary)]">{date}</div>
    </div>
  );
}
