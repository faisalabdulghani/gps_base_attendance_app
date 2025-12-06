import FilterDropdown from "../components/FilterDropdown";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, ActivityIndicator, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import LeaveCard from "../components/LeaveCard";
import FloatingButton from "../components/FloatingButton";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { allLeaves } from "../api/leaveApi";
import { showErrorMsg } from "../components/ToastMessage";



export default function LeaveScreen() {
    const [status, setStatus] = useState(null);
    const [dateFilter, setDateFilter] = useState(null);
    const [leaveList, setLeaveList] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();
    const isFocused = useIsFocused(); // refresh screen on return

    //---------------------------------------
    // FETCH LEAVES FROM API
    //---------------------------------------
    const getLeaves = () => {
        setLoading(true);

        allLeaves()
            .then((res) => {


                setLeaveList(res.data || []); // <-- adjust based on backend response
            })
            .catch((err) => {
                const msg = err?.response?.data?.message || "Failed to fetch leaves";
                showErrorMsg(msg);
                console.log("LEAVE FETCH ERROR:", msg);
            })
            .finally(() => setLoading(false));
    };

    //---------------------------------------
    // CALL API WHEN SCREEN OPENS
    //---------------------------------------
    useEffect(() => {
        if (isFocused) {
            getLeaves();
        }
    }, [isFocused]);

    //---------------------------------------
    // FILTERS (optional for later)
    //---------------------------------------
    const filteredLeaves = leaveList.filter((item) => {
        if (status && item.status !== status) return false;
        return true;
    });

    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            <Header title={"Leave History"} />

            <View style={{ flexDirection: "row" }}>
                {/* STATUS FILTER */}
                <FilterDropdown
                    label="Status"
                    iconName="filter"
                    options={["Pending", "Approved", "Rejected"]}
                    selectedValue={status}
                    onSelect={(val) => setStatus(val)}
                />

                {/* DATE FILTER */}
                <FilterDropdown
                    label="Date"
                    iconName="calendar"
                    options={["Today", "Last 7 Days", "This Month", "Custom Range"]}
                    selectedValue={dateFilter}
                    onSelect={(val) => setDateFilter(val)}
                />
            </View>

            <View style={{ flex: 1 }}>
                {loading ? (
                    <ActivityIndicator size="large" style={{ marginTop: 20 }} />
                ) : filteredLeaves.length === 0 ? (
                    <Text style={{ textAlign: "center", marginTop: 20, color: "#666" }}>
                        No leave requests found.
                    </Text>
                ) : (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {filteredLeaves.map((item) => (
                            <LeaveCard
                                key={item._id}
                                title={item.leaveType}
                                dateRange={{ start: item.startDate, end: item.endDate }}
                                reason={item.reason}
                                status={item.status}
                            />
                        ))}
                    </ScrollView>
                )}
            </View>

            <FloatingButton onPress={() => navigation.navigate("LeaveRequest")} />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 14

    }
})
