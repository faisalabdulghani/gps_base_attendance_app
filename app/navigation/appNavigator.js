
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './authStack';
import MainTabs from './mainTabs';

export default function AppNavigator() {
    const isLoggedIn = true;

    return (
        <NavigationContainer>
            {isLoggedIn ? <MainTabs /> : <AuthStack />}
        </NavigationContainer>
    );
}
