import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './styles';
import {SUCCESS} from '../../../Configs/contants';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FormField} from '../../../Components';
import {validationSchema} from './validation';
import {useTranslation} from 'react-i18next';
import {Button} from '../../../Components';
import {updatePassword} from '../../../Store/auth/service';
import {showMessage} from 'react-native-flash-message';
import {AnalyticsAction} from '../../../Utils/analytics';
import RoutesConfig from '../../../Configs/routes';
import {StatusBar} from 'react-native';

const ChangePassword = ({navigation, route}) => {
  const {i18n} = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [buttonColor, setButtonColor] = React.useState({
    backgroundColor: '#fff',
    color: '#333333',
  });
  const onSubmitHandler = async values => {
    if (!disabled) {
      setDisabled(true);
      try {
        const result = await updatePassword({
          email: route.params.email,
          ...values,
        });
        if (result.data.status === SUCCESS) {
          AnalyticsAction(
            () =>
              navigation.navigate(RoutesConfig.AuthStack.screens.SignIn.name),
            {
              routes: RoutesConfig.AuthStack.screens.SignIn,
              action: 'navigation',
            },
          );
          setDisabled(false);
          showMessage({
            message: i18n.t('common:info'),
            description: i18n.t('auth:change_password_success'),
            type: 'success',
          });
        } else {
          showMessage({
            message: i18n.t('common:info'),
            description: i18n.t('auth:password_temp.wrong'),
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
            <Formik
              initialValues={{
                password_temp: '',
                password_new: '',
                password_new_confirm: '',
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
                      field="password_temp"
                      label={i18n.t('auth:field_password_temp')}
                      values={values}
                      touched={touched}
                      errors={errors}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      secureTextEntry={true}
                    />
                    <FormField
                      field="password_new"
                      label={i18n.t('auth:field_password_new')}
                      values={values}
                      touched={touched}
                      errors={errors}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      secureTextEntry={true}
                    />
                    <FormField
                      field="password_new_confirm"
                      label={i18n.t('auth:field_password_new_confirm')}
                      values={values}
                      touched={touched}
                      errors={errors}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      secureTextEntry={true}
                    />
                  </View>

                  <View style={[styles.footer]}>
                    <Button
                      loading={disabled}
                      disabled={disabled}
                      onPress={handleSubmit}
                      label={i18n.t('auth:btn_update')}
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

export default ChangePassword;
