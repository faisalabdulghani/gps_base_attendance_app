import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { Colors } from "../theme/Colors";

const ToggleItemRow = ({ icon, title, value, onValueChange, showDivider }) => {
    return (
        <View>
            <View style={styles.rowContainer}>
                <View style={styles.leftSection}>
                    <View style={styles.iconContainer}>{icon}</View>
                    <Text style={styles.title}>{title}</Text>
                </View>

                <Switch
                    value={value}
                    onValueChange={onValueChange}
                    thumbColor={value ? "#fff" : "#f4f3f4"}
                    trackColor={{ false: "#d3d3d3", true: Colors.PRIMARY }}
                />
            </View>

            {showDivider && <View style={styles.divider} />}
        </View>
    );
};

export default ToggleItemRow;

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 14,
    },
    leftSection: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconContainer: {
        width: 42,
        height: 42,
        borderRadius: 12,
        backgroundColor: "#F3F0FF",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },
    title: {
        fontSize: 16,
        color: Colors.BLACK,
    },
    divider: {
        height: 1,
        backgroundColor: "#EDEDED",
        marginLeft: 60,
    },
});
