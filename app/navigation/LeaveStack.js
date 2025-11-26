// navigation/LeaveStack.js
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LeaveScreen from "../screens/LeaveScreen";
import LeaveRequestScreen from "../screens/LeaveRequestScreen";

const Stack = createNativeStackNavigator();

export default function LeaveStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Leave" component={LeaveScreen} />
            <Stack.Screen name="LeaveRequest" component={LeaveRequestScreen} />
        </Stack.Navigator>
    );
}
