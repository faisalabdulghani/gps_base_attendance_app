import { View, Text } from 'react-native'
import Header from '../components/Header'
import TaskStatusCard from '../components/TaskStatusCard'
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function MarkAttendanceScreen() {

    const [locationPermission, setLocationPermission] = useState(true);
    const [gpsEnabled, setGpsEnabled] = useState(true);
    const [insideOffice, setInsideOffice] = useState(false);
    const [isOnline, setIsOnline] = useState(true);
    return (
        <SafeAreaView
            edges={['top']}
        >
            <Header
                title={"Mark Attendance"}
            />


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

        </SafeAreaView>
    )
}