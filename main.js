const getSleepHours = day => {
    if(day === 'Monday') return 5;
    else if (day === 'Tuesday') return 5;
    else if (day === 'Wednesday') return 5;
    else if (day === 'Thursday') return 6;
    else if (day === 'Friday') return 5;
    else if (day === 'Saturday') return 4;
    else if (day === 'Sunday') return 5;
    else return 'Wrong day'
}

const getActualSleepHours = () => 
getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')

const getIdealSleepHours = idealHours =>
idealHours * 7;

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours() 
    console.log(actualSleepHours)
    const idealSleepHours = getIdealSleepHours(5)
    console.log(idealSleepHours)

    if(actualSleepHours === idealSleepHours) return `User slept the right amount of hours: ${actualSleepHours}`;
    else if (actualSleepHours > idealSleepHours) return `User got ${actualSleepHours - idealSleepHours} extra hours of sleep.`;
    else return `User should get ${idealSleepHours - actualSleepHours} more hours of sleep.`;
}

console.log(calculateSleepDebt())
