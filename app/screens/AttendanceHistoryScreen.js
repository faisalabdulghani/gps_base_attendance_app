import { View, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";
import AttendanceCard from "../components/AttendanceCard";
import AttendanceCalendar from "../components/AttendanceCalendar";
import StatusLegend from "../components/StatusLegend";
import AttendanceStatsCard from "../components/AttendanceStatsCard";

import { getMontlyAttendance } from "../api/attendanceApi";
import { Colors } from "../theme/Colors";

export default function AttendanceHistoryScreen() {
    const [attendanceList, setAttendanceList] = useState([]);

    useEffect(() => {
        const fetchAttendance = async () => {
            try {
                const res = await getMontlyAttendance();
                setAttendanceList(res.data);
            } catch {
                console.log("Failed to load attendance");
            }
        };

        fetchAttendance();
    }, []);

    // ✅ STATUS NORMALIZATION
    const getStatusLabel = (item) => {
        if (item.halfDay) return "Leave";
        if (item.isLate) return "Late";
        if (item.status === "present") return "Present";
        if (item.status === "absent") return "Absent";
        return "Absent";
    };

    // ✅ CALENDAR MARKING
    const markedDates = attendanceList.reduce((acc, item) => {
        let dotColor = Colors.PRESENT;

        if (item.status === "absent") dotColor = Colors.ABSENT;
        else if (item.halfDay) dotColor = Colors.LEAVE;
        else if (item.isLate) dotColor = Colors.LATE;

        acc[item.date] = { marked: true, dotColor };
        return acc;
    }, {});

    const formatTime = (iso) => {
        if (!iso) return "--:--";
        return new Date(iso).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const formatDateLabel = (dateStr) =>
        new Date(dateStr).toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
        });

    return (
        <SafeAreaView edges={["top"]} style={styles.container}>
            <Header title="Attendance History" />

            <AttendanceCalendar markedDates={markedDates} />
            <StatusLegend />

            {/* STATS */}
            <View style={styles.statsRow}>
                <AttendanceStatsCard title="Present" value="20" />
                <AttendanceStatsCard title="Absent" value="5" />
                <AttendanceStatsCard title="Late" value="3" />
            </View>

            {/* LIST */}
            <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {attendanceList.map((item) => (
                        <AttendanceCard
                            key={item._id}
                            dateLabel={formatDateLabel(item.date)}
                            status={getStatusLabel(item)}
                            inTime={formatTime(item.checkInTime)}
                            outTime={formatTime(item.checkOutTime)}
                            totalTime={`${item.workDurationHours}h`}
                        />
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 14,
    },
    statsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 6,
    },
});
