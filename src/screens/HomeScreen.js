import { StatusBar } from 'expo-status-bar';
import React from "react";

import { SafeAreaView } from "react-native";

// Import Components
import Greeting from "../components/Text/Greeting";
import Title from "../components/Text/Title";

// Import Styles
import styles from "../styles/SafeAreaView";

export default function HomeScreen() {
    return(
        <SafeAreaView style={styles.safeAreaView}>
            <StatusBar style="auto" hidden={true}/>
            <Greeting username="stranger"/>
            <Title title="What movie is it gonna be today?" />
        </SafeAreaView>
    );
}