import React from "react";
import {Text} from "react-native";
import styles from "./styles";

export default function TitleHeader({label}) {
    return (
        <Text style={styles.text}>
            {label}
        </Text>
    );
}
