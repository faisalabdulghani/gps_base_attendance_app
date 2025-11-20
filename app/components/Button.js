import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../theme/Colors';

export default function Button({ title = "Button", onPress, buttonWidth = "80%", buttonHeight = 45 }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={{ width: buttonWidth }}
        >
            <LinearGradient
                colors={[Colors.PRIMARYBLUE, Colors.PRIMARYPURPLE]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.gradient, { height: buttonHeight }]}
            >
                <Text style={styles.text}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    gradient: {
        width: "100%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",

    },
    text: {
        color: Colors.WHITE,
        fontSize: 16,
        fontFamily: "Inter-Bold",
    }
});
