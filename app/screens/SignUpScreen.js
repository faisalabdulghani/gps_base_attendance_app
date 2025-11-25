import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import InputField from '../components/InputField'
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from '../theme/Colors';
import Button from '../components/Button';



export default function SignUpScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Create Your Account</Text>
                <Text style={styles.subtitle}>Get started by filling out form below </Text>
            </View>
            <View style={styles.inputContainer}>
                <InputField
                    icon={<Ionicons name="person-outline" size={20} color={Colors.LIGHTGREY} />}
                    placeholder="Enter your name"
                    secure={false}
                />
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
                <InputField
                    icon={<Ionicons name="lock-closed-outline" size={20} color={Colors.LIGHTGREY} />}
                    placeholder="Confirm your password"
                    secure={true}
                />
            </View>
            <View style={styles.button}>
                <Button title="Sign Up" buttonWidth="90%" />
            </View>
            <View style={styles.loginIn}>
                <Text style={{ color: Colors.BLACK }}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={{
                        color: Colors.BLACK, fontWeight: "bold", fontSize: 14,
                    }}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
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
    }
})