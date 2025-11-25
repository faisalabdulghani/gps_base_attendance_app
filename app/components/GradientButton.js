import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../theme/Colors";

const GradientButton = ({
    title = "Mark Attendance",
    onPress = () => { },
    icon = "finger-print-outline",


}) => {
    return (
        <TouchableOpacity activeOpacity={0.2} onPress={onPress}>
            <LinearGradient
                colors={[Colors.BLACK, Colors.WHITE]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.button}
            >
                <View style={styles.row}>
                    <Ionicons name={icon} size={22} color={Colors.WHITE} style={{ marginHorizontal: 4 }} />
                    <Text style={styles.text}>{title}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default GradientButton;

const styles = StyleSheet.create({
    button: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        height: 50
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        color: Colors.WHITE,
        fontSize: 18,
        fontWeight: "600",
    },
});
