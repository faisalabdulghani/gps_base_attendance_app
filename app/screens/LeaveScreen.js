import FilterDropdown from "../components/FilterDropdown";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import LeaveCard from "../components/LeaveCard";
import FloatingButton from "../components/FloatingButton";
import { useNavigation } from "@react-navigation/native";

export default function LeaveScreen() {
    const [status, setStatus] = useState(null);
    const [dateFilter, setDateFilter] = useState(null);

    const navigation = useNavigation()

    const leaveData = [
        {
            id: "1",
            title: "Annual Leave",
            dateRange: "Oct 25, 2023 - Oct 27, 2023",
            reason: "Family vacation to the coast",
            status: "Approved",
        },
        {
            id: "2",
            title: "Sick Leave",
            dateRange: "Sep 12, 2023",
            reason: "Doctor's appointment and check-up",
            status: "Pending",
        },
        {
            id: "3",
            title: "Unpaid Leave",
            dateRange: "Aug 02, 2023",
            reason: "Attending a personal event",
            status: "Approved",
        },
        {
            id: "4",
            title: "Unpaid Leave",
            dateRange: "Aug 02, 2023",
            reason: "Attending a personal event",
            status: "Rejected",
        },
        {
            id: "5",
            title: "Unpaid Leave",
            dateRange: "Aug 02, 2023",
            reason: "Attending a personal event",
            status: "Rejected",
        },
        {
            id: "6",
            title: "Unpaid Leave",
            dateRange: "Aug 02, 2023",
            reason: "Attending a personal event",
            status: "Pending",
        },
    ];


    return (
        <SafeAreaView
            style={styles.container}
            edges={['top']}
        >

            <Header
                title={'Leave History'}

            />
            <View style={{ flexDirection: "row", }}>
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
                <ScrollView
                    showsVerticalScrollIndicator={false}

                >
                    {leaveData.map((item) => (
                        <LeaveCard
                            key={item.id}
                            title={item.title}
                            dateRange={item.dateRange}
                            reason={item.reason}
                            status={item.status}
                        />
                    ))}
                </ScrollView>
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
