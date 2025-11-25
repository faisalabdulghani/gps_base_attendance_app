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
                    thumbColor={"#d3d3d3"}
                    trackColor={{ false: "#d3d3d3", true: Colors.BLACK }}
                />
            </View>

            {showDivider && <View style={styles.divider} />}
        </View>
    );
};

export default ToggleItemRow;

const styles = StyleSheet.create({
    rowContainer: {

        backgroundColor: Colors.WHITE,
        alignItems: "center",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between"

    },
    leftSection: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10
    },
    iconContainer: {
        width: 35,
        height: 35,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.LIGHTGREY + "20"
    },
    title: {
        fontSize: 15,
        color: Colors.DARKGREY,
        paddingHorizontal: 4,
        alignSelf: "center"
    },
    divider: {
        borderWidth: 0.5,
        borderColor: Colors.DIVIDERCOLOR,
        width: "95%",
        alignSelf: "center"
    },
});
