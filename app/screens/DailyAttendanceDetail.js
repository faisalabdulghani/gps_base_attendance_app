import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import GeoLocationLog from '../components/GeoLocationLog'
import TodayDate from '../components/TodayDate'
import AttendanceDetailCard from '../components/AttendanceDetailCard'
import { useRoute } from '@react-navigation/native'
import { getTodayFormattedDate } from '../utils/dateHelper'

export default function DailyAttendanceDetail() {

    const route = useRoute();
    const {
        status,
        statusColor,
        checkIn,
        checkOut,
        totalWorkingHours
    } = route.params || {};

    return (
        <SafeAreaView style={styles.container}
            edges={['top']}
        >
            <Header
                title={'Daily Attendance Detail'} />
            <View style={{ marginVertical: 8 }}>

                <TodayDate dateLabel={getTodayFormattedDate()} />
            </View>
            <View style={{ marginVertical: 8 }}>

                <AttendanceDetailCard
                    checkInTime={checkIn}
                    checkOutTime={checkOut}
                    totalHours={totalWorkingHours}
                    status={status}

                />
            </View>
            <View style={{ marginVertical: 8 }}>

                <GeoLocationLog
                    checkInAdress='123 Main Street, Anytown, USA'
                    checkOutAdress='123 Main Street, Anytown, USA'
                    checkInTime={checkIn}
                    checkOutTime={checkOut}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 14,
        //justifyContent: "space-between"
    },

})