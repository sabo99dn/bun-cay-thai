import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SUCCESS} from '../../../Configs/contants';
import {FormField} from '../../../Components';
import {validationSchema} from './validation';
import {useTranslation} from 'react-i18next';
import {Button} from '../../../Components';
import {updatePassword} from '../../../Store/auth/service';
import {showMessage} from 'react-native-flash-message';
import {getUserData} from '../../../Store/user/selector';
import {useSelector} from 'react-redux';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useHeaderHeight} from '@react-navigation/stack';
import {Dimensions} from 'react-native';
import {Platform} from 'react-native';
const HEIGHT = Dimensions.get('window').height;

const ChangePassword = ({navigation, route}) => {
  const {i18n} = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const data = useSelector(state => getUserData(state));
  const [buttonColor, setButtonColor] = React.useState({
    backgroundColor: '#fff',
    color: '#333333',
  });
  const MIN_CONTENT_HEIGHT =
    HEIGHT -
    getStatusBarHeight() -
    useHeaderHeight() -
    (Platform.OS === 'android' ? 10 : 35);
  const onSubmitHandler = async values => {
    if (!disabled) {
      setDisabled(true);
      try {
        const result = await updatePassword({
          email: data?.email,
          ...values,
        });
        if (result.data.status === SUCCESS) {
          navigation.goBack();
          setDisabled(false);
          showMessage({
            message: i18n.t('common:info'),
            description: i18n.t('auth:change_password_success'),
            type: 'success',
          });
        } else {
          showMessage({
            message: i18n.t('common:info'),
            description: i18n.t('auth:old_password.wrong'),
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
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        extraScrollHeight={150}
        extraHeight={0}
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
              password_temp: '',
              password_new: '',
              password_new_confirm: '',
              old_password: data?.password,
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
                    label={i18n.t('auth:old_password')}
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
                    loading={disabled}
                    disabled={disabled}
                    onPress={handleSubmit}
                    label={i18n.t('auth:btn_update')}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ChangePassword;
