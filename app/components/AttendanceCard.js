import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../theme/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function AttendanceCard({
    dateLabel,        // "Mon, Oct 28"
    status,           // "Present" | "Absent" | "Late" | "Leave"
    inTime,           // "09:02 AM"
    outTime,          // "05:58 PM"
    totalTime         // "8h 56m"
}) {

    // Dynamic UI based on status
    const statusStyles = {
        Present: {
            icon: "checkmark-circle",
            iconBg: "#E6F8EF",
            iconColor: Colors.PRESENT,
            badgeBg: "#E6F8EF",
            badgeColor: Colors.PRESENT,
        },
        Absent: {
            icon: "close-circle",
            iconBg: "#FEECEC",
            iconColor: Colors.ABSENT,
            badgeBg: "#FEECEC",
            badgeColor: Colors.ABSENT,
        },
        Late: {
            icon: "time",
            iconBg: "#FFF7E6",
            iconColor: Colors.LATE,
            badgeBg: "#FFF7E6",
            badgeColor: Colors.LATE,
        },
        Leave: {
            icon: "time",
            iconBg: "#FFF7E6",
            iconColor: Colors.LEAVE,
            badgeBg: "#FFF7E6",
            badgeColor: Colors.LEAVE,
        },
    };

    const s = statusStyles[status];

    return (
        <View style={styles.card}>
            {/* ICON */}
            <View style={[styles.iconContainer, { backgroundColor: s.iconBg }]}>
                <Ionicons name={s.icon} size={26} color={s.iconColor} />
            </View>

            {/* MIDDLE SECTION */}
            <View style={{ flex: 1 }}>
                <Text style={styles.dateText}>{dateLabel}</Text>

                <Text style={styles.timeText}>
                    In: {inTime || "--:-- --"}  •  Out: {outTime || "--:-- --"}
                </Text>
                <Text style={styles.totalText}>Total: {totalTime}</Text>
            </View>

            {/* STATUS BADGE */}
            <View style={[styles.badge, { backgroundColor: s.badgeBg }]}>
                <Text style={[styles.badgeText, { color: s.badgeColor }]}>
                    {status}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 16,
        elevation: 3,
        marginBottom: 16,
        alignItems: "center",
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 16,
    },
    dateText: {
        fontSize: 16,
        fontWeight: "700",
        color: Colors.BLACK,
    },
    timeText: {
        marginTop: 4,
        fontSize: 14,
        color: "#6B7280",
    },
    totalText: {
        marginTop: 4,
        fontSize: 14,
        color: "#6B7280",
        fontWeight: "500",
    },
    badge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },
    badgeText: {
        fontSize: 13,
        fontWeight: "600",
    },
});
