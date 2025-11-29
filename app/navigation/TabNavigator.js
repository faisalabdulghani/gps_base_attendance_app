// navigation/TabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "./CustomTabBar";

import HomeStack from "./HomeStack";
import AttendanceStack from "./AttendanceStack";
import LeaveStack from "./LeaveStack";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name="HomeTab"  // Changed from "Home" to "HomeTab"
                component={HomeStack}
                options={{
                    tabBarIcon: "home-outline",
                    tabBarLabel: "Home",
                }}
            />

            <Tab.Screen
                name="AttendanceTab"  // Changed from "AttendanceHistory" to "AttendanceTab"
                component={AttendanceStack}
                options={{
                    tabBarIcon: "time-outline",
                    tabBarLabel: "History",
                }}
            />

            <Tab.Screen
                name="LeaveTab"  // Changed from "Leave" to "LeaveTab"
                component={LeaveStack}
                options={{
                    tabBarIcon: "document-outline",
                    tabBarLabel: "Leave",
                }}
            />

            <Tab.Screen
                name="ProfileTab"  // Changed from "Profile" to "ProfileTab"
                component={ProfileStack}
                options={{
                    tabBarIcon: "person-outline",
                    tabBarLabel: "Profile",
                }}
            />
        </Tab.Navigator>
    );
}