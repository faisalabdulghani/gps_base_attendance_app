import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import InputField from '../components/InputField';
import { Ionicons } from "@expo/vector-icons";
import { Colors } from '../theme/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import StatusCard from '../components/StatusCard';
import StatsCard from '../components/StatsCard';
import GradientButton from '../components/GradientButton';
import DistanceFromOfficeCard from '../components/DistanceFromOfficeCard';
import LeaveCard from '../components/LeaveCard';



export default function LoginScreen() {
    const [email, setEmail] = useState("");


    return (
        <LinearGradient
            colors={[Colors.WHITE, Colors.WHITE]}
            start={{ x: 0.2, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >

            <LeaveCard
                title="Annual Leave"
                dateRange="Oct 25, 2023 - Oct 27, 2023"
                reason="Family vacation to the coast"
                status="Approved"
            />

            <LeaveCard
                title="Sick Leave"
                dateRange="Sep 12, 2023"
                reason="Doctor's appointment and check-up"
                status="Pending"
            />

            <LeaveCard
                title="Unpaid Leave"
                dateRange="Aug 02, 2023"
                reason="Attending a personal event"
                status="Rejected"
            />


        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 6,
        backgroundColor: Colors.BACKGROUND
    },
});
