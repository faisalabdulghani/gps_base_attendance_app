import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../theme/Colors";

export default function TodayDate({ dateLabel = "Mon, 28 Oct 2024" }) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.iconWrapper}>
                    <Ionicons
                        name="calendar-outline"
                        size={22}
                        color={Colors.LIGHTGREY}
                    />
                </View>

                <Text style={styles.dateText}>{dateLabel}</Text>
            </View>

            <View style={styles.todayBadge}>
                <Text style={styles.todayText}>Today</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Colors.WHITE,
        paddingHorizontal: 18,
        paddingVertical: 16,
        borderRadius: 10,
        elevation: 3,
        shadowColor: Colors.BLACK,
        shadowOpacity: 0.07,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 6,
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
    },

    iconWrapper: {
        width: 42,
        height: 42,
        justifyContent: "center",
        alignItems: "center",
    },

    dateText: {
        fontSize: 17,
        fontWeight: "700",
        color: Colors.BLACK,
    },

    todayBadge: {
        backgroundColor: Colors.LIGHTGREY + "20",
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 10,
    },

    todayText: {
        color: Colors.BLACK,
        fontWeight: "600",
        fontSize: 13,
    },
});
