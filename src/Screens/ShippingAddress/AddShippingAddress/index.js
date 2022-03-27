import {Formik} from 'formik';
import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {View, ScrollView, SafeAreaView} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, ContainerView, FormField} from '../../../Components';
import {LIMIT_DEFAULT, PAGE_DEFAULT, SUCCESS} from '../../../Configs/contants';
import {validationSchema} from './validation';
import * as apiCommon from '../../../Store/common/service';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {actions as commonActions} from '../../../Store/common/reducer';
import {
  citySelectors,
  districtSelectors,
  wardSelectors,
} from '../../../Store/common/selector';
import {getUserData} from '../../../Store/user/selector';
import {
  postCreateShipAddress,
  putUpdateShipAddress,
} from '../../../Store/shipAddress/service';
import {useNavigation, useRoute} from '@react-navigation/native';
import {actions} from '../../../Store/shipAddress/reducer';
import {showMessage} from 'react-native-flash-message';
import AddressPicker from './AddressPicker';
import ModalSelect from './ModalSelect';
import AddressModal from '../../Order/AddressModal';
import SlideInModal from '../../../Components/SlideInModal';

const AddShippingAddress = () => {
  const route = useRoute();
  const isEdit = route?.params?.isEdit || false;
  const item = route?.params?.item || {};
  const fromOrder = route.params?.fromOrder || false;

  const dispatch = useDispatch();

  const {i18n} = useTranslation();

  const navigation = useNavigation();

  const userInfor = useSelector(state => getUserData(state));

  const cityList = useSelector(state => citySelectors.getListSelector(state));
  const districtList = useSelector(state =>
    districtSelectors.getListSelector(state),
  );
  const wardList = useSelector(state => wardSelectors.getListSelector(state));

  const [keyCity, setKeyCity] = useState(item?.city || null);
  const [keyDistrict, setKeyDistrict] = useState(item?.district || null);
  const [keyWard, setKeyWard] = useState(item?.ward || null);

  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalLabel, setModalLabel] = React.useState('');
  const [modalData, setModalData] = React.useState([]);
  const [modalField, setModalField] = React.useState();

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

  const onCreate = async values => {
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
    try {
      let requestData = {
        full_address,
        ...values,
        user_id: userInfor?.id,
        receiver_name: userInfor?.full_name,
        number_phone: userInfor?.number_phone,
      };
      const resCreate = await postCreateShipAddress(requestData);
      showMessage({
        message: i18n.t('auth:success'),
        description: i18n.t('auth:create_address_success'),
        type: 'success',
      });

      navigation.goBack();
    } catch (error) {
      showMessage({
        message: i18n.t('reports:failed'),
        description: i18n.t('auth:create_address_failed'),
        type: 'danger',
      });
    }
  };

  const onUpdate = async values => {
    let full_address = values?.street_address || '';
    full_address += ' ';
    full_address +=
      wardList?.filter(item => item?.code === values?.ward)[0]
        ?.name_with_type || '';
    full_address += ' ';
    full_address +=
      districtList?.filter(item => item?.code === values?.district)[0]
        ?.name_with_type || '';
    full_address += ' ';
    full_address +=
      cityList?.filter(item => item?.code === values?.city)[0]
        ?.name_with_type || '';

    try {
      let requestData = {
        ...values,
        user_id: userInfor?.id,
        receiver_name: userInfor?.full_name,
        number_phone: userInfor?.number_phone,
        full_address: full_address,
      };

      await putUpdateShipAddress(requestData);
      dispatch(
        actions.getList({
          page: PAGE_DEFAULT,
          limit: LIMIT_DEFAULT,
          user_id: userInfor?.id,
        }),
      );
      showMessage({
        message: i18n.t('auth:success'),
        description: i18n.t('auth:update_default_success'),
        type: 'success',
      });
      navigation.goBack();
    } catch (error) {
      showMessage({
        message: i18n.t('reports:failed'),
        description: i18n.t('profiles:update_default_address_failed'),
        type: 'danger',
      });
    }
  };

  useEffect(() => {
    dispatch(commonActions.city.getList());
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
  useEffect(() => {
    const subcribes = navigation.addListener('beforeRemove', () => {
      if (fromOrder) {
        setTimeout(() => {
          SlideInModal.show(
            () => {},
            <AddressModal isOrder={true} navigation={navigation} />,
            'slideInRight',
            'slideOutRight',
          );
        }, 0);
      }
    });
    return subcribes;
  }, []);

  return (
    <ContainerView style={styles.container} fluid>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.formContainer}>
          <Formik
            initialValues={
              !isEdit
                ? {
                    address_name: '',
                    city: '',
                    district: '',
                    ward: '',
                    street_address: '',
                  }
                : {
                    ...item,
                  }
            }
            onSubmit={isEdit ? onUpdate : onCreate}
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
                      flex: 1,
                    }}
                    nestedScrollEnabled={true}>
                    <KeyboardAwareScrollView
                      showsVerticalScrollIndicator={false}
                      keyboardShouldPersistTaps="handled"
                      extraScrollHeight={-200}
                      contentContainerStyle={{flex: 1}}>
                      <View style={styles.inputWrap}>
                        <FormField
                          field="address_name"
                          values={values}
                          touched={touched}
                          errors={errors}
                          label={i18n.t('profiles:address_name')}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          labelStyle={styles.addressNameLabelStyle}
                          propsTextInput={{
                            style: values.address_name?.length
                              ? {...styles.textDeliveryAddressTyped}
                              : {...styles.textDeliveryAddress},
                            autoFocus: true,
                          }}
                        />
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
                      </View>
                    </KeyboardAwareScrollView>
                  </ScrollView>
                  <View style={styles.buttonContainer}>
                    {!isEdit ? (
                      <Button
                        label={i18n.t('profiles:add_address')}
                        onPress={handleSubmit}
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
                    ) : (
                      <Button
                        styleTextInput={styles.buttonLabel}
                        styleButton={styles.confirm}
                        label={i18n.t('auth:btn_update')}
                        onPress={handleSubmit}
                      />
                    )}
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
    </ContainerView>
  );
};

export default AddShippingAddress;
