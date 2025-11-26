import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const FilterDropdown = ({
    label = "Select",
    iconName = "filter",
    options = [],
    onSelect,
    selectedValue,
    placeholder = "Choose option",
}) => {
    const [visible, setVisible] = useState(false);

    const handleSelect = (val) => {
        onSelect(val);
        setVisible(false);
    };

    return (
        <View>
            {/* Filter Button */}
            <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
                <AntDesign name={iconName} size={16} color="#444" style={{ marginRight: 6 }} />
                <Text style={styles.buttonText}>{selectedValue || label}</Text>
                <AntDesign name="down" size={14} color="#666" style={{ marginLeft: 6 }} />
            </TouchableOpacity>

            {/* Modal */}
            <Modal visible={visible} transparent animationType="fade">
                <TouchableOpacity style={styles.overlay} onPress={() => setVisible(false)} />

                <View style={styles.modal}>
                    <Text style={styles.modalTitle}>{label}</Text>

                    <FlatList
                        data={options}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.option} onPress={() => handleSelect(item)}>
                                <Text style={styles.optionText}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </Modal>
        </View>
    );
};

export default FilterDropdown;

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        backgroundColor: "#F6F7FA",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 25,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#E3E4E8",
    },
    buttonText: {
        color: "#444",
        fontSize: 14,
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.3)",
    },
    modal: {
        position: "absolute",
        top: "30%",
        alignSelf: "center",
        width: "80%",
        backgroundColor: "white",
        padding: 20,
        borderRadius: 15,
        elevation: 10,
    },
    modalTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 12,
        color: "#333",
    },
    option: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: "#EEE",
    },
    optionText: {
        fontSize: 14,
        color: "#444",
    },
});
