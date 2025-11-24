import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../theme/Colors";

export default function ProfileDetailCard({ title, label, value, icon, label1, value1, icon1 }) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>

            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Ionicons name={icon} size={24} color={Colors.DARKGREY} />
                </View>

                <View>
                    <Text style={styles.label}>{label}</Text>
                    <Text style={styles.value}>{value}</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <Ionicons name={icon1} size={24} color={Colors.DARKGREY} />
                </View>

                <View>
                    <Text style={styles.label}>{label1}</Text>
                    <Text style={styles.value}>{value1}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        padding: 18,
        borderRadius: 16,
        marginTop: 16,
        elevation: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "700",
        color: "#1D2433",
        marginBottom: 12,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 18,
    },
    iconContainer: {
        width: 42,
        height: 42,
        backgroundColor: "#F1F4F9",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 14,
    },
    label: {
        fontSize: 12,
        color: "#7C8593",
    },
    value: {
        fontSize: 15,
        fontWeight: "600",
        color: "#1D2433",
        marginTop: 2,
    },
});
