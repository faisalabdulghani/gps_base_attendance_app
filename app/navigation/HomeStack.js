import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DailyAttendanceDetailScreen from "../screens/DailyAttendanceDetail"
import MarkAttendanceScreen from "../screens/MarkAttendanceScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />

            <Stack.Screen
                name="DailyAttendanceDetail"
                component={DailyAttendanceDetailScreen}
            />
            <Stack.Screen
                name="MarkAttendance"
                component={MarkAttendanceScreen}
            />

        </Stack.Navigator>
    );
}
