import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import AttendanceCard from '../components/AttendanceCard'
import AttendanceCalendar from '../components/AttendanceCalendar'
import StatusLegend from '../components/StatusLegend'
import StatsCard from '../components/StatsCard'
import { SafeAreaView } from 'react-native-safe-area-context';


export default function AttendanceHistoryScreen() {



    const attendanceData = {
        "2025-11-01": { marked: true, dotColor: "green" },
        "2025-11-02": { marked: true, dotColor: "red" },
        "2025-11-06": { marked: true, dotColor: "green" },
        "2025-11-07": { marked: true, dotColor: "green" },
        "2026-03-30": { marked: true, dotColor: "orange" },
        "2026-03-31": { marked: true, dotColor: "orange" },
    };

    return (
        <SafeAreaView edges={['top']} style={styles.container}>
            <Header
                title={"Attendance History"}
            />
            <AttendanceCalendar
                markedDates={attendanceData}

            />
            <StatusLegend />

            {/* Stats fixed */}
            <View style={styles.statsRow}>
                <StatsCard title="Present" value="20" width="30%" />
                <StatsCard title="Absent" value="2" width="30%" />
                <StatsCard title="Late" value="1" width="30%" />
            </View>


            {/* SCROLL ONLY THIS PART */}
            <View style={{ flex: 1 }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <AttendanceCard
                        dateLabel="Mon, Oct 28"
                        status="Present"
                        inTime="09:02 AM"
                        outTime="05:58 PM"
                        totalTime="8h 56m"
                    />

                    <AttendanceCard
                        dateLabel="Tue, Oct 29"
                        status="Absent"
                        inTime={null}
                        outTime={null}
                        totalTime="0h 0m"
                    />

                    <AttendanceCard
                        dateLabel="Wed, Oct 30"
                        status="Late"
                        inTime="09:17 AM"
                        outTime="06:05 PM"
                        totalTime="8h 48m"
                    />

                    <AttendanceCard
                        dateLabel="Thu, Oct 31"
                        status="Leave"
                        inTime={null}
                        outTime={null}
                        totalTime="0h 0m"
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        paddingHorizontal: 14,
        //backgroundColor: "red"
    },
    statsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 2,
    }
});