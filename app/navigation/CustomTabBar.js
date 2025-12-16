import React, { useRef, useEffect } from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Animated,
    Text,
    Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../theme/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Individual Tab Button Component with proper animation
function TabButton({ route, isFocused, tabBarIcon, tabBarLabel, onPress }) {
    // ✅ FIX: Use useRef to persist animated value across renders
    const offsetAnim = useRef(new Animated.Value(isFocused ? -12 : 0)).current;

    // ✅ FIX: Animate only when focus changes
    useEffect(() => {
        Animated.spring(offsetAnim, {
            toValue: isFocused ? -12 : 0,
            useNativeDriver: true,
            friction: 8,
            tension: 100,
        }).start();
    }, [isFocused, offsetAnim]);

    return (
        <TouchableOpacity
            key={route.key}
            style={styles.tabButton}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Animated.View
                style={[
                    styles.iconWrapper,
                    isFocused && styles.activeCircle,
                    { transform: [{ translateY: offsetAnim }] },
                ]}
            >
                <Ionicons
                    name={tabBarIcon}
                    size={20} // ✅ Reduced from 22 for more compact design
                    color={isFocused ? Colors.WHITE : Colors.BLACK}
                />
            </Animated.View>

            {/* ✅ FIX: Added marginTop for better spacing */}
            <Text style={[styles.label, isFocused && styles.activeLabel]}>
                {tabBarLabel}
            </Text>
        </TouchableOpacity>
    );
}

export default function CustomTabBar({ state, descriptors, navigation }) {
    // ✅ IMPROVEMENT: Handle safe area for devices with notch/home indicator
    const insets = useSafeAreaInsets();
    const bottomOffset = Platform.OS === "ios" ? insets.bottom + 10 : 10;


    return (
        <View style={[styles.wrapper, { bottom: bottomOffset }]}>
            <View style={styles.tabContainer}>
                {state.routes.map((route, index) => {
                    const isFocused = state.index === index;
                    const { tabBarIcon, tabBarLabel } = descriptors[route.key].options;

                    return (
                        <TabButton
                            key={route.key}
                            route={route}
                            isFocused={isFocused}
                            tabBarIcon={tabBarIcon}
                            tabBarLabel={tabBarLabel}
                            onPress={() => {
                                const event = navigation.emit({
                                    type: 'tabPress',
                                    target: route.key,
                                    canPreventDefault: true,
                                });

                                if (!isFocused && !event.defaultPrevented) {
                                    navigation.navigate(route.name);
                                }
                            }}
                        />
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        position: "absolute", // ✅ FIX: Changed from "relative" to "absolute"
        width: "100%",
        alignItems: "center",
    },

    tabContainer: {
        flexDirection: "row",
        backgroundColor: Colors.WHITE,
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "75%",
        height: 50, // ✅ Added fixed height for the tab bar itself
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 6,
        // ✅ IMPROVEMENT: Better shadows for both platforms
        ...Platform.select({
            ios: {
                shadowOffset: { width: 0, height: 4 },
            },
            android: {
                elevation: 8,
            },
        }),
    },

    tabButton: {
        // flex: 1,
        alignItems: "center",
        //justifyContent: "center",
        height: "100%", // ✅ Take full height of container
    },

    iconWrapper: {
        width: 36, // ✅ Reduced for compact design
        height: 36, // ✅ Reduced for compact design
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    activeCircle: {
        backgroundColor: Colors.BLACK,
    },

    label: {
        fontSize: 9,
        color: Colors.BLACK,
    },

    activeLabel: {
        fontWeight: "600",
        color: Colors.BLACK,
    },
});