import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../theme/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

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
            icon: "exit",
            iconBg: "#2d9cdb33",
            iconColor: Colors.LEAVE,
            badgeBg: "#2d9cdb33",
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
            <View style={styles.datacontainer}>
                <Text style={styles.dateText}>{dateLabel}</Text>

                <Text style={styles.timeText}>
                    In: {inTime || "--:-- --"}
                </Text>
                <Text style={styles.timeText}>Out: {outTime || "--:-- --"} </Text>
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
        backgroundColor: Colors.WHITE,
        padding: 16,
        borderRadius: 10,
        marginVertical: 8,
        //alignItems: "center",
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        //margin: 16,
    },

    datacontainer: {
        width: "60%",
        paddingHorizontal: 10,
        flexDirection: "column"
    },
    dateText: {
        fontSize: 16,
        fontWeight: "700",
        color: Colors.BLACK,
    },
    timeText: {
        marginVertical: 2,
        fontSize: 14,
        color: Colors.TEXTLIGHT,
    },
    totalText: {
        paddingVertical: 2,
        fontSize: 14,
        color: Colors.TEXTDARK,
        fontWeight: "500",
    },
    badge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 10,
        height: 28,
    },
    badgeText: {
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
});
