import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import StatusCard from '../components/StatusCard'
import StatsCard from '../components/StatsCard'
import GradientButton from '../components/GradientButton'
import { Colors } from '../theme/Colors'
import MainHeader from '../components/MainHeader'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { showErrorMsg } from '../components/ToastMessage'
import { getTodayData } from '../api/todayDataApi'
import { getSummary } from '../api/summaryApi'
import { formatHoursMinutes, formatTime } from '../utils/timeFormat'
import { getStatusConfig } from '../utils/attendanceStatus'


export default function HomeScreen() {


    const [loading, setLoading] = useState(false);
    const [todayReport, setTodayReport] = useState(null);
    const [summaryReport, setSummaryReport] = useState(null);

    const navigation = useNavigation();


    const getReports = () => {
        setLoading(true);
        Promise.all([
            getTodayData(),
            getSummary()
        ])
            .then(([todayRes, summaryRes]) => {
                setTodayReport(todayRes.data || {});
                setSummaryReport(summaryRes.data || {});
            })
            .catch((err) => {
                const msg =
                    err?.response?.data?.message || "Failed to fetch Data";
                showErrorMsg(msg);
                console.log("REPORT FETCH ERROR:", msg);
            })
            .finally(() => setLoading(false));
    };


    useEffect(() => {

        getReports();

    }, []);

    const statusConfig = getStatusConfig(todayReport)
        ;




    return (

        <View style={styles.container}>

            {/* HEADER */}
            <View style={styles.headerWrapper}>
                <MainHeader username="Brooklyn" />
            </View>

            {/* STATUS CARD (OVERLAPPING ON HEADER) */}
            <TouchableOpacity
                style={styles.statusCardWrapper}
                onPress={() =>
                    navigation.navigate("DailyAttendanceDetail", {
                        status: statusConfig?.label || "No Status",
                        statusColor: statusConfig?.color || Colors.TEXTLIGHT,
                        checkIn: formatTime(todayReport?.checkInTime),
                        checkOut: formatTime(todayReport?.checkOutTime),
                        totalWorkingHours: formatHoursMinutes(todayReport?.workingHours) || 0
                    })
                }
            >
                <StatusCard
                    status={statusConfig?.label || "No Status"}
                    statusColor={statusConfig?.color || Colors.TEXTLIGHT}
                    totalTime={todayReport?.workingHours || 0}
                    checkIn={formatTime(todayReport?.checkInTime)}
                    checkOut={formatTime(todayReport?.checkOutTime)}
                />
            </TouchableOpacity>

            {/* REST OF SCREEN */}
            <View style={styles.content}>
                <GradientButton
                    title="Mark Attendance"
                    icon="finger-print-outline"
                    onPress={() => navigation.navigate("MarkAttendance")}
                />


                <View style={styles.row}>
                    <StatsCard
                        title="Late Days"
                        value={summaryReport?.counts?.late || 0}
                        width="48%"
                    />
                    <StatsCard
                        title="Early Out"
                        value={summaryReport?.counts?.earlyOuts || 0}
                        width="48%"
                    />
                </View>

                <View style={styles.row}>
                    <StatsCard
                        title="Hours this week"
                        value={formatHoursMinutes(summaryReport?.workingHours?.weekly)}
                        width="100%" />
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: Colors.WHITE,
    },

    headerWrapper: {
        height: "30%",
        width: "100%",
        backgroundColor: Colors.BLACK, // if gradient removed
        position: "relative",
        zIndex: 1,
    },

    statusCardWrapper: {
        position: "absolute",
        top: 100,              // 🔥 THIS MAKES IT OVERLAP HEADER
        width: "100%",
        paddingHorizontal: 12,
        zIndex: 2,
    },

    content: {
        marginVertical: 110,        // leave space below overlapping card
        paddingHorizontal: 12,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 12,
    }
});

