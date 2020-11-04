import React, { useState, useEffect } from 'react';

import Week from './Week';
import Day from './Day';

const Calendar = () => {

    const [month, setMonth] = useState("");
    const [week, setWeek] = useState([]);
    const date = new Date();
    const days = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];
    const today = date.getDate();

    useEffect(() => {
        let currentWeek = []
        for (let i = 1; i <= 7; i++) {
            let first = date.getDate() - date.getDay() + i;
            currentWeek.push(first);
        }
        setWeek(currentWeek);
    }, [])

    return (
        <Week>
            {week.map((day, index) => (
                <Day
                    alias={days[index]}
                    day={day}
                    today={day === today}
                />
            ))}
        </Week>
    )

}

export default Calendar;