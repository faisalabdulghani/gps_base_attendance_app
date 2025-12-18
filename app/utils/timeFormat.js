export const formatTime = (isoString) => {
    if (!isoString) return "--:--";

    const date = new Date(isoString);

    return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true     // 👈 12-hour format (AM/PM)
    });
};


export const formatHoursMinutes = (decimalHours = 0) => {
    let hours = Math.floor(decimalHours);
    let minutes = Math.round((decimalHours - hours) * 60);

    if (minutes === 60) {
        hours += 1;
        minutes = 0;
    }

    return `${hours}h ${minutes}m`;
};

