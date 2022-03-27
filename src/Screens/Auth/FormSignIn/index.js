import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Linking,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {showMessage} from 'react-native-flash-message';
import {useTranslation} from 'react-i18next';
import {LineHorizontal, PhoneRing} from '../../../svg/common';
import {FormField} from '../../../Components';
import {validationSchema} from './validation';
import {useDispatch, useSelector} from 'react-redux';

import {actions as authActions} from '../../../Store/auth/reducer';
import * as authSelector from '../../../Store/auth/selectors';

import {useHeaderHeight} from '@react-navigation/stack';

import {Button} from '../../../Components';
import {ContactPhone} from '../../../Configs/setting';
import {AnalyticsAction} from '../../../Utils/analytics';
import RoutesConfig from '../../../Configs/routes';
import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Platform} from 'react-native';
import {StatusBar} from 'react-native';

const HEIGHT = Dimensions.get('window').height;

const FormSignIn = ({navigation}) => {
  const {i18n} = useTranslation();
  const dispatch = useDispatch();
  const [buttonColor, setButtonColor] = React.useState({
    backgroundColor: '#fff',
    color: '#333333',
  });
  const error = useSelector(state => authSelector.errorSelector(state));
  const loginSuccess = useSelector(state =>
    authSelector.loginSuccessSelector(state),
  );

  const MIN_CONTENT_HEIGHT =
    HEIGHT -
    getStatusBarHeight() -
    useHeaderHeight() -
    (Platform.OS === 'android' ? 10 : 35);

  useEffect(() => {
    if (error) {
      const errorMessage =
        typeof error === 'string'
          ? error
          : i18n.t('auth:number_phone_or_password.wrong');
      showMessage({
        message: i18n.t('common:info'),
        description: errorMessage,
        type: 'danger',
      });
    }
    if (loginSuccess) {
      AnalyticsAction(() => navigation.replace(RoutesConfig.MainStack.name), {
        routes: RoutesConfig.MainStack.name,
        action: 'navigation',
      });
    }
    return () => {
      dispatch(authActions.signInReset());
    };
  }, [loginSuccess, error]);

  function onSubmitHandler(values) {
    dispatch(authActions.authSignIn(values));
  }

  function isFormValid(isValid, touched) {
    return isValid && Object.keys(touched).length !== 0;
  }
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          enableAutomaticScroll={true}
          contentContainerStyle={{flex: 1}}>
          <View
            style={[
              styles.content,
              {
                minHeight: MIN_CONTENT_HEIGHT,
              },
            ]}>
            <Formik
              initialValues={{
                number_phone: '',
                password: '',
              }}
              onSubmit={onSubmitHandler}
              validationSchema={validationSchema(i18n)}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isValid,
              }) => (
                <>
                  <View style={styles.inputWrap}>
                    <FormField
                      field="number_phone"
                      label={i18n.t('auth:field_number_phone')}
                      values={values}
                      touched={touched}
                      errors={errors}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      propsTextInput={{
                        keyboardType: 'numeric',
                        maxLength: 11,
                      }}
                    />
                    <FormField
                      field="password"
                      label={i18n.t('auth:field_password')}
                      values={values}
                      touched={touched}
                      errors={errors}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      secureTextEntry={true}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        AnalyticsAction(
                          () =>
                            navigation.navigate(
                              RoutesConfig.AuthStack.screens.ResetPassword.name,
                            ),
                          {
                            routes:
                              RoutesConfig.AuthStack.screens.ResetPassword,
                            action: 'navigation',
                          },
                        );
                      }}>
                      <Text style={styles.forgotPassword}>
                        {i18n.t('auth:forgot_password')}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={[styles.footer]}>
                    <Button
                      onPress={handleSubmit}
                      label={i18n.t('auth:btn_sign_in')}
                      styleButton={{
                        backgroundColor: buttonColor.backgroundColor,
                      }}
                      styleTextInput={{
                        color: buttonColor.color,
                      }}
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
                    <View style={styles.lineOr}>
                      <LineHorizontal />
                      <Text style={styles.txtOr}>{i18n.t('auth:line_or')}</Text>
                      <LineHorizontal />
                    </View>
                    <Button
                      // disabled={!isFormValid(isValid, touched) || loading}
                      onPress={() => {
                        Linking.openURL(`tel:${ContactPhone}`);
                      }}
                      label={i18n.t('auth:contact_phone')}
                      leftIcon={
                        <View style={{paddingRight: 10}}>
                          <PhoneRing />
                        </View>
                      }
                    />
                  </View>
                </>
              )}
            </Formik>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </View>
  );
};

export default FormSignIn;
