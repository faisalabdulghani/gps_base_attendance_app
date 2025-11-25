import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../theme/Colors';
import { useNavigation } from '@react-navigation/native';

export default function Header({ title, onBack }) {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                <Ionicons name="arrow-back" size={22} color={Colors.BLACK} />
            </TouchableOpacity>

            <Text style={styles.title}>{title}</Text>

            {/* Placeholder to keep title centered */}
            <View style={{ width: 22 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 8
    },
    backBtn: {
        padding: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: Colors.BLACK,
    },
});
