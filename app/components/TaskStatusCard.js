// Components/TaskStatusCard.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../theme/Colors";
import { Ionicons } from "@expo/vector-icons";

const TaskStatusCard = ({
    title = "",
    checked = false, // parent controls this
}) => {
    return (
        <View style={styles.card}>

            {/* TITLE */}
            <View style={styles.textContainer}>

                {/* SMALL DOT (green/red) */}
                <View
                    style={[
                        styles.dot,
                        { backgroundColor: checked ? Colors.PRESENT : Colors.ABSENT }
                    ]}
                />
                <Text style={styles.title}>{title}</Text>


            </View>

            {/* CHECK / CROSS BOX */}
            <View
                style={[
                    styles.iconBox,
                    { backgroundColor: checked ? Colors.PRESENT : Colors.ABSENT }
                ]}
            >
                {checked ? (
                    <Ionicons name="checkmark-circle" size={18} color={Colors.WHITE} />
                ) : (
                    <Ionicons name="close-circle" size={18} color={Colors.OFFWHITE} />
                )}
            </View>



        </View>
    );
};

export default TaskStatusCard;

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.WHITE,
        padding: 14,
        marginVertical: 4,
        borderRadius: 10,
        elevation: 1,
    },

    textContainer: {
        flex: 1,
        flexDirection: "row",
        //marginLeft: 12,
        alignItems: "center"
    },

    title: {
        fontSize: 15,
        fontWeight: "600",
        color: Colors.BLACK,
        paddingHorizontal: 8
    },

    row: {
        alignItems: "center",
    },

    dot: {
        width: 10,
        height: 10,
        borderRadius: 4,
    },

    /* Right check/cross circle */
    iconBox: {
        width: 26,
        height: 26,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
});
