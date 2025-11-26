import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DailyAttendanceDetailScreen from "../screens/DailyAttendanceDetail"

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name="HomeScreen" component={HomeScreen} />

            {/* ⬇ ADD THIS SCREEN */}
            <Stack.Screen
                name="DailyAttendanceDetail"
                component={DailyAttendanceDetailScreen}
            />

        </Stack.Navigator>
    );
}
