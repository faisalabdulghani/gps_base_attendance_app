import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { fonts, sizes } from "../theme/typography";
import { Colors } from "../theme/Colors";

const StatusCard = ({
    status = "No Status",
    statusColor = Colors.TEXTLIGHT, // Green color as default
    totalTime = "--:--",
    checkIn = "--:--",
    checkOut = "--:--",
}) => {
    // Function to get light background color from status color
    const getLightColor = (color) => {
        // This creates a light version of any color
        // You can customize opacity here
        return `${color}30`; // Adds 20 (12.5% opacity) in hex
    };

    return (
        <View
            style={styles.card}
        >
            {/* Header Row */}
            <View style={styles.headerRow}>
                <Text style={styles.title}>Today's Status</Text>
            </View>

            {/* Status Badge and Total Time Row */}
            <View style={styles.badgeContainer}>
                <View style={[
                    styles.statusBadge,
                    { backgroundColor: getLightColor(statusColor) }
                ]}>
                    <View style={[styles.dot, { backgroundColor: statusColor }]} />
                    <Text style={[styles.badgeText, { color: statusColor }]}>
                        {status}
                    </Text>
                </View>
                <Text style={styles.totalText}>Total: {totalTime}</Text>
            </View>

            <View style={styles.divider} />

            {/* Check-in / Check-out Row */}
            <View style={styles.timeRow}>
                <View style={styles.timeBlock}>
                    <Text style={styles.label}>Check-in</Text>
                    <Text style={styles.time}>{checkIn}</Text>
                </View>
                <View style={styles.verticalDivider} />
                <View style={styles.timeBlock}>
                    <Text style={styles.label}>Check-out</Text>
                    <Text style={styles.time}>{checkOut}</Text>
                </View>
            </View>
        </View>
    );
};

export default StatusCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.WHITE,
        padding: 20,
        borderRadius: 10,
        shadowColor: Colors.BLACK,
        shadowOpacity: 0.05,
        shadowRadius: 10,

        width: "100%",
    },
    headerRow: {
        paddingVertical: 3,
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        color: Colors.LIGHTGREY,
    },
    badgeContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 4,

    },
    statusBadge: {
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 4,
        marginVertical: 8,

    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 4,
    },
    badgeText: {
        fontSize: 16,
        fontWeight: "600",
        fontFamily: fonts.BOLD,
    },
    totalText: {
        fontSize: 16,
        fontWeight: "500",
        color: Colors.DARKGREY,
    },
    divider: {
        height: 1,
        backgroundColor: Colors.DIVIDERCOLOR,
        marginVertical: 16,
    },
    timeRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    timeBlock: {
        alignItems: "center",
        flex: 1,
    },
    label: {
        fontSize: 14,
        color: Colors.LIGHTGREY,
        marginBottom: 4,
    },
    time: {
        fontSize: 20,
        fontWeight: "700",
        color: Colors.DARKGREY,
    },
    verticalDivider: {
        width: 1,
        height: 40,
        backgroundColor: Colors.DIVIDERCOLOR,
    },
});