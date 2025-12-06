import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import InputField from '../components/InputField'
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from '../theme/Colors';
import Button from '../components/Button';
import { registerUser } from '../api/authApi';
import { showErrorMsg, showSuccessMsg } from '../components/ToastMessage';



export default function SignUpScreen() {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // Inline error state
    const [errors, setErrors] = useState({});

    const handleSignUp = () => {
        let newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name.trim()) newErrors.name = "Name is required";

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(email)) {
            newErrors.email = "Invalid email format";
        };
        if (!password.trim()) newErrors.password = "Password is required";
        if (!confirmPassword.trim())
            newErrors.confirmPassword = "Confirm Password is required";

        if (password && password.length < 6)
            newErrors.password = "Password must be at least 6 characters";

        if (password && confirmPassword && password !== confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";

        // If errors exist, stop and show them
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Clear old errors
        setErrors({});
        setLoading(true);

        // TODO: Call API here
        const userRegistrationData = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }
        registerUser(userRegistrationData)
            .then((res) => {
                if (!res.err) {
                    showSuccessMsg("Registered Successfully");
                    navigation.navigate("Login");
                }
            })
            .catch((err) => {
                const msg =
                    err?.response?.data?.message ||
                    "Registration failed. Please try again.";

                showErrorMsg(msg);

                console.log(msg)
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Create Your Account</Text>
                <Text style={styles.subtitle}>
                    Get started by filling out the form below
                </Text>
            </View>

            <View style={styles.inputContainer}>
                {/* NAME */}
                <InputField
                    icon={<Ionicons name="person-outline" size={20} color={Colors.LIGHTGREY} />}
                    placeholder="Enter your name"
                    value={name}
                    onChangeText={(text) => {
                        setName(text);
                        setErrors({ ...errors, name: "" });
                    }}
                />
                {errors.name ? <Text style={styles.error}>{errors.name}</Text> : null}

                {/* EMAIL */}
                <InputField
                    icon={<Ionicons name="mail-outline" size={20} color={Colors.LIGHTGREY} />}
                    placeholder="Enter your email address"
                    value={email}
                    onChangeText={(text) => {
                        setEmail(text);
                        setErrors({ ...errors, email: "" });
                    }}
                />
                {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

                {/* PASSWORD */}
                <InputField
                    icon={<Ionicons name="lock-closed-outline" size={20} color={Colors.LIGHTGREY} />}
                    placeholder="Enter your password"
                    secure={true}
                    value={password}
                    onChangeText={(text) => {
                        setPassword(text);
                        setErrors({ ...errors, password: "" });
                    }}
                />
                {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}

                {/* CONFIRM PASSWORD */}
                <InputField
                    icon={<Ionicons name="lock-closed-outline" size={20} color={Colors.LIGHTGREY} />}
                    placeholder="Confirm your password"
                    secure={true}
                    value={confirmPassword}
                    onChangeText={(text) => {
                        setConfirmPassword(text);
                        setErrors({ ...errors, confirmPassword: "" });
                    }}
                />
                {errors.confirmPassword ? (
                    <Text style={styles.error}>{errors.confirmPassword}</Text>
                ) : null}
            </View>

            <View style={styles.button}>
                <Button
                    title={loading ? "Please wait..." : "Sign Up"}
                    buttonWidth="90%"
                    onPress={handleSignUp}
                />
            </View>

            <View style={styles.loginIn}>
                <Text style={{ color: Colors.BLACK }}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.loginLink}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    title: {
        color: Colors.BLACK,
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    },
    subtitle: {
        color: Colors.LIGHTGREY,
        fontSize: 12,
        textAlign: "center"
    },
    inputContainer: {
        paddingVertical: 10,
        marginVertical: 2
    },
    button: {
        width: "100%",
        alignItems: "center",
        marginVertical: 8
    },
    loginIn: {
        flexDirection: "row",
        marginVertical: 4
    },
    error: {
        color: Colors.ABSENT,
        fontSize: 12,
        width: "85%",
        textAlign: "left",
    },
})