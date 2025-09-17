import React, { useEffect, useState } from 'react';


function Temp() {
    const [months, setMonths] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/leetcode/calendarmonth/tosifkankod`, {
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
            setMonths(data.data.months);
            console.log(data);

        }).catch((err) => {
            alert(err.message)
        })

    }, [])

    return (
        <div className="flex gap-4 bg-[#1d2120] rounded-xl p-4 w-93 ">
            {
                months.length > 0 ? (months.map((month) => (
                    <div key={month.name} className="flex flex-col gap-1">
                        <div className="text-white text-xs font-semibold mb-1">{month.name}</div>
                        <div className="flex gap-1">
                            {month.weeks.map((week, weekIndex) => (
                                <div key={weekIndex} className="flex flex-col gap-1">
                                    {week.map((day, dayIndex) => (
                                        <div
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