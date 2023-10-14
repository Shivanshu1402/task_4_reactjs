import React, { useState } from 'react';
import './age.css'
function AgeCalculator() {
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(null);

    const calculateAge = () => {
        const today = new Date();
        const birthDate = new Date(birthdate);

        const ageInMilliseconds = today - birthDate;
        const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
        const ageInMonths = ageInYears * 12;
        const ageInDays = Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000));

        const evenYears = ageInYears % 2 === 0;
        const evenMonths = ageInMonths % 2 === 0;

        let evenDaysInMonths = 0;
        if (evenYears && evenMonths) {
            const daysInMonth = birthDate.getDate();
            evenDaysInMonths = daysInMonth % 2 === 0 ? daysInMonth : daysInMonth - 1;
        }

        setAge({
            years: ageInYears,
            months: ageInMonths,
            days: ageInDays,
            evenYears: evenYears,
            evenMonths: evenMonths,
            evenDaysInMonths: evenDaysInMonths
        });
    };

    return (
        <div>
            <input
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
            />
            <button onClick={calculateAge}>Calculate Age</button>
            {age && (
                <div>
                    <p>Age: {age.years} years, {age.months} months, {age.days} days.</p>
                    <p>Even years: {age.evenYears ? 'Yes' : 'No'}</p>
                    <p>Even months: {age.evenMonths ? 'Yes' : 'No'}</p>
                    <p>Even days in even months: {age.evenDaysInMonths}</p>
                </div>
            )}
        </div>
    );
}
export default AgeCalculator;

