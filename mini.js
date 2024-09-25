document.addEventListener("DOMContentLoaded", () => {
    function updateClock() {
        const clockElement = document.getElementById('clock');
        const dateElement = document.getElementById('date');
        const dayElement = document.getElementById('day');
        const now = new Date();
        const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
        const bangladeshTime = new Date(utcTime + (3600000 * 6));  // Bangladesh is UTC+6

        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const dayName = daysOfWeek[bangladeshTime.getDay()];
        const monthName = monthsOfYear[bangladeshTime.getMonth()];

        const year = bangladeshTime.getFullYear();
        const date = String(bangladeshTime.getDate()).padStart(2, '0');
        let hours = bangladeshTime.getHours();
        const minutes = String(bangladeshTime.getMinutes()).padStart(2, '0');
        const seconds = String(bangladeshTime.getSeconds()).padStart(2, '0');
        const milliseconds = String(bangladeshTime.getMilliseconds()).padStart(3, '0');

        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        hours = String(hours).padStart(2, '0');

        dayElement.textContent = dayName;
        dateElement.textContent = `${monthName} ${date}, ${year}`;
        clockElement.textContent = `${hours}:${minutes}:${seconds}:${milliseconds} ${ampm}`;
    }

    setInterval(updateClock, 1);
    updateClock();
});