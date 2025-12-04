import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./app/navigation/AuthStack";
import TabNavigator from "./app/navigation/TabNavigator";
import Toast from "react-native-toast-message";
import AuthProvider, { AuthContext } from "./app/context/AuthContext";

function RootNavigator() {
  const { isLoggedIn, loading } = useContext(AuthContext);

  if (loading) return null; // Show splash loader here if needed

  return (
    <NavigationContainer>
      {isLoggedIn ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <RootNavigator />
      <Toast />
    </AuthProvider>
  );
}
