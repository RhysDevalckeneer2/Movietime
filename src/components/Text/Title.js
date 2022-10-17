import React from "react";
import { Text } from 'react-native';

// Import Styles
import styles from "../../styles/Text/Title";

const Title = ( props ) => {
    return (
        <Text style={styles.title}>{ props.title }</Text>
    )
}

export default Title;