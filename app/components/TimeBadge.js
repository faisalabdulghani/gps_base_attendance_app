import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { fonts, sizes } from "../theme/typography";
import { Colors } from "../theme/Colors";

const TimeBadge = ({
    label = "Check-in",
    time = "--:--",
    labelColor = "#007020",
    borderColor = "#007020"
}) => {
    return (
        <View style={[styles.container, { borderColor: borderColor }]}>
            <Text style={[styles.label, { color: labelColor }]}>
                {label}
            </Text>
            <Text style={styles.time}>
                {time}
            </Text>
        </View>
    );
};

export default TimeBadge;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        marginHorizontal: 4
    },
    label: {
        fontSize: 14,
        fontWeight: "500",
        marginVertical: 4,
        fontFamily: fonts.REGULAR,
    },
    time: {
        fontSize: 20,
        fontWeight: "700",
        fontFamily: fonts.BOLD,
        color: Colors.BLACK
    },
});