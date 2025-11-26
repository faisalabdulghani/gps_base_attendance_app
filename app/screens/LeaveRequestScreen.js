import { View, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import LeaveDropdown from "../components/LeaveDropdown";
import DateInput from "../components/DateInput";
import TextArea from "../components/TextArea";
import LeaveSummaryBox from "../components/LeaveSummaryBox";
import GradientButton from "../components/GradientButton";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from '../components/Header'

export default function LeaveRequestScreen() {
    const [leaveType, setLeaveType] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [reason, setReason] = useState("");

    const totalDays = startDate && endDate
        ? (new Date(endDate) - new Date(startDate)) / (1000 * 3600 * 24) + 1
        : 0;

    return (
        <SafeAreaView
            style={styles.container}
            edges={['top']}
        >
            <Header
                title='Leave Request'
            />
            <LeaveDropdown
                label="Leave Type"
                value={leaveType}
                options={["Annual Leave", "Sick Leave", "Unpaid Leave"]}
                onSelect={setLeaveType}
            />

            <View style={styles.dateContainer}>
                <View style={styles.date}><DateInput label="Start Date" date={startDate} onChange={setStartDate} /></View>
                <View style={styles.date}><DateInput label="End Date" date={endDate} onChange={setEndDate} /></View>
            </View>

            <TextArea label="Reason for Leave" value={reason} onChange={setReason} />

            <View style={styles.leaveContainer}>

                <LeaveSummaryBox days={totalDays} />
            </View>
            <View style={styles.button}>

                <GradientButton title="Submit Request" onPress={() => console.log("Submit")} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 14,
        flex: 1,
        // backgroundColor: "red"
    },
    dateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 18
    },
    date: {
        width: "46%"
    },
    leaveContainer: {
        paddingVertical: 18
    },
    button: {
        flex: 1,
        justifyContent: "flex-end"
    }
});
