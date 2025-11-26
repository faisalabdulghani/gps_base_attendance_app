import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "./CustomTabBar";

// Screens
import HomeScreen from "../screens/HomeScreen";
import MarkAttendanceScreen from "../screens/MarkAttendanceScreen";
import AttendanceHistoryScreen from "../screens/AttendanceHistoryScreen";
import LeaveScreen from "../screens/LeaveScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: "home-outline",
                    tabBarLabel: "Home",
                }}
            />

            <Tab.Screen
                name="MarkAttendance"
                component={MarkAttendanceScreen}
                options={{
                    tabBarIcon: "finger-print-outline",
                    tabBarLabel: "Attendance",
                }}
            />

            <Tab.Screen
                name="AttendanceHistory"
                component={AttendanceHistoryScreen}
                options={{
                    tabBarIcon: "time-outline",
                    tabBarLabel: "History",
                }}
            />

            <Tab.Screen
                name="Leave"
                component={LeaveScreen}
                options={{
                    tabBarIcon: "document-outline",
                    tabBarLabel: "Leave",
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: "person-outline",
                    tabBarLabel: "Profile",
                }}
            />
        </Tab.Navigator>
    );
}
