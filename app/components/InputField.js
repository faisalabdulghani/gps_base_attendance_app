import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../theme/Colors";

export default function InputField({
    icon,
    placeholder,
    secure = true,
    value,
    onChangeText,
}) {
    const [hide, setHide] = useState(secure);

    return (
        <View style={styles.container}>
            <View style={styles.icon}>{icon}</View>

            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={Colors.TEXTLIGHT}
                secureTextEntry={hide}
                value={value}
                onChangeText={onChangeText}
            />

            {secure && (
                <TouchableOpacity onPress={() => setHide(!hide)}>
                    <Ionicons
                        name={hide ? "eye-off-outline" : "eye-outline"}
                        size={22}
                        color="#9CA3AF"
                    />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.TEXTDARK,
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 10,
        marginBottom: 15,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        color: "#fff",
    },
});
