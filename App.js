import React, { useContext, useEffect } from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import AuthStack from "./app/navigation/AuthStack";
import TabNavigator from "./app/navigation/TabNavigator";
import Toast from "react-native-toast-message";
import AuthProvider, { AuthContext } from "./app/context/AuthContext";

function RootNavigator() {
  const { isLoggedIn, loading } = useContext(AuthContext);

  // ✅ Configure navigation bar globally
  useEffect(() => {
    const setupNavigationBar = async () => {
      if (Platform.OS === "android") {
        await NavigationBar.setVisibilityAsync("hidden");
        await NavigationBar.setBehaviorAsync("overlay-swipe");
        await NavigationBar.setBackgroundColorAsync("transparent");
        await NavigationBar.setButtonStyleAsync("dark");
      }
    };

    setupNavigationBar();
  }, []);

  if (loading) return null; // Show splash loader here if needed

  return (
    <>
      {/* ✅ Dark status bar for light theme */}
      <StatusBar style="dark" />
      <NavigationContainer>
        {isLoggedIn ? <TabNavigator /> : <AuthStack />}
      </NavigationContainer>
    </>
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