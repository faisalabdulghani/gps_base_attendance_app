import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from "react";
import { Colors } from "../theme/Colors";

export default function DateInput({ label, date, onChange }) {
    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}

            <TouchableOpacity
                onPress={() => setVisible(true)}
                style={styles.box}
            >
                <Text style={styles.text}>
                    {date ? date : "DD/MM/YYYY"}
                </Text>
                <Ionicons name="calendar-outline" size={20} color={Colors.TEXTLIGHT} />
            </TouchableOpacity>

            <DateTimePickerModal
                isVisible={visible}
                mode="date"
                buttonTextColorAndroid="#FF6B00"   // 👍 Works on Android
                onConfirm={(selectedDate) => {
                    setVisible(false);
                    const formatted = selectedDate.toISOString().split("T")[0];
                    onChange(formatted);
                }}
                onCancel={() => setVisible(false)}
                themeVariant="dark"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        marginVertical: 3,
        color: Colors.BLACK
    },
    box: {
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 2
    },
    text: {
        fontSize: 14,
        color: Colors.LIGHTGREY
    }
});
