import { View, Text, Image, StyleSheet } from 'react-native'
import Header from '../components/Header'
import TaskStatusCard from '../components/TaskStatusCard'
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import DistanceFromOfficeCard from '../components/DistanceFromOfficeCard';
import GradientButton from '../components/GradientButton';
import Button from '../components/Button';
import { markAttendance } from '../api/attendanceApi';
import { checkGpsEnabled, getCurrentLocation, requestLocationPermission } from '../utils/location';
import { checkLocationStatus } from '../utils/location';
import { checkInternet } from '../utils/network';
import { getDistanceInMeters } from '../utils/diatance';
import { showErrorMsg, showSuccessMsg } from '../components/ToastMessage'

export default function MarkAttendanceScreen() {



    const [locationPermission, setLocationPermission] = useState(true);
    const [gpsEnabled, setGpsEnabled] = useState(true);
    const [insideOffice, setInsideOffice] = useState(false);
    const [isOnline, setIsOnline] = useState(true);

    const canMarkAttendance = locationPermission && gpsEnabled && insideOffice && isOnline;

    const runPreChecks = async () => {
        try {
            // 1️⃣ Ask permission (SYSTEM POPUP)
            const permissionGranted = await requestLocationPermission();
            setLocationPermission(permissionGranted);

            if (!permissionGranted) return;

            // 2️⃣ GPS status
            const gps = await checkGpsEnabled();
            setGpsEnabled(gps);

            if (!gps) return;

            // 3️⃣ Get user location
            const userLocation = await getCurrentLocation();
            console.log("Current Location", userLocation)

            // 4️⃣ Office distance check
            const officeLat = 32.086427;
            const officeLng = 74.178301;

            const distance = getDistanceInMeters(
                userLocation.latitude,
                userLocation.longitude,
                officeLat,
                officeLng
            );

            setInsideOffice(distance <= 100);

        } catch (err) {
            console.log("PRECHECK ERROR:", err.message);
        }
    };



    useEffect(() => {
        runPreChecks();
    }, []);


    const handleAttendance = async () => {
        if (!locationPermission) {
            showErrorMsg("Location permission required");
            return;
        }

        if (!gpsEnabled) {
            showErrorMsg("Please enable GPS");
            return;
        }

        if (!insideOffice) {
            showErrorMsg("You are outside office location");
            return;
        }

        try {
            const location = await getCurrentLocation();
            const res = await markAttendance(location);
            showSuccessMsg(res.data.message);
        } catch (err) {
            showErrorMsg("Failed to mark attendance");
        }
    };


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
                    onPress={handleAttendance}
                    disabled={!canMarkAttendance}

                />
                <Button
                    title='Check Out'
                    buttonWidth="40%"
                    onPress={handleAttendance}
                    disabled={!canMarkAttendance}

                />
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
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