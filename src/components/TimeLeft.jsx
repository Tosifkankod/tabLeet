import React, { useState, useEffect } from "react";

const calculateRemainingDay = () => {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const totalDayMs = endOfDay - startOfDay;
    const elapsedMs = now - startOfDay;
    return (elapsedMs / totalDayMs) * 100;
};

const TimeLeft = () => {
    const [progressPercent, setProgressPercent] = useState(calculateRemainingDay());

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (!document.hidden) {
                setProgressPercent(calculateRemainingDay());
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    return (
        <>
            <div className="flex w-full justify-between">
                <p className="text-sm">0%</p>
                <p className="text-sm">100%</p>
            </div>
            <div className="w-full bg-gray-400 rounded-md overflow-hidden">
                <div
                    style={{ width: `${progressPercent}%` }}
                    className="h-3 bg-[var(--color-primary)] transition-all duration-1000 ease-in-out text-white text-[9px] flex items-center justify-end px-1"
                >
                    {Math.ceil(progressPercent)}%
                </div>
            </div>
        </>
    );
};

export default TimeLeft;
