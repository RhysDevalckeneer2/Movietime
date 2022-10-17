import React from "react";
import { Text } from 'react-native';

// Import Styles
import styles from "../../styles/Text/Greeting";

const Title = ( props ) => {
    const time = new Date().getHours();
    const greeting = (time >= 12) ? "Good afternoon, " : "Good morning, ";
    return (
        <Text style={styles.greeting}>{ greeting }{ props.username }!</Text>
    )
}

export default Title;