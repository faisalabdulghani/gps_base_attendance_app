import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import DailyAttendanceDetail from "../screens/DailyAttendanceDetail";
import LeaveRequestScreen from "../screens/LeaveRequestScreen";
import MarkAttendanceScreen from "../screens/MarkAttendanceScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            {/* Bottom Tabs */}
            <Stack.Screen name="Tabs" component={TabNavigator} />

            {/* Extra Screens */}
            <Stack.Screen name="DailyAttendanceDetail" component={DailyAttendanceDetail} />
            <Stack.Screen name="LeaveRequest" component={LeaveRequestScreen} />
            <Stack.Screen name="MarkAttendance" component={MarkAttendanceScreen} />

        </Stack.Navigator>
    );
}
