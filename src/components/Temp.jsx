import React, { useEffect, useState } from 'react';
import { localStorageHelper } from '../utils/localStorageHelper';
import { keys } from '../constants/localStoragekeys';

function Temp() {
    const [months, setMonths] = useState(() => {
        let data = localStorageHelper.get(keys.ltHeatMap);
        return data ? data : [];
    });

    useEffect(() => {
        const FIVE_MINUTES = 5 * 60 * 1000;

        const lastTime = localStorage.getItem("lastApiCallTime");
        const now = Date.now();

        const shouldCallAPI = !lastTime || (now - lastTime) >= FIVE_MINUTES;
        if (!shouldCallAPI) {
            console.log("⏳ API not called — 5 minutes not passed yet.");
            return;
        }

        localStorageHelper.set("lastApiCallTime", now);

        let data = localStorageHelper.get(keys.ltUserdata);
        const userName = data.matchedUser.username ? data.matchedUser.username : null;

        if (userName == null) {
            localStorage.clear();
            return;
        }

        fetch(`http://localhost:3000/api/v1/leetcode/calendarmonth/${userName}`, {
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
            localStorageHelper.set(keys.ltHeatMap, data.data.months);
            setMonths(data.data.months);

        }).catch((err) => {
            alert(err.message)
        })

    }, [])

    return (
        <div className="flex gap-4 bg-black rounded-xl p-4 w-93 ">
            {
                months.length > 0 ? (months.map((month) => (
                    <div key={month.name} className="flex flex-col gap-1">
                        <div className="text-white text-xs font-semibold mb-1">{month.name}</div>
                        <div className="flex gap-1">
                            {month.weeks.map((week, weekIndex) => (
                                <div key={weekIndex} className="flex flex-col gap-1">
                                    {week.map((day, dayIndex) => (
                                        <div
                                            style={day.count === 0 ? { background: '#25282A' } : {}}
                                            key={dayIndex}
                                            title={day.day && day.count !== null ? `${new Date(day.day).toDateString()} - ${day.count} activities` : day.day}
                                            className={`w-4 h-4 rounded-sm ${day.level}`}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                ))) : (
                    <div className='flex items-center w-full justify-center flex-col text-white'>
                        <img src="/assets/icons/tab-leet-icon.svg" width={'50px'} alt="" />
                        <h1 className='mt-4'>Loading... </h1>
                    </div>
                )
            }
        </div>
    );
}

export default React.memo(Temp);