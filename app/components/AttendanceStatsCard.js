import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../theme/Colors";


export default function AttendanceStatsCard(
    { title = " ",
        value = " ",
        variant = "white", // "white" | "grey",
    }
) {
    return (
        <View style={[
            styles.card,
            variant === "grey" ? styles.greyCard : styles.whiteCard,

        ]}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 10,
        width: "30%",
    },

    whiteCard: {
        backgroundColor: Colors.WHITE,

    },

    greyCard: {
        backgroundColor: "rgba(214, 214, 216, 0.2)",
        borderColor: "rgba(214, 214, 216, 0.35)",
        borderWidth: 1,
    },

    title: {
        fontSize: 12,
        color: Colors.TEXTLIGHT,
    },

    value: {
        fontSize: 20,
        fontWeight: "700",
        color: Colors.BLACK,
    },
});
