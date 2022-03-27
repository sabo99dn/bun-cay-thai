import React from "react";
import {View, Text, TextInput, TouchableOpacity, Linking} from "react-native";
import styles from "./styles";
import {CheckBox} from "react-native-elements";
import colors from "../../../Configs/theme/colors";
import {useTranslation} from "react-i18next";
import { LinkPolicy } from "../../../Configs/setting";

export default function CheckBoxAgree({
                                          field,
                                          values,
                                          touched,
                                          errors,
                                          handleChange,
                                      }) {
    const { i18n } = useTranslation();
    return (
        <>
            <View style={styles.security}>
                <CheckBox
                    containerStyle={styles.checkBox}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checkedColor={colors.$txtFocusInput}
                    onPress={() => {
                        handleChange(field, !values[field])
                    }}
                    checked={values[field]}
                />
                <TouchableOpacity onPress={() => {
                    Linking.openURL(LinkPolicy)
                }
                }>
                    <Text style={styles.txt}>
                        {i18n.t("auth:text_description_bottom_1")}
                        <Text style={styles.txtClick}>
                            {i18n.t("auth:text_description_bottom_2")}
                        </Text>
                        {i18n.t("auth:text_description_bottom_and")}
                        <Text style={styles.txtClick}>
                            {i18n.t("auth:text_description_bottom_3")}
                        </Text>
                    </Text>
                </TouchableOpacity>
            </View>
            {touched[field] && errors[field] ? (
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{errors[field]}</Text>
                </View>
            ) : null}
        </>
    );
}
