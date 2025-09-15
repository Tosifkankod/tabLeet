import React, { useState, useEffect } from 'react';

const calculateRemainingDay = () => {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const totalDayMs = endOfDay - startOfDay;
    const elapsedMs = now - startOfDay;
    const remainingMs = totalDayMs - elapsedMs;
    const progressPercent = (elapsedMs / totalDayMs) * 100;
    return progressPercent;
};

const TimeLeft = () => {
    const [progressPercent, setProgressPercent] = useState(calculateRemainingDay());

    useEffect(() => {
        const interval = setInterval(() => {
            setProgressPercent(calculateRemainingDay());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='flex w-full justify-between'>
                <p className='text-sm'>0%</p>
                <p className='text-sm'>100%</p>
            </div>
            <div id="progress-container" className="w-full bg-gray-400 rounded-md overflow-hidden">
                <div
                    id="progress-bar"
                    style={{ width: `${progressPercent}%` }}
                    className="h-2 bg-green-900 transition-all duration-1000 ease-in-out text-white text-[9px] flex items-center justify-end px-1"
                >
                </div>
            </div>
        </>
    );
};

export default TimeLeft;