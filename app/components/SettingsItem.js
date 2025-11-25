import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../theme/Colors";

const SettingsItem = ({
    title,
    icon,
    title1,
    icon1,
    title2,
    icon2,
    onPress,
}) => {
    return (
        <View style={styles.container}>
            {/* Icon */}
            <TouchableOpacity style={styles.touchContainer} onPress={onPress}>
                <View style={styles.iconBox}>
                    <Ionicons name={icon} size={20} color={Colors.LIGHTGREY} />
                </View>
                <Text style={styles.title}>{title}</Text>
                <Ionicons name="chevron-forward" size={20} color={Colors.LIGHTGREY} />
            </TouchableOpacity>
            <View style={styles.divider}></View>

            <TouchableOpacity style={styles.touchContainer}>
                <View style={styles.iconBox}>
                    <Ionicons name={icon1} size={20} color={Colors.LIGHTGREY} />
                </View>
                <Text style={styles.title}>{title1}</Text>
                <Ionicons name="chevron-forward" size={20} color={Colors.LIGHTGREY} />
            </TouchableOpacity>

            <View style={styles.divider}></View>

            <TouchableOpacity style={styles.touchContainer}>
                <View style={styles.iconBox}>
                    <Ionicons name={icon2} size={20} color={Colors.LIGHTGREY} />
                </View>
                <Text style={styles.title}>{title2}</Text>
                <Ionicons name="chevron-forward" size={20} color={Colors.LIGHTGREY} />
            </TouchableOpacity>
        </View>
    );
};

export default SettingsItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        // paddingVertical: 16,
        paddingHorizontal: 14,
        alignItems: "center",
        borderRadius: 10,
    },
    divider: {
        borderWidth: 0.5,
        borderColor: Colors.DIVIDERCOLOR,
        width: "95%"
    },
    touchContainer: {
        flexDirection: "row",
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    iconBox: {
        width: 35,
        height: 35,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.LIGHTGREY + "20"
    },
    title: {
        flex: 1,
        fontSize: 15,
        color: Colors.DARKGREY,
        paddingHorizontal: 4,
        alignSelf: "center"
    },
});
