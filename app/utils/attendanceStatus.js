import { Colors } from "../theme/Colors";

export const getStatusConfig = (attendance) => {
    if (!attendance) {
        return {
            label: "No Record",
            color: Colors.LIGHTGREY
        };
    }

    if (attendance.status === "absent") {
        return { label: "Absent", color: Colors.ABSENT };
    }

    if (attendance.isLate) {
        return { label: "Late", color: Colors.LATE };
    }

    return { label: "Present", color: Colors.PRESENT };
};
