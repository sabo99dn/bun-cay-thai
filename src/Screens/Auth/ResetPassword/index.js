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
import {SUCCESS} from '../../../Configs/contants';
import {resetPassword} from '../../../Store/auth/service';
import {showMessage} from 'react-native-flash-message';
import {AnalyticsAction} from '../../../Utils/analytics';
import RoutesConfig from '../../../Configs/routes';
import {StatusBar} from 'react-native';

const ResetPassword = ({navigation}) => {
  const {i18n} = useTranslation();
  const [disabled, setDisabled] = useState(false);

  const [buttonColor, setButtonColor] = useState({
    backgroundColor: '#fff',
    color: '#333333',
  });

  const onSubmitHandler = async values => {
    if (!disabled) {
      setDisabled(true);
      try {
        const result = await resetPassword(values);
        if (result.data.status === SUCCESS) {
          AnalyticsAction(
            () =>
              navigation.navigate(
                RoutesConfig.AuthStack.screens.ResetPasswordSuccess.name,
                {email: values.email},
              ),
            {
              routes: RoutesConfig.AuthStack.screens.ResetPasswordSuccess,
              action: 'navigation',
            },
          );
          setDisabled(false);
        } else {
          showMessage({
            message: i18n.t('common:info'),
            description: i18n.t('auth:email.dont_exist'),
            type: 'danger',
          });
          setDisabled(false);
        }
      } catch (e) {
        showMessage({
          message: i18n.t('common:info'),
          description: i18n.t('auth:sing_up_error_system'),
          type: 'danger',
        });
        setDisabled(false);
      }
    }
  };

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          extraScrollHeight={150}
          contentContainerStyle={{flex: 1}}>
          <View style={styles.content}>
            <Text style={styles.description}>
              {i18n.t('auth:description_reset_password')}
            </Text>
            <Formik
              initialValues={{
                email: '',
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
                      field="email"
                      label={i18n.t('auth:field_email_reset')}
                      values={values}
                      touched={touched}
                      errors={errors}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        Linking.openURL(`tel:${ContactPhone}`);
                      }}>
                      <Text style={styles.contactPhone}>
                        {i18n.t('auth:contact_support')}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={[styles.footer]}>
                    <Button
                      loading={disabled}
                      disabled={disabled}
                      onPress={handleSubmit}
                      label={i18n.t('auth:btn_send')}
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

export default ResetPassword;
