import React from 'react';

export function Day() {
    const plannerDays = []
    const startingDay = new Date();

    for (var i = 0; i < 5; i++) {
        plannerDays.push(startingDay.getDate() + i);
    }

    return (
        <div className='days-container'>
            {plannerDays.map(day => {
                return (
                    <div className='days-container__day'>
                        <span className='days-container__date' key={i}>{day}</span>
                    </div>
                )
            })}
        </div>

    )
}

export default Day;
