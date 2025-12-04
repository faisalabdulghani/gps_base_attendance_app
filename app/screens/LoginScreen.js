import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import InputField from "../components/InputField";
import { Colors } from "../theme/Colors";
import { loginUser } from "../api/authApi";
import { AuthContext } from "../context/AuthContext";
import { showSuccessMsg, showErrorMsg } from "../components/ToastMessage";

export default function LoginScreen() {
    const navigation = useNavigation();
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert("Missing Fields", "Email and password are required");
            return;
        }

        setLoading(true);

        loginUser(email, password)
            .then(async (res) => {
                console.log("Response: ", res.data);
                const token = res?.data?.token;
                const user = res?.data?.user;

                if (!token) {
                    showErrorMsg("Invalid response from server");
                    return;
                }

                // CALL CONTEXT LOGIN
                await login(token, user);

                showSuccessMsg("Login Successful");
            })
            .catch((err) => {
                const msg =
                    err?.response?.data?.message ||
                    "Login failed. Please try again.";
                showErrorMsg(msg);
            })
            .finally(() => setLoading(false));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Log in to manage your attendance</Text>

            <View style={styles.inputContainer}>
                <InputField
                    icon={<Ionicons name="mail-outline" size={20} color={Colors.LIGHTGREY} />}
                    placeholder="Enter your email"
                    value={email}
                    secure={false}
                    onChangeText={setEmail}
                />

                <InputField
                    icon={<Ionicons name="lock-closed-outline" size={20} color={Colors.LIGHTGREY} />}
                    placeholder="Enter your password"
                    secure={true}
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>

            <Button
                title={loading ? "Please wait..." : "Login"}
                buttonWidth="90%"
                onPress={handleLogin}
            />

            <View style={styles.signupRow}>
                <Text style={{ color: Colors.BLACK }}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text style={{ color: Colors.BLACK, fontWeight: "bold" }}>Sign Up</Text>
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
        color: Colors.ABSENT,
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
