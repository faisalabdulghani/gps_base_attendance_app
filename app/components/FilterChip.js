import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../theme/Colors";

export default function FilterChip({ label, icon = "filter-outline", onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Ionicons name={icon} size={16} color={Colors.BLACK} />

            <Text style={styles.label}>{label}</Text>

            <Ionicons name="chevron-down" size={16} color={Colors.BLACK} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.LIGHTGREY,
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginRight: 10,
    },
    label: {
        marginHorizontal: 8,
        color: Colors.BLACK,
        fontSize: 14,
        fontWeight: "500",
    },
});
