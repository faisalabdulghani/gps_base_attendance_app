import { View, StyleSheet } from "react-native";
import { useState } from "react";
import LeaveDropdown from "../components/LeaveDropdown";
import DateInput from "../components/DateInput";
import TextArea from "../components/TextArea";
import LeaveSummaryBox from "../components/LeaveSummaryBox";
import GradientButton from "../components/GradientButton";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { showErrorMsg, showSuccessMsg } from "../components/ToastMessage";
import { applyLeave } from "../api/leaveApi";
import { useNavigation } from "@react-navigation/native";

export default function LeaveRequestScreen() {
    const navigation = useNavigation();

    const [leaveType, setLeaveType] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [reason, setReason] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};

        if (!leaveType) newErrors.leaveType = "Leave type is required";
        if (!startDate) newErrors.startDate = "Start date is required";
        if (!endDate) newErrors.endDate = "End date is required";
        if (!reason.trim()) newErrors.reason = "Reason is required";

        // Date order check
        if (startDate && endDate) {
            if (new Date(startDate) > new Date(endDate)) {
                newErrors.endDate = "End date must be after start date";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleApplyLeave = () => {
        if (!validateForm()) return;

        setLoading(true);

        const applyLeaveData = {
            leaveType,
            startDate,
            endDate,
            reason,
        };

        applyLeave(applyLeaveData)
            .then(() => {
                showSuccessMsg("Leave request submitted");
                navigation.navigate("Leave");
            })
            .catch((err) => {
                const msg =
                    err?.response?.data?.message ||
                    "Leave request failed. Please try again.";
                showErrorMsg(msg);
                console.log("LEAVE ERROR:", msg);
            })
            .finally(() => setLoading(false));
    };

    const totalDays =
        startDate && endDate
            ? Math.max(
                0,
                (new Date(endDate) - new Date(startDate)) /
                (1000 * 3600 * 24) +
                1
            )
            : 0;

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Header title="Leave Request" />

            <LeaveDropdown
                label="Leave Type"
                value={leaveType}
                options={["Sick", "Casual", "Annual", "Half-day", "Unpaid"]}
                error={errors.leaveType}
                onSelect={(value) => {
                    setLeaveType(value);
                    setErrors({ ...errors, leaveType: "" });
                }}
            />

            <View style={styles.dateContainer}>
                <View style={styles.date}>
                    <DateInput
                        label="Start Date"
                        date={startDate}
                        error={errors.startDate}
                        onChange={(value) => {
                            setStartDate(value);
                            setErrors({ ...errors, startDate: "" });
                        }}
                    />
                </View>

                <View style={styles.date}>
                    <DateInput
                        label="End Date"
                        date={endDate}
                        error={errors.endDate}
                        onChange={(value) => {
                            setEndDate(value);
                            setErrors({ ...errors, endDate: "" });
                        }}
                    />
                </View>
            </View>

            <TextArea
                label="Reason for Leave"
                value={reason}
                error={errors.reason}
                onChange={(value) => {
                    setReason(value);
                    setErrors({ ...errors, reason: "" });
                }}
            />

            <View style={styles.leaveContainer}>
                <LeaveSummaryBox days={totalDays} />
            </View>

            <View style={styles.button}>
                <GradientButton
                    title={loading ? "Submitting..." : "Submit Request"}
                    onPress={handleApplyLeave}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 14,
        //flex: 1,
    },
    dateContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 18,
    },
    date: {
        width: "46%",
    },
    leaveContainer: {
        paddingVertical: 18,
    },
    button: {
        flex: 1,
        justifyContent: "flex-end",
    },
});
