import { View, Text, StyleSheet } from 'react-native'
import StatusCard from '../components/StatusCard'
import StatsCard from '../components/StatsCard'
import GradientButton from '../components/GradientButton'
import { Colors } from '../theme/Colors'
import MainHeader from '../components/MainHeader'
import { useNavigation } from '@react-navigation/native'


export default function HomeScreen() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            {/* HEADER */}
            <View style={styles.headerWrapper}>
                <MainHeader username="Brooklyn" />
            </View>

            {/* STATUS CARD (OVERLAPPING ON HEADER) */}
            <View style={styles.statusCardWrapper}>
                <StatusCard
                    statusColor={Colors.PRESENT}
                    totalTime="08:15"
                    checkOut="05:15 PM"
                />
            </View>

            {/* REST OF SCREEN */}
            <View style={styles.content}>
                <GradientButton
                    title="Mark Attendance"
                    icon="finger-print-outline"
                    onPress={() => navigation.navigate("MarkAttendance")}
                />


                <View style={styles.row}>
                    <StatsCard title="Late Days" value="3" width="48%" />
                    <StatsCard title="Early Out" value="2" width="48%" />
                </View>

                <View style={styles.row}>
                    <StatsCard title="Hours this week" value="32h 15m" width="100%" />
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

