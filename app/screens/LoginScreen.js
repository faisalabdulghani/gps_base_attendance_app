import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import InputField from '../components/InputField';
import { Ionicons } from "@expo/vector-icons";
import { Colors } from '../theme/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import StatusCard from '../components/StatusCard';
import StatsCard from '../components/StatsCard';



export default function LoginScreen() {
    const [email, setEmail] = useState("");


    return (
        <LinearGradient
            colors={[Colors.PRIMARYPURPLE, Colors.WHITE]}
            start={{ x: 0.2, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <StatsCard label="Late Days" value="3" width='50%' />
            </View>


        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.BACKGROUND
    },
});
