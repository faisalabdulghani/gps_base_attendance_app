import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import InputField from "../components/InputField";
import { Colors } from "../theme/Colors";

export default function LoginScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            {/* Title */}
            <View>
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subtitle}>Log in to manage your attendance</Text>
            </View>

            {/* Input fields */}
            <View style={styles.inputContainer}>

                <InputField
                    icon={<Ionicons name="mail-outline" size={20} color={Colors.LIGHTGREY} />}
                    placeholder="Enter your email address"
                    secure={false}
                />

                <InputField
                    icon={<Ionicons name="lock-closed-outline" size={20} color={Colors.LIGHTGREY} />}
                    placeholder="Enter your password"
                    secure={true}
                />

                {/* Forgot Password */}
                <TouchableOpacity
                    onPress={() => navigation.navigate("ForgetPassword")}
                >
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            {/* Login Button */}
            <View style={styles.button}>
                <Button title="Login" buttonWidth="90%" />
            </View>

            {/* Sign Up */}
            <View style={styles.signupRow}>
                <Text style={{ color: Colors.BLACK }}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text style={{
                        color: Colors.BLACK, fontWeight: "bold", fontSize: 14,
                    }}>Sign Up</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    title: {
        color: Colors.BLACK,
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center"
    },
    subtitle: {
        color: Colors.LIGHTGREY,
    },
    inputContainer: {
        paddingVertical: 10,
        marginVertical: 2
    },
    forgotText: {
        color: Colors.PRIMARYBLUE,
        textAlign: "right",
        fontSize: 14,
        fontWeight: "500",
    },

    button: {
        width: "100%",
        alignItems: "center",
        marginVertical: 8
    },
    signupRow: {
        flexDirection: "row",
        marginVertical: 4
    }
};
