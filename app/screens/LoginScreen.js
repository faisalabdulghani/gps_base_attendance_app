import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import InputField from '../components/InputField';
import { Ionicons } from "@expo/vector-icons";


export default function LoginScreen() {
    const [email, setEmail] = useState("");


    return (
        <View style={styles.container}>
            <InputField
                icon={<Ionicons name="mail-outline" size={20} color="#9CA3AF" />}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
});
