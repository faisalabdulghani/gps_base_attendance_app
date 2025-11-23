import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../theme/Colors";

export default function StatusLegend() {
    const items = [
        { label: "Present", color: Colors.PRESENT },
        { label: "Absent", color: Colors.ABSENT },
        { label: "Late", color: Colors.LATE },
        { label: "Leave", color: Colors.LEAVE },
    ];

    return (
        <View style={styles.container}>
            {items.map((item, index) => (
                <View key={index} style={styles.row}>
                    <View style={[styles.dot, { backgroundColor: item.color }]} />
                    <Text style={styles.label}>{item.label}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
        paddingHorizontal: 22,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 50,
        marginHorizontal: 4,
    },
    label: {
        fontSize: 14,
        color: Colors.TEXTLIGHT,
        fontWeight: "500",
    },
});
