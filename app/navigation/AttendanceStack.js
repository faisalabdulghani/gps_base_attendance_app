// navigation/AttendanceStack.js
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MarkAttendanceScreen from "../screens/MarkAttendanceScreen";
import AttendanceHistoryScreen from "../screens/AttendanceHistoryScreen";

const Stack = createNativeStackNavigator();

export default function AttendanceStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AttendanceHistory" component={AttendanceHistoryScreen} />
        </Stack.Navigator>
    );
}
