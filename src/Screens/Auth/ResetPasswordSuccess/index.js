import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FormField} from '../../../Components';
import {validationSchema} from './validation';
import {useTranslation} from 'react-i18next';
import {Button} from '../../../Components';
import {ContactPhone} from '../../../Configs/setting';
import {resetPassword, signUp} from '../../../Store/auth/service';
import {showMessage} from 'react-native-flash-message';
import {authSignIn} from '../../../Store/auth/actions';
import {AnalyticsAction} from '../../../Utils/analytics';
import RoutesConfig from '../../../Configs/routes';
import {StatusBar} from 'react-native';

const ResetPasswordSuccess = ({navigation, route}) => {
  const {i18n} = useTranslation();

  const [buttonColor, setButtonColor] = useState({
    backgroundColor: '#fff',
    color: '#333333',
  });
  const onSubmitHandler = () => {
    AnalyticsAction(
      () =>
        navigation.navigate(
          RoutesConfig.AuthStack.screens.ChangePassword.name,
          {email: route.params.email},
        ),
      {
        routes: RoutesConfig.AuthStack.screens.ChangePassword,
        action: 'navigation',
      },
    );
  };

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.content}>
          <Text style={styles.textDescription}>
            {i18n.t('auth:description_reset_password_success_1')}
          </Text>
          <Text style={[styles.textDescription, styles.textDescriptionEmail]}>
            {route.params.email}
          </Text>
          <Text style={styles.textDescription}>
            {i18n.t('auth:description_reset_password_success_2')}
          </Text>
          <View style={[styles.footer]}>
            <Button
              onPress={onSubmitHandler}
              label={i18n.t('auth:btn_change_password')}
              styleButton={{
                backgroundColor: buttonColor.backgroundColor,
              }}
              styleTextInput={{color: buttonColor.color}}
              propsButton={{
                activeOpacity: 1,
                onPressIn: () => {
                  setButtonColor({
                    backgroundColor: '#80CD28',
                    color: '#fff',
                  });
                },
                onPressOut: () => {
                  setButtonColor({
                    backgroundColor: '#fff',
                    color: '#333333',
                  });
                },
              }}
            />
            <View style={styles.footerDescription}>
              <Text style={styles.textDescriptionBold}>
                {i18n.t('auth:description_reset_password_success_bottom_1')}
              </Text>
              <Text style={styles.textDescriptionBottom}>
                {i18n.t('auth:description_reset_password_success_bottom_2')}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(`tel:${ContactPhone}`);
                }}>
                <Text style={styles.contactPhone}>
                  {i18n.t('auth:contact_support')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ResetPasswordSuccess;
