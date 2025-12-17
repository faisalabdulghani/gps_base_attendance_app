import { View, StyleSheet, Platform } from "react-native";
import { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker, Circle, PROVIDER_GOOGLE } from "react-native-maps";

import Header from "../components/Header";
import TaskStatusCard from "../components/TaskStatusCard";
import DistanceFromOfficeCard from "../components/DistanceFromOfficeCard";
import Button from "../components/Button";

import {
    requestLocationPermission,
    checkGpsEnabled,
    watchUserLocation,
} from "../utils/location";

import { getDistanceInMeters } from "../utils/diatance";
import { checkInternet } from "../utils/network";
import { markAttendance } from "../api/attendanceApi";
import { showErrorMsg, showSuccessMsg } from "../components/ToastMessage";
import { Colors } from "../theme/Colors";

export default function MarkAttendanceScreen() {

    /* ───────────── STATE ───────────── */
    const [locationPermission, setLocationPermission] = useState(false);
    const [gpsEnabled, setGpsEnabled] = useState(false);
    const [insideOffice, setInsideOffice] = useState(false);
    const [isOnline, setIsOnline] = useState(false);
    const [userLocation, setUserLocation] = useState(null);
    const [mapReady, setMapReady] = useState(false);

    const locationWatcher = useRef(null);

    /* ───────────── CONSTANTS ───────────── */
    const OFFICE_LOCATION = {
        latitude: 32.086427,
        longitude: 74.178301,
    };

    const OFFICE_RADIUS = 100;

    /* ───────────── INIT (PERMISSION + GPS FIRST) ───────────── */
    useEffect(() => {
        const init = async () => {
            const net = await checkInternet();
            setIsOnline(net);
            if (!net) return;

            const permission = await requestLocationPermission();
            if (!permission.granted) return;
            setLocationPermission(true);

            const gps = await checkGpsEnabled();
            if (!gps) return;
            setGpsEnabled(true);

            // ✅ NOW map is allowed to mount
            setMapReady(true);
        };

        init();
    }, []);

    /* ───────────── START LOCATION WATCH AFTER MAP READY ───────────── */
    useEffect(() => {
        if (!mapReady) return;

        const startTracking = async () => {
            locationWatcher.current = await watchUserLocation(setUserLocation);
        };

        startTracking();

        return () => locationWatcher.current?.remove();
    }, [mapReady]);

    /* ───────────── DISTANCE CHECK ───────────── */
    useEffect(() => {
        if (!userLocation) return;

        const distance = getDistanceInMeters(
            userLocation.latitude,
            userLocation.longitude,
            OFFICE_LOCATION.latitude,
            OFFICE_LOCATION.longitude
        );

        setInsideOffice(distance <= OFFICE_RADIUS);
    }, [userLocation]);

    /* ───────────── ATTENDANCE ACTION ───────────── */
    const handleAttendance = async () => {
        if (!isOnline) return showErrorMsg("No internet connection");
        if (!locationPermission) return showErrorMsg("Location permission required");
        if (!gpsEnabled) return showErrorMsg("Please enable GPS");
        if (!insideOffice) return showErrorMsg("You are outside office location");

        try {
            const res = await markAttendance(userLocation);
            showSuccessMsg(res.data.message);
        } catch {
            showErrorMsg("Failed to mark attendance");
        }
    };

    /* ───────────── UI ───────────── */
    return (
        <SafeAreaView edges={["top"]} style={styles.container}>
            <Header title="Mark Attendance" />

            {/* 🗺 MAP */}
            <View style={styles.mapWrapper}>
                {mapReady ? (
                    <MapView
                        style={styles.map}
                        provider={PROVIDER_GOOGLE}
                        showsUserLocation
                        followsUserLocation
                        region={
                            userLocation
                                ? {
                                    latitude: userLocation.latitude,
                                    longitude: userLocation.longitude,
                                    latitudeDelta: 0.005,
                                    longitudeDelta: 0.005,
                                }
                                : {
                                    latitude: OFFICE_LOCATION.latitude,
                                    longitude: OFFICE_LOCATION.longitude,
                                    latitudeDelta: 0.01,
                                    longitudeDelta: 0.01,
                                }
                        }
                    >
                        <Marker coordinate={OFFICE_LOCATION} />
                        <Circle
                            center={OFFICE_LOCATION}
                            radius={OFFICE_RADIUS}
                            strokeColor="rgba(255,0,0,0.5)"
                            fillColor="rgba(255,0,0,0.2)"
                        />
                    </MapView>

                ) : (
                    <View style={styles.mapPlaceholder} />
                )}
            </View>

            <DistanceFromOfficeCard />

            {/* ✅ STATUS */}
            <View>
                <TaskStatusCard title="Location Permission" checked={locationPermission} />
                <TaskStatusCard title="GPS Status" checked={gpsEnabled} />
                <TaskStatusCard title="Inside Office Zone" checked={insideOffice} />
                <TaskStatusCard title="Internet Connected" checked={isOnline} />
            </View>

            {/* 🔘 BUTTONS */}
            <View style={styles.buttonContainer}>
                <Button title="Check In" buttonWidth="40%" onPress={handleAttendance} />
                <Button title="Check Out" buttonWidth="40%" onPress={handleAttendance} />
            </View>
        </SafeAreaView>
    );
}

/* ───────────── STYLES ───────────── */
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 14,
        justifyContent: "space-between",
    },
    mapWrapper: {
        height: 160,
        borderRadius: 14,
        overflow: "hidden",
        marginVertical: 6,
        borderWidth: 1,
        borderColor: Colors.DIVIDERCOLOR,
    },
    map: {
        width: "100%",
        height: "100%",
    },
    mapPlaceholder: {
        height: "100%",
        backgroundColor: "#eee",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
    },
});
