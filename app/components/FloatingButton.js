import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { Colors } from "../theme/Colors";

export default function FloatingButton({ onPress }) {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.container}>
            <LinearGradient
                colors={[Colors.BLACK, Colors.WHITE]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.button}
            >
                <AntDesign name="plus" size={28} color={Colors.WHITE} />
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 25,
        right: 25,
        zIndex: 999,
    },
    button: {
        width: 65,
        height: 65,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",

        // Shadow (iOS + Android)
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 6,
    },
});
