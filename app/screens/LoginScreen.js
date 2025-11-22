import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import InputField from '../components/InputField';
import { Ionicons } from "@expo/vector-icons";
import { Colors } from '../theme/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import StatusCard from '../components/StatusCard';
import StatsCard from '../components/StatsCard';
import GradientButton from '../components/GradientButton';



export default function LoginScreen() {
    const [email, setEmail] = useState("");


    return (
        <LinearGradient
            colors={[Colors.PRIMARYPURPLE, Colors.WHITE]}
            start={{ x: 0.2, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >

            <GradientButton
                title="Mark Attendance"
                icon="finger-print-outline"
                onPress={() => console.log("Pressed")}
            />


        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        //alignItems: "center",
        backgroundColor: Colors.BACKGROUND
    },
});
