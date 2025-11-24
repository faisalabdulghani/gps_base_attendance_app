import React from "react";
import { View, StyleSheet } from "react-native";
import ToggleItemRow from "./ToggleItemRow";
import { Colors } from "../theme/Colors";

const SettingsToggleItem = ({
    icon1,
    title1,
    value1,
    onValueChange1,

    icon2,
    title2,
    value2,
    onValueChange2,
}) => {
    return (
        <View style={styles.container}>
            <ToggleItemRow
                icon={icon1}
                title={title1}
                value={value1}
                onValueChange={onValueChange1}
                showDivider={true}
            />

            <ToggleItemRow
                icon={icon2}
                title={title2}
                value={value2}
                onValueChange={onValueChange2}
                showDivider={false}
            />
        </View>
    );
};

export default SettingsToggleItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 4,
        marginVertical: 10,
    },
});
