import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../theme/Colors";

const StatsCard = ({
    title = "Late Days",
    value = "3",
    variant = "white", // "white" | "grey",
    width = "70%"
}) => {
    return (
        <View style={[
            styles.card,
            variant === "grey" ? styles.greyCard : styles.whiteCard,
            { width: width }
        ]}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
};

export default StatsCard;

const styles = StyleSheet.create({
    card: {
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 10,
    },

    /* White Clean Card (Present - 20) */
    whiteCard: {
        backgroundColor: Colors.WHITE,
        // borderWidth: 1,
        //  borderColor: "#ECECEC",
    },

    /* Light Gradient (Late Days - 3) */
    greyCard: {
        backgroundColor: "rgba(214, 214, 216, 0.2)",
        borderColor: "rgba(214, 214, 216, 0.35)",
        borderWidth: 1,
    },

    title: {
        fontSize: 14,
        color: Colors.TEXTLIGHT,
    },

    value: {
        fontSize: 28,
        fontWeight: "700",
        color: Colors.BLACK,
    },
});
