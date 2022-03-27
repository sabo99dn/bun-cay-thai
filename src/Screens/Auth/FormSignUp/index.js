import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {showMessage} from 'react-native-flash-message';
import {SUCCESS} from '../../../Configs/contants';
import {FormField} from '../../../Components';
import {validationSchema} from './validation';
import {useTranslation} from 'react-i18next';
import {Button} from '../../../Components';
import {actions as commonActions} from '../../../Store/common/reducer';
import {
  citySelectors,
  districtSelectors,
  wardSelectors,
} from '../../../Store/common/selector';
import {signUp} from '../../../Store/auth/service';
import {useDispatch, useSelector} from 'react-redux';
import {
  errorSelector,
  loginSuccessSelector,
} from '../../../Store/auth/selectors';
import {actions as authActions} from '../../../Store/auth/reducer';

import CheckBoxAgree from './CheckBoxAgree';
import {actions as addressActions} from '../../../Store/shipAddress/reducer';
import {AnalyticsAction} from '../../../Utils/analytics';
import RoutesConfig from '../../../Configs/routes';

import AddressPicker from './AddressPicker';

import ModalSelect from './ModalSelect';
import {StatusBar} from 'react-native';

const FormSignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const error = useSelector(state => errorSelector(state));
  const loginSuccess = useSelector(state => loginSuccessSelector(state));
  const cityList = useSelector(state => citySelectors.getListSelector(state));
  const districtList = useSelector(state =>
    districtSelectors.getListSelector(state),
  );
  const wardList = useSelector(state => wardSelectors.getListSelector(state));

  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalLabel, setModalLabel] = React.useState('');
  const [modalData, setModalData] = React.useState([]);
  const [modalField, setModalField] = React.useState();

  useEffect(() => {
    if (error) {
      showMessage({
        message: i18n.t('common:info'),
        description: i18n.t('auth:number_phone_or_password.wrong'),
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

  const {i18n} = useTranslation();
  const [disabled, setDisabled] = useState(false);

  //keyCity if set initial value = 1 ---> listDistrict(city: 1) ---> get listDistrict(HaNoi) when user not has selected
  const [keyCity, setKeyCity] = useState();
  const [keyDistrict, setKeyDistrict] = useState(1);
  const [keyWard, setKeyWard] = useState(1);

  const [buttonColor, setButtonColor] = React.useState({
    backgroundColor: '#fff',
    color: '#333333',
  });

  const handleSetCity = async field => {
    await dispatch(commonActions.district.getList({city: field}));
  };

  const handleSetDistrict = async field => {
    await dispatch(commonActions.ward.getList({district: field}));
  };

  useEffect(() => {
    dispatch(commonActions.city.getList());
    //get listDistrict() when user not has selected
    // setKeyCity(prev => prev + 1);
  }, []);

  useEffect(() => {
    if (keyCity) {
      handleSetCity(keyCity);
      setKeyDistrict(null);
      setKeyWard(null);
    }
  }, [keyCity]);
  useEffect(() => {
    if (keyDistrict) {
      handleSetDistrict(keyDistrict);
      setKeyWard(null);
    }
  }, [keyDistrict]);

  const onSubmitHandler = async values => {
    if (!disabled) {
      setDisabled(true);
      try {
        let full_address = values?.street_address || '';
        const wardName =
          wardList?.filter(item => item?.code === values?.ward)[0]
            ?.name_with_type || '';
        const districtName =
          districtList?.filter(item => item?.code === values?.district)[0]
            ?.name_with_type || '';
        const cityName =
          cityList?.filter(item => item?.code === values?.city)[0]
            ?.name_with_type || '';
        full_address += wardName ? `, ${wardName}` : '';
        full_address += districtName ? `, ${districtName}` : '';
        full_address += cityName ? `, ${cityName}` : '';

        const result = await signUp({
          ...values,
          default_address: full_address,
        });

        if (result.data.status === SUCCESS && !result.data.error_code) {
          const [userData] = result.data.data;
          showMessage({
            message: i18n.t('common:info'),
            description: i18n.t('auth:sign_up_success'),
            type: 'success',
          });
          console.log('createAddress', {
            ...values,
            address_name: i18n.t('auth:default_address_name'),
            receiver_name: values.full_name,
            full_address: full_address,
            user_id: userData.id,
          });
          dispatch(
            addressActions.createAddress({
              ...values,
              address_name: i18n.t('auth:default_address_name'),
              receiver_name: values.full_name,
              full_address: full_address,
              user_id: userData.id,
            }),
          );
          dispatch(authActions.authSignIn(values));
          setDisabled(false);
        } else {
          if (result.data.error_code) {
            showMessage({
              message: i18n.t('common:info'),
              description: i18n.t('auth:number_phone.exist'),
              type: 'danger',
            });
          } else {
            showMessage({
              message: i18n.t('common:info'),
              description: i18n.t('auth:email.exist'),
              type: 'danger',
            });
          }

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
        <View style={styles.content}>
          <Formik
            initialValues={{
              full_name: '',
              number_phone: '',
              email: '',
              password: '',
              city: '',
              district: '',
              ward: '',
              street_address: '',
              agree_security: false,
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
              setFieldValue,
            }) => {
              return (
                <>
                  <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{
                      paddingBottom: 290,
                      flex: 1,
                    }}
                    nestedScrollEnabled={true}>
                    <KeyboardAwareScrollView
                      showsVerticalScrollIndicator={false}
                      keyboardShouldPersistTaps="handled"
                      extraScrollHeight={150}
                      contentContainerStyle={styles.scrollViewInner}>
                      <View style={styles.inputWrap}>
                        <FormField
                          field="full_name"
                          label={i18n.t('auth:field_full_name')}
                          values={values}
                          touched={touched}
                          errors={errors}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                        />
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
                          field="email"
                          label={i18n.t('auth:field_email')}
                          values={values}
                          touched={touched}
                          errors={errors}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                        />
                        <FormField
                          field="password"
                          label={i18n.t('auth:field_sing_up_password')}
                          values={values}
                          touched={touched}
                          errors={errors}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          secureTextEntry={true}
                        />
                      </View>
                      <View style={styles.inputWrap}>
                        <Text style={styles.textDeliveryAddress}>
                          {i18n.t('auth:text_delivery_address')}
                        </Text>
                        <AddressPicker
                          key={'city' + keyCity}
                          field="city"
                          label={i18n.t('auth:field_city')}
                          itemKey={'code'}
                          touched={touched}
                          values={values}
                          errors={errors}
                          itemsDefault={cityList}
                          setData={handleSetCity}
                          setModalVisible={setModalVisible}
                          setModalLabel={setModalLabel}
                          setModalData={setModalData}
                          setModalField={setModalField}
                          placeholder="Chọn thành phố"
                        />
                        <AddressPicker
                          key={'district' + keyDistrict}
                          field="district"
                          label={i18n.t('auth:field_district')}
                          itemKey={'code'}
                          touched={touched}
                          values={values}
                          errors={errors}
                          itemsDefault={districtList}
                          setData={handleSetDistrict}
                          setModalVisible={setModalVisible}
                          setModalLabel={setModalLabel}
                          setModalData={setModalData}
                          setModalField={setModalField}
                          placeholder="Chọn quận"
                        />
                        <AddressPicker
                          key={'ward' + keyWard}
                          field="ward"
                          label={i18n.t('auth:field_ward')}
                          itemKey={'code'}
                          touched={touched}
                          values={values}
                          errors={errors}
                          itemsDefault={wardList}
                          setData={handleSetCity}
                          setModalVisible={setModalVisible}
                          setModalLabel={setModalLabel}
                          setModalData={setModalData}
                          setModalField={setModalField}
                          placeholder="Chọn phường"
                        />
                        <FormField
                          field="street_address"
                          label={i18n.t('auth:field_street_address')}
                          values={values}
                          touched={touched}
                          errors={errors}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                        />
                        <CheckBoxAgree
                          field="agree_security"
                          values={values}
                          touched={touched}
                          errors={errors}
                          handleChange={setFieldValue}
                          handleBlur={handleBlur}
                        />
                      </View>
                    </KeyboardAwareScrollView>
                  </ScrollView>
                  <View style={[styles.footer]}>
                    <Button
                      loading={disabled}
                      disabled={disabled}
                      onPress={handleSubmit}
                      label={i18n.t('auth:btn_sign_up')}
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
                    <ModalSelect
                      values={values}
                      visible={modalVisible}
                      setModalVisible={setModalVisible}
                      label={modalLabel}
                      modalData={modalData}
                      modalField={modalField}
                      handleChange={setFieldValue}
                      handleChangeCallback={
                        modalField === 'city'
                          ? handleSetCity
                          : modalField === 'district'
                          ? handleSetDistrict
                          : () => {}
                      }
                    />
                  </View>
                </>
              );
            }}
          </Formik>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default FormSignUp;
