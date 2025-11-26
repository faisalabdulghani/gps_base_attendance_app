// src/navigation/MainTabs.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MarkAttendanceScreen from '../screens/MarkAttendanceScreen';
import AttendanceHistoryScreen from '../screens/AttendanceHistoryScreen';
import LeaveScreen from '../screens/LeaveScreen';
import LeaveRequestScreen from '../screens/LeaveRequestScreen';
import DailyAttendanceDetail from '../screens/DailyAttendanceDetail';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#3A6FF8',
                tabBarStyle: {
                    height: 60,
                    paddingBottom: 10,
                    paddingTop: 5,
                },
            }}
        >

            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="MarkAttendance" component={MarkAttendanceScreen} />
            <Tab.Screen name="AttendanceHistory" component={AttendanceHistoryScreen} />
            <Tab.Screen name="DailyAttendanceDetail" component={DailyAttendanceDetail} />
            <Tab.Screen name="Leave" component={LeaveScreen} />
            <Tab.Screen name="LeaveRequest" component={LeaveRequestScreen} />
        </Tab.Navigator>
    );
}
