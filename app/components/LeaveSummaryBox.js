import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../theme/Colors";

export default function LeaveSummaryBox({ days }) {
    return (
        <View style={styles.box}>
            <Text style={styles.label}>Total Days of Leave</Text>
            <Text style={styles.value}>{days || 0}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: Colors.WHITE,
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 2,
    },
    label: {
        fontSize: 14,
        color: Colors.LIGHTGREY
    },
    value: {
        fontSize: 18,
        fontWeight: "700",
        color: Colors.BLACK
    }
});
