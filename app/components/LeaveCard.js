import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { Colors } from "../theme/Colors";

const LeaveCard = ({ title, dateRange, reason, status }) => {
    // Status styling logic
    const getStatusStyle = () => {
        switch (status) {
            case "Approved":
                return {
                    bg: "#D4F8DB",
                    color: Colors.PRESENT,
                    icon: <MaterialIcons name="check-circle" size={16} color={Colors.PRESENT} />,
                };
            case "Pending":
                return {
                    bg: "#FFE9B8",
                    color: Colors.LATE,
                    icon: <Entypo name="back-in-time" size={16} color={Colors.LATE} />,
                };
            case "Rejected":
                return {
                    bg: "#FFD6D6",
                    color: Colors.ABSENT,
                    icon: <MaterialIcons name="cancel" size={16} color={Colors.ABSENT} />,
                };
            default:
                return {
                    bg: "#E0E0E0",
                    color: Colors.LIGHTGREY,
                    icon: <Entypo name="help" size={16} color={Colors.LIGHTGREY} />,
                };
        }
    };

    const style = getStatusStyle();

    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>

            <Text style={styles.date}>{dateRange}</Text>

            <Text style={styles.reason}>Reason: {reason}</Text>

            <View style={[styles.statusContainer, { backgroundColor: style.bg }]}>
                {style.icon}
                <Text style={[styles.statusText, { color: style.color }]}>{status}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.WHITE,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 10,
        marginVertical: 8,
        elevation: 1,
        width: "100%"
    },
    title: {
        fontSize: 16,
        fontWeight: "700",
        color: Colors.BLACK,
    },
    date: {
        fontSize: 13,
        marginVertical: 2,
        color: Colors.LIGHTGREY,
    },
    reason: {
        fontSize: 13,
        color: Colors.TEXTDARK,
    },
    statusContainer: {
        marginVertical: 6,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        gap: 6,
    },
    statusText: {
        fontSize: 13,
        fontWeight: "600",
    },
});

export default LeaveCard;
