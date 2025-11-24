import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Colors } from '../theme/Colors';
import AttendanceCalendar from '../components/AttendanceCalendar';
import StatsCard from '../components/StatsCard';
import AttendanceCard from '../components/AttendanceCard';
import StatusLegend from '../components/StatusLegend';
import TodayDate from '../components/TodayDate';
import GeoLocationLog from '../components/GeoLocationLog';

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
        // <View style={styles.container}>

        //     {/* Calendar fixed at top */}
        //     <AttendanceCalendar
        //         markedDates={attendanceData}
        //         selectedDate={selected}
        //         onSelectDate={setSelected}
        //     />
        //     <View></View>
        //     <StatusLegend />

        //     {/* Stats fixed */}
        //     <View style={styles.statsRow}>
        //         <StatsCard title="Present" value="20" width="30%" />
        //         <StatsCard title="Absent" value="2" width="30%" />
        //         <StatsCard title="Late" value="1" width="30%" />
        //     </View>


        //     {/* SCROLL ONLY THIS PART */}
        //     <View style={{ flex: 1 }}>
        //         <ScrollView
        //             showsVerticalScrollIndicator={false}
        //             contentContainerStyle={{ paddingBottom: 40 }}
        //         >
        //             <AttendanceCard
        //                 dateLabel="Mon, Oct 28"
        //                 status="Present"
        //                 inTime="09:02 AM"
        //                 outTime="05:58 PM"
        //                 totalTime="8h 56m"
        //             />

        //             <AttendanceCard
        //                 dateLabel="Tue, Oct 29"
        //                 status="Absent"
        //                 inTime={null}
        //                 outTime={null}
        //                 totalTime="0h 0m"
        //             />

        //             <AttendanceCard
        //                 dateLabel="Wed, Oct 30"
        //                 status="Late"
        //                 inTime="09:17 AM"
        //                 outTime="06:05 PM"
        //                 totalTime="8h 48m"
        //             />

        //             <AttendanceCard
        //                 dateLabel="Thu, Oct 31"
        //                 status="Leave"
        //                 inTime={null}
        //                 outTime={null}
        //                 totalTime="0h 0m"
        //             />
        //         </ScrollView>
        //     </View>

        // </View>
        <View style={styles.container}>
            <TodayDate dateLabel="Mon, 28 Oct 2024" />
            <GeoLocationLog
                checkInAdress='123 Main Street, Anytown, USA'
                checkOutAdress='123 Main Street, Anytown, USA'
                checkInTime='09:02 AM'
                checkOutTime='09:02 AM'
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 14,
        justifyContent: "center"
    },
    statsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
    }
});
