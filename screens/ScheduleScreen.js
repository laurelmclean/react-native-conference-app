import React from "react";
import { View, Text, SectionList, StyleSheet, TouchableOpacity } from "react-native";
import { mockData } from "../mockData";

const keyExtractor = item => item.id;

const sectionHeader = data => {
    const section = data.section;
    return (
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{section.time}</Text>
        </View>
    );
};

const divider = () => {
    return <View style={styles.divider} />;
};

const listHeader = () => {
    return (
        <View style={styles.listHeader}>
            <Text style={styles.listHeaderText}>Schedule</Text>
        </View>
    );
};

const ScheduleScreen = props => {
    const singleItem = data => {
        const item = data.item;

        return (
            <TouchableOpacity
                onPress={() => props.navigation.navigate("Details", { talkData: item })}
            >
                <View style={styles.singleItem}>
                    <Text>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
            <SectionList
                sections={mockData}
                renderItem={singleItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={divider}
                renderSectionHeader={sectionHeader}
                ListHeaderComponent={listHeader}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    divider: {
        width: "100%",
        height: 2,
        backgroundColor: "#eee"
    },
    sectionHeader: {
        backgroundColor: "#5f27cd",
        paddingHorizontal: 16,
        paddingVertical: 12
    },
    sectionHeaderText: {
        fontWeight: "700",
        color: "white"
    },
    listHeaderText: {
        fontSize: 24,
        fontWeight: "600"
    },
    singleItem: {
        paddingHorizontal: 16,
        paddingVertical: 20
    },
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
});

export default ScheduleScreen;
