import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import GeoLocationLog from '../components/GeoLocationLog'
import TodayDate from '../components/TodayDate'
import AttendanceDetailCard from '../components/AttendanceDetailCard'

export default function DailyAttendanceDetail() {
    return (
        <SafeAreaView style={styles.container}
            edges={['top']}
        >
            <Header
                title={'Daily Attendance Detail'} />
            <View style={{ marginVertical: 8 }}>

                <TodayDate dateLabel="Mon, 28 Oct 2024" />
            </View>
            <View style={{ marginVertical: 8 }}>

                <AttendanceDetailCard
                    checkInTime="09:02 AM"
                    checkOutTime="06:15 PM"
                    totalHours="8h 13m"
                    status="Present"

                />
            </View>
            <View style={{ marginVertical: 8 }}>

                <GeoLocationLog
                    checkInAdress='123 Main Street, Anytown, USA'
                    checkOutAdress='123 Main Street, Anytown, USA'
                    checkInTime='09:02 AM'
                    checkOutTime='09:02 AM'
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