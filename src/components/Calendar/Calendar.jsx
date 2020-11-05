import React, { useState, useEffect } from 'react';
import MaterialIcon from '@material/react-material-icon';

import Week from './Week';
import Day from './Day';
import './Calendar.css';

const Calendar = () => {

    const [week, setWeek] = useState([]);
    const [shift, setShift] = useState(0);

    const date = new Date();

    const days = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];

    const today = date.getDate();

    useEffect(() => {

        let currentWeek = []
        date.setDate(date.getDate() + (7 * shift));

        for (let i = 1; i <= 7; i++) {

            let tmpDate = new Date(date)
            tmpDate.setDate(tmpDate.getDate() - date.getDay() + i)

            let daysInMonth = new Date(
                tmpDate.getFullYear(),
                tmpDate.getMonth() + 1,
                0).getDate();

            let day = tmpDate.getDate()

            currentWeek.push(
                day > daysInMonth ?
                    day % (daysInMonth + 1) + 1
                    : day);
        }
        setWeek(currentWeek);
    }, [shift])

    return (
        <div className="calendar">
            <Week>
                <MaterialIcon className="arrow" icon="chevron_left"
                    onClick={() => setShift(shift - 1)}
                />
                {week.map((day, index) => (
                    <Day
                        alias={days[index]}
                        day={day}
                        today={day === today}
                    />
                ))}
                <MaterialIcon className="arrow" icon="chevron_right"
                    onClick={() => setShift(shift + 1)}
                />
            </Week>
        </div>
    )

}

export default Calendar;