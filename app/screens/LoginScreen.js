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
import AttendanceCalendar from '../components/AttendanceCalendar';



export default function LoginScreen() {
    const [selected, setSelected] = useState("2025-11-23");

    const attendanceData = {
        "2025-11-01": { marked: true, dotColor: "green" },
        "2025-11-02": { marked: true, dotColor: "red" },
        "2025-11-06": { marked: true, dotColor: "green" },
        "2025-11-07": { marked: true, dotColor: "green" },
        "2026-03-30": { marked: true, dotColor: "orange" },
        "2026-03-31": { marked: true, dotColor: "orange" },
    };

    return (
        <View
            // colors={[Colors.WHITE, Colors.WHITE]}
            // start={{ x: 0.2, y: 0 }}
            // end={{ x: 0, y: 1 }}
            style={styles.container}
        >
            <View style={{ backgroundColor: "red" }}>
                <AttendanceCalendar
                    markedDates={attendanceData}
                    selectedDate={selected}
                    onSelectDate={setSelected}

                />
            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 8,
                //backgroundColor: "red"
            }}>
                <StatsCard
                    title='Present'
                    value='20'
                    width="30%"

                />
                <StatsCard
                    title='Absent'
                    value='2'
                    width="30%" />
                <StatsCard
                    title='Late'
                    value='1'
                    width="30%"
                />
            </View>





        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        paddingHorizontal: 14,
        //backgroundColor: "red"
    },
});
