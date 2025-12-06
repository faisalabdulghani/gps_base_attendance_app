import { View, TextInput, Text, StyleSheet } from "react-native";
import { Colors } from "../theme/Colors";

export default function TextArea({ label, value, onChange, error }) {
    return (
        <View >
            {label && <Text style={styles.label}>{label}</Text>}

            <TextInput
                style={styles.textArea}
                multiline
                numberOfLines={5}
                placeholder="Please provide a brief reason..."
                value={value}
                onChangeText={onChange}
                placeholderTextColor={Colors.LIGHTGREY}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}

        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: 14,
        fontWeight: "600",
        marginVertical: 3,
        color: Colors.BLACK
    },
    textArea: {
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        padding: 15,
        minHeight: 120,
        textAlignVertical: "top",
        elevation: 2,
    },
    error: {
        color: "red",
        fontSize: 12,
        padding: 2
    },
});
