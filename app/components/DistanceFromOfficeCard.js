import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../theme/Colors";

const DistanceFromOfficeCard = ({
    distanceText = "You are 42m inside the office zone",
    gpsStatus = "Good",
    networkType = "WiFi",
    networkStatus = "Validated",
}) => {
    return (
        <View style={styles.card}>

            {/* Header + main distance text */}
            <Text style={styles.label}>Distance from office</Text>
            <Text style={styles.mainText}>{distanceText}</Text>

            <View style={styles.divider} />

            {/* Bottom Row */}
            <View style={styles.row}>

                {/* GPS */}


                {/* Network */}
                <View style={styles.statusItem}>
                    <Ionicons
                        name="wifi"
                        size={20}
                        color={Colors.PRIMARYPURPLE}
                    />
                    <View>
                        <Text style={styles.statusLabel}>Network:</Text>
                        <Text style={styles.statusValue}>{networkType}{networkStatus}</Text>
                    </View>
                </View>
                <View style={styles.statusItem}>
                    <MaterialIcons name="gps-fixed" size={20} color={Colors.PRESENT} />
                    <View>
                        <Text style={styles.statusLabel}>GPS Status:</Text>
                        <Text style={styles.statusValue}>{gpsStatus}</Text>
                    </View>
                </View>

            </View>
        </View>
    );
};

export default DistanceFromOfficeCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.WHITE,
        padding: 16,
        borderRadius: 10,
        width: "100%",
        shadowColor: Colors.BLACK,
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    label: {
        fontSize: 13,
        color: Colors.TEXTLIGHT,
    },
    mainText: {
        fontSize: 16,
        fontWeight: "700",
        marginVertical: 2,
        color: Colors.BLACK,
    },
    divider: {
        height: 1,
        backgroundColor: Colors.DIVIDERCOLOR,
        marginVertical: 12,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    statusItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    statusLabel: {
        fontSize: 13,
        color: Colors.TEXTLIGHT,
    },
    statusValue: {
        fontSize: 15,
        fontWeight: "600",
        color: Colors.BLACK,
    },
});
