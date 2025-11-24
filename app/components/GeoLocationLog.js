import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../theme/Colors";

export default function GeoLocationLog({
    checkInAdress = "",
    checkOutAdress = "",
    checkInTime = "",
    checkOutTime = "",
}) {
    const [open, setOpen] = useState(false);

    return (
        <View style={styles.card}>

            {/* Header */}
            <TouchableOpacity
                style={styles.header}
                onPress={() => setOpen(!open)}
            >
                <Text style={styles.title}>Geolocation Log</Text>
                <Ionicons
                    name={open ? "chevron-up" : "chevron-down"}
                    size={20}
                    color={Colors.BLACK}
                />
            </TouchableOpacity>

            {open && (
                <>
                    {/* Map image placeholder */}
                    <Image
                        source={require("../assets/map.png")}
                        style={styles.map}
                        resizeMode="cover"
                    />

                    {/* Check-in row */}
                    <View style={styles.row}>
                        <Ionicons name="log-in-outline" size={22} color="#09C372" />
                        <View style={{ marginHorizontal: 8 }}>
                            <Text style={styles.address}>{checkInAdress}</Text>
                            <Text style={styles.time}>Check-in at {checkInTime}</Text>
                        </View>
                    </View>

                    {/* Divider */}
                    <View style={styles.divider} />

                    {/* Check-out row */}
                    <View style={styles.row}>
                        <Ionicons name="log-out-outline" size={22} color="#FF8A00" />
                        <View style={{ marginHorizontal: 8 }}>
                            <Text style={styles.address}>{checkOutAdress}</Text>
                            <Text style={styles.time}>Check-out at {checkOutTime}</Text>
                        </View>
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.WHITE,
        padding: 16,
        borderRadius: 10,
        elevation: 2,

    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: Colors.BLACK,
    },
    map: {
        width: "100%",
        height: 140,
        borderRadius: 10,
        marginVertical: 6,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 14,
    },
    address: {
        fontSize: 14,
        fontWeight: "600",
        color: Colors.BLACK,
    },
    time: {
        fontSize: 13,
        color: Colors.TEXTLIGHT,
    },
    divider: {
        height: 1,
        backgroundColor: Colors.DIVIDERCOLOR,
        width: "100%",
    }
});
