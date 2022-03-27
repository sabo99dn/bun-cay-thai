import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';

import {Button, ContainerView} from '../../Components';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {UpdateAvatarIcon} from '../../svg/common';
import ActionSheet from '../../Components/ActionSheet/AndroidActionSheet';
import {
  CANCEL_INDEX,
  LIMIT_DEFAULT,
  PAGE_DEFAULT,
  PICK_IMAGE_OPTIONS,
} from '../../Configs/contants';
import SlideInModal from '../../Components/SlideInModal';
import ImageWithIndicator from '../../Components/Image';
import {showMessage} from 'react-native-flash-message';
import {getUserData} from '../../Store/user/selector';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {useNavigation, useRoute} from '@react-navigation/native';
import {postCreateReport, putUpdateReport} from '../../Store/reports/service';
import Loading from '../Account/LoadingIndicatorView';
import {actions as ReportActions} from '../../Store/reports/reducer';
import FastImage from 'react-native-fast-image';

const AddReport = () => {
  const dispatch = useDispatch();

  const [buttonColor, setButtonColor] = React.useState({
    backgroundColor: '#fff',
    color: '#333333',
  });

  const navigation = useNavigation();

  const userInfor = useSelector(state => getUserData(state));

  const routes = useRoute();

  const isEdit = routes?.params?.isEdit || false;

  const item = routes?.params?.item || {};

  const {i18n} = useTranslation();

  const [message, setMessage] = React.useState(item?.message || '');

  const [image, setImage] = React.useState({uri: item?.image || ''});

  const [loading, setLoading] = React.useState(false);

  const actionSheetRef = React.useRef();

  const onCaptureImagePress = () => {
    ImagePicker.openCamera({
      width: 800,
      height: 400,
      cropping: true,
      compressImageQuality: 0.8,
      includeBase64: true,
      mediaType: 'photo',
    })
      .then(res => {
        setImage({uri: res?.path, mime: res?.mime});
      })
      .catch(e => {});
  };

  const onPickImagePress = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      multiple: false,
      cropping: true,
      width: 800,
      height: 400,
    })
      .then(res => {
        setImage({uri: res?.path, mime: res?.mime});
      })
      .catch(e => {});
  };

  const isAppoveMessage = /[a-zA-Z]/.test(message);

  const createReport = async ({uri = '', mime = 'image/jpeg'}) => {
    if (!isAppoveMessage) {
      showMessage({
        message: i18n.t('reports:failed'),
        description: i18n.t('reports:require_message'),
        type: 'danger',
      });
      return;
    }

    try {
      SlideInModal.show(() => {}, <Loading />, 'fadeIn', 'fadeOut');
      if (!uri) {
        await postCreateReport({
          message: message,
          image: '',
          user_id: userInfor?.id,
        });
      } else {
        const time = Date.now();
        let uploadUri =
          Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
        const fileName = `report_${userInfor?.number_phone}_${time}.${
          mime.split('/')[1]
        }`;
        await postCreateReport({
          message: message,
          image: {uri: uploadUri, name: fileName, type: mime},
          user_id: userInfor?.id,
        });
      }
      dispatch(
        ReportActions.getList({
          page: PAGE_DEFAULT,
          limit: LIMIT_DEFAULT,
          user_id: userInfor?.id,
        }),
      );
      navigation.goBack();
    } catch (err) {
      showMessage({
        message: i18n.t('reports:failed'),
        description: i18n.t('reports:send_report_failed'),
        type: 'danger',
      });
    } finally {
      SlideInModal.hide();
    }
  };
  const updateReport = async ({uri = '', mime = 'image/jpeg'}) => {
    if (!isAppoveMessage) {
      showMessage({
        message: i18n.t('reports:failed'),
        description: i18n.t('reports:require_message'),
        type: 'danger',
      });
      return;
    }

    try {
      SlideInModal.show(() => {}, <Loading />, 'fadeIn', 'fadeOut');
      if (!uri || uri === item?.image) {
        await putUpdateReport({
          message: message,
          image: uri || '',
          id: item?.id,
          user_id: userInfor?.id,
        });
      } else {
        const time = Date.now();
        let uploadUri =
          Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
        const fileName = `report_${userInfor?.number_phone}_${time}.${
          mime.split('/')[1]
        }`;

        await putUpdateReport({
          message: message,
          image: {uri: uploadUri, name: fileName, type: mime},
          id: item?.id,
          user_id: userInfor?.id,
        });
      }
      dispatch(
        ReportActions.getList({
          page: PAGE_DEFAULT,
          limit: LIMIT_DEFAULT,
          user_id: userInfor?.id,
        }),
      );
      navigation.goBack();
    } catch (err) {
      showMessage({
        message: i18n.t('reports:failed'),
        description: i18n.t('reports:send_report_failed'),
        type: 'danger',
      });
    } finally {
      SlideInModal.hide();
    }
  };

  const _handleSubmit = async () => {
    if (!isEdit) {
      createReport(image);
    } else {
      updateReport(image);
    }
  };

  return (
    <ContainerView fluid style={styles.container}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        extraScrollHeight={350}
        contentContainerStyle={styles.scrollViewInner}>
        <TouchableOpacity
          style={styles.chooseImageContainer}
          onPress={() => {
            actionSheetRef.current.show();
          }}>
          <UpdateAvatarIcon />
          <Text style={styles.chooseImageText}>
            {!image?.uri
              ? i18n.t('reports:upload_img')
              : i18n.t('reports:change_image')}
          </Text>
        </TouchableOpacity>
        {image?.uri ? (
          <View style={styles.imageContainer}>
            <ImageWithIndicator
              style={styles.image}
              source={{uri: image?.uri}}
              PlaceholderContent={<ActivityIndicator />}
              ImageComponent={FastImage}
            />
          </View>
        ) : null}

        <View
          style={[
            styles.messageContainer,
            {
              shadowColor: message ? '#4F9500' : '#000',
            },
          ]}>
          <TextInput
            multiline={true}
            placeholder={i18n.t('reports:type_content')}
            style={styles.textArea}
            value={message}
            onChangeText={value => setMessage(value)}
          />
        </View>
      </KeyboardAwareScrollView>
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
          loading={loading}
          onPress={_handleSubmit}
          label={isEdit ? i18n.t('reports:update') : i18n.t('reports:send')}
        />
      </View>
      <ActionSheet
        ref={actionSheetRef}
        options={PICK_IMAGE_OPTIONS}
        cancelButtonIndex={CANCEL_INDEX}
        onPress={value => {
          if (value === 1) {
            setTimeout(() => {
              onPickImagePress();
            }, 100);

            return;
          }
          if (value === 2) {
            setTimeout(() => {
              onCaptureImagePress();
            }, 100);

            return;
          }
        }}
      />
    </ContainerView>
  );
};
export default AddReport;
