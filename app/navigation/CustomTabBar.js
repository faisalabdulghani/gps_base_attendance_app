import {
    View,
    TouchableOpacity,
    StyleSheet,
    Animated,
    Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../theme/Colors";

export default function CustomTabBar({ state, descriptors, navigation }) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.tabContainer}>

                {state.routes.map((route, index) => {
                    const isFocused = state.index === index;
                    const { tabBarIcon, tabBarLabel } = descriptors[route.key].options;

                    const offset = new Animated.Value(isFocused ? -12 : 0);
                    Animated.timing(offset, {
                        toValue: isFocused ? -12 : 0,
                        duration: 150,
                        useNativeDriver: true,
                    }).start();

                    return (
                        <TouchableOpacity
                            key={route.key}
                            style={styles.tabButton}
                            onPress={() => navigation.navigate(route.name)}
                        >
                            <Animated.View
                                style={[
                                    styles.iconWrapper,
                                    isFocused && styles.activeCircle,
                                    { transform: [{ translateY: offset }] },
                                ]}
                            >
                                <Ionicons
                                    name={tabBarIcon}
                                    size={22}
                                    color={isFocused ? Colors.WHITE : Colors.Black70}
                                />
                            </Animated.View>

                            {/* Label Below */}
                            <Text style={[styles.label, isFocused && styles.activeLabel]}>
                                {tabBarLabel}
                            </Text>
                        </TouchableOpacity>
                    );
                })}

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        bottom: 20,
        width: "100%",
        alignItems: "center",
    },

    tabContainer: {
        flexDirection: "row",
        backgroundColor: "#ffffffcc",
        width: "88%",
        borderRadius: 40,
        justifyContent: "space-around",
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 8,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 6,
    },

    tabButton: {
        flex: 1,
        alignItems: "center",
    },

    iconWrapper: {
        width: 42,
        height: 42,
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center",
    },

    activeCircle: {
        backgroundColor: Colors.BLACK,
    },

    label: {
        fontSize: 10,
        marginTop: 4,
        color: Colors.BLACK,
    },

    activeLabel: {
        fontWeight: "600",
        color: Colors.BLACK,
    },
});
