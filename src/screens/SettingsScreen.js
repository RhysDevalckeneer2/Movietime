import { StatusBar } from 'expo-status-bar';
import React from "react";

import { SafeAreaView, Text } from "react-native";

// Import Styles
import styles from "../styles/SafeAreaView";

export default function SettingsScreen() {
    return(
        <SafeAreaView style={styles.safeAreaView}>
            <StatusBar style="auto" hidden={true}/>
            <Text>Settings</Text>
        </SafeAreaView>
    );
}