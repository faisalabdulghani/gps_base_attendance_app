import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Calendar } from "react-native-calendars";
import { Colors } from "../theme/Colors";

const { width, height } = Dimensions.get("window");

export default function LoginScreen() {
    const attendanceData = {
        "2025-11-01": { marked: true, dotColor: "green" },
        "2025-11-02": { marked: true, dotColor: "red" },
        "2025-11-06": { marked: true, dotColor: "green" },
        "2025-11-07": { marked: true, dotColor: "green" },
        "2025-11-20": { marked: true, dotColor: "orange" },
        "2026-03-30": { marked: true, dotColor: "orange" },
        "2026-03-31": { marked: true, dotColor: "orange" },
    };

    const today = new Date().toISOString().split("T")[0];

    return (

        <View style={styles.card}>
            <Calendar
                style={styles.calendar}
                monthFormat={"MMMM yyyy"}
                hideExtraDays={true}
                firstDay={1}
                disableAllTouchEventsForDisabledDays={true}

                markingType="custom"
                markedDates={{
                    // Today's date highlight
                    [today]: {
                        customStyles: {
                            container: {
                                borderWidth: 2,
                                borderColor: Colors.PRIMARYPURPLE,
                                width: 32,
                                height: 32,
                                borderRadius: 10,
                                justifyContent: "center",
                                alignItems: "center",
                            },
                            text: {
                                color: Colors.BLACK,
                            },
                        },
                    },

                    // Attendance dots
                    ...Object.fromEntries(
                        Object.entries(attendanceData).map(([date, value]) => [
                            date,
                            {
                                ...value,
                                customStyles: {
                                    container: {},
                                    text: {
                                        color: Colors.BLACK,
                                    },
                                },
                            },
                        ])
                    ),
                }}
                theme={{
                    textDayFontSize: width * 0.04,
                    textMonthFontSize: width * 0.05,
                    textMonthFontWeight: "700",
                    monthTextColor: Colors.BLACK,
                    arrowColor: Colors.BLACK,
                    textDayHeaderFontSize: width * 0.032,
                    textDayHeaderColor: Colors.TEXTLIGHT,
                    todayTextColor: Colors.BLACK,

                    //Control calendar internal spacing
                    "stylesheet.calendar.main": {
                        container: {
                            paddingLeft: 0,
                            paddingRight: 0,
                        },
                        week: {
                            marginTop: height * 0.005,
                            marginBottom: height * 0.005,
                            flexDirection: "row",
                            justifyContent: "space-around",
                        },
                    },
                    "stylesheet.calendar.header": {
                        header: {
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingLeft: 10,
                            paddingRight: 10,
                            alignItems: "center",
                        },
                    },
                }}
            />
        </View>

    );
}

const styles = StyleSheet.create({


    card: {
        marginTop: 40,
        backgroundColor: Colors.WHITE,
        width: width * 0.93,
        borderRadius: 10,
        elevation: 4,
        shadowColor: Colors.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        padding: 5,
        height: width * 0.90,
        maxHeight: height * 0.50,
        minHeight: 250,
        overflow: "hidden",
    },

    calendar: {
        width: "100%",
        height: "100%",
    },

    headerText: {
        fontSize: width * 0.05,
        fontWeight: "700",
        color: Colors.BLACK,
        textAlign: "center",
        paddingVertical: height * 0.012,
    },
});