import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';
import { AuthContext } from '../context/AuthContext';
import { showSuccessMsg } from '../components/ToastMessage';

export default function ProfileScreen() {

    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        showSuccessMsg("Logged out successfully");
    };

    return (
        <View>
            <Text>ProfileScreen</Text>

            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
}
