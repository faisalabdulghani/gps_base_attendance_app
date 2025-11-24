import { View, Text, StyleSheet } from "react-native";
import { fonts, sizes } from "../theme/typography";
import TimeBadge from "./TimeBadge";
import { Colors } from "../theme/Colors";

const AttendanceDetailCard = ({
    checkInTime = "09:02 AM",
    checkOutTime = "06:15 PM",
    totalHours = "8h 13m",
    status = "Present",
}) => {


    const statusStyles = {
        Present: {
            badgeBg: "#E6F8EF",
            badgeColor: Colors.PRESENT,
        },
        Absent: {
            badgeBg: "#FEECEC",
            badgeColor: Colors.ABSENT,
        },
        Late: {
            badgeBg: "#FFF7E6",
            badgeColor: Colors.LATE,
        },
        Leave: {
            badgeBg: "#2d9cdb33",
            badgeColor: Colors.LEAVE,
        },
    };

    const s = statusStyles[status];

    return (
        <View style={styles.card}>
            {/* Time Display Row */}
            <View style={styles.timeRow}>
                <TimeBadge
                    label="Check-in"
                    time={checkInTime}
                    labelColor="#007020"
                    borderColor="#007020"

                />


                <TimeBadge
                    label="Check-out"
                    time={checkOutTime}
                    labelColor="#FF8A00"
                    borderColor="#FF8A00"

                />
            </View>

            <View style={styles.dvider}></View>

            {/* Bottom Row - Total Hours & Status */}
            <View style={styles.bottomContainer}>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalLabel}>Total working hours</Text>
                    <Text style={styles.totalValue}>{totalHours}</Text>


                </View>

                <View style={styles.statusContainer}>
                    <Text style={styles.statusLabel}>Status</Text>

                    <View style={[styles.statusBadge, { backgroundColor: s.badgeBg, }]}>
                        <Text style={[styles.statusText, { color: s.badgeColor }]}>
                            {status}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default AttendanceDetailCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        padding: 16,
        shadowColor: Colors.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
        width: "100%",
    },
    timeRow: {
        flexDirection: "row",

    },

    dvider: {
        borderTopWidth: 1,
        borderTopColor: Colors.DIVIDERCOLOR,
        marginVertical: 14,
    },

    bottomContainer: {
        flexDirection: "row"
    },
    totalContainer: {
        // flexDirection: "row",
        //justifyContent: "space-between",
        //paddingVertical: 4
        width: "70%"
    },
    totalLabel: {
        fontSize: 13,
        color: Colors.TEXTLIGHT,
        fontFamily: fonts.REGULAR,
    },
    totalValue: {
        fontSize: 22,
        fontWeight: "700",
        color: Colors.BLACK,
        fontFamily: fonts.BOLD,
        marginVertical: 4

    },
    statusContainer: {
    },
    statusLabel: {
        fontSize: 13,
        color: Colors.TEXTLIGHT,
        fontFamily: fonts.REGULAR,
        paddingHorizontal: 2

    },
    statusBadge: {
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 10,
        marginVertical: 4
    },
    statusText: {
        fontSize: 14,
        fontWeight: "600",
        fontFamily: fonts.BOLD,

    },
});