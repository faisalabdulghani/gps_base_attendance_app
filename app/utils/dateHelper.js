export const getTodayFormattedDate = () => {
    const today = new Date();

    const options = {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric"
    };

    // Example output: "Mon, 28 Oct 2024"
    return today.toLocaleDateString("en-GB", options);
};
