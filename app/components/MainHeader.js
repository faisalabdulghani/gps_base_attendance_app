import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../theme/Colors";

export default function MainHeader({ username = "User", onNotificationPress }) {
    return (
        <LinearGradient
            colors={[Colors.BLACK, Colors.WHITE]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            {/* Left side */}
            <View style={styles.leftSection}>
                <Image
                    source={require("../assets/user.png")} // Put your image here
                    style={styles.avatar}
                />
                <Text style={styles.greeting}>Hello, {username}</Text>
            </View>

            {/* Notification Icon */}
            <TouchableOpacity style={styles.bellWrapper} onPress={onNotificationPress}>
                <Ionicons name="notifications-outline" size={22} color={Colors.WHITE} />

                {/* Red Dot */}
                <View style={styles.badge} />
            </TouchableOpacity>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 32,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100%",

    },
    leftSection: {
        flexDirection: "row",
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 50,
    },
    greeting: {
        color: Colors.WHITE,
        fontSize: 18,
        fontWeight: "700",
        paddingHorizontal: 6,
        paddingVertical: 12
    },
    bellWrapper: {
        width: 40,
        height: 40,
        backgroundColor: Colors.WHITE + "40",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    badge: {
        width: 10,
        height: 10,
        backgroundColor: "red",
        borderRadius: 5,
        position: "absolute",
        top: 8,
        right: 8,
    },
});
