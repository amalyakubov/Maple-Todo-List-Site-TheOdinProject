export function getDisplayDate() {
    const DAYNAMES = ['Monday', 'Tuseday', 'Wendesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const MONTHS = ['January', 'February', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let date = new Date();
    let day = DAYNAMES[date.getDay()];
    let dayNumber = date.getDate();
    let month = MONTHS[date.getMonth()];

    return `${day} ${dayNumber} ${month}`;
}