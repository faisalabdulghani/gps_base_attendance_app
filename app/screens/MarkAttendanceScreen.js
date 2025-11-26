import { View, Text, Image, StyleSheet } from 'react-native'
import Header from '../components/Header'
import TaskStatusCard from '../components/TaskStatusCard'
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import DistanceFromOfficeCard from '../components/DistanceFromOfficeCard';
import GradientButton from '../components/GradientButton';
import Button from '../components/Button';


export default function MarkAttendanceScreen() {

    const [locationPermission, setLocationPermission] = useState(true);
    const [gpsEnabled, setGpsEnabled] = useState(true);
    const [insideOffice, setInsideOffice] = useState(false);
    const [isOnline, setIsOnline] = useState(true);
    return (
        <SafeAreaView
            edges={['top']}
            style={styles.container}
        >
            <View>
                <Header
                    title={"Mark Attendance"}
                />
            </View>
            <View>
                <Image
                    source={require("../assets/map.png")}
                    style={styles.map}
                    resizeMode="cover"
                />
            </View>
            <View>
                <DistanceFromOfficeCard />
            </View>
            <View>
                <TaskStatusCard
                    title="Location Permission"
                    checked={locationPermission}   // no user toggle
                />

                <TaskStatusCard
                    title="GPS Status"
                    checked={gpsEnabled}
                />

                <TaskStatusCard
                    title="Inside Office Zone"
                    checked={insideOffice}
                />

                <TaskStatusCard
                    title="Internet Connected"
                    statusColor="green"
                    checked={isOnline}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title='Check In'
                    buttonWidth="40%"
                />
                <Button
                    title='Check Out'
                    buttonWidth="40%"
                />
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 14,
        justifyContent: "space-between",
    },
    map: {
        width: "100%",
        height: 140,
        borderRadius: 10,
        marginVertical: 6,
    },
    buttonContainer: {
        flexDirection: "row",
        marginVertical: 6,
        justifyContent: "space-between"
    }
})