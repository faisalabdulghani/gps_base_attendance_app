import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Colors } from "../theme/Colors";

export default function LeaveDropdown({ label, options = [], value, onSelect, error }) {
    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}

            <TouchableOpacity
                style={styles.selector}
                onPress={() => setVisible(true)}
                activeOpacity={0.7}
            >
                <Text style={styles.selectorText}>
                    {value ? value : "Select"}
                </Text>
                <Ionicons name="chevron-down" size={20} color={Colors.TEXTLIGHT} />
            </TouchableOpacity>

            {error ? <Text style={styles.error}>{error}</Text> : null}


            <Modal transparent visible={visible} animationType="fade">
                <TouchableOpacity
                    style={styles.modalOverlay}
                    onPress={() => setVisible(false)}
                >
                    <View style={styles.modalBox}>
                        <FlatList
                            data={options}
                            keyExtractor={(i) => i}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.option}
                                    onPress={() => {
                                        onSelect(item);
                                        setVisible(false);
                                    }}
                                >
                                    <Text style={styles.optionText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    label: {
        fontSize: 14,
        fontWeight: "600",
        marginVertical: 3,
        color: Colors.BLACK
    },
    selector: {
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 2
    },
    selectorText: {
        fontSize: 14,
        color: Colors.LIGHTGREY
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.3)",
        justifyContent: "center",
        alignItems: "center"
    },
    modalBox: {
        width: "80%",
        maxHeight: "50%",
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        padding: 15
    },
    option: {
        paddingVertical: 12,
        borderBottomWidth: 0.5,
        borderColor: Colors.DIVIDERCOLOR
    },
    optionText: {
        fontSize: 15,
        color: Colors.BLACK
    },
    error: {
        color: "red",
        fontSize: 12,
        padding: 2
    },
});
