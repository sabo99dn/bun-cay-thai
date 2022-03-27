import React from 'react';

import {View, Platform, FlatList, ActivityIndicator} from 'react-native';

import {ContainerView} from '../../Components';

import Item from './ReportItem';

import styles from './styles';

import Header from './ListHeader';

import {useDispatch, useSelector} from 'react-redux';

import {getUserData} from '../../Store/user/selector';

import ActionSheet from '../../Components/ActionSheet/AndroidActionSheet';

import ImagePicker from 'react-native-image-crop-picker';

import {showMessage} from 'react-native-flash-message';

import {updateUserAvatar} from '../../Store/user/service';

import SlideInModal from '../../Components/SlideInModal';

import Loading from './LoadingIndicatorView';

import {actions} from '../../Store/user/reducer';
import {actions as ReportActions} from '../../Store/reports/reducer';

import {
  CANCEL_INDEX,
  LIMIT_DEFAULT,
  PAGE_DEFAULT,
  PICK_IMAGE_OPTIONS,
  SUCCESS,
} from '../../Configs/contants';

import {
  getListLoadingSelector,
  getListSelector,
  getLoadListMoreLoading,
  getPageSelector,
  getHasLoadMoreSelector,
} from '../../Store/reports/selector';
import {useTranslation} from 'react-i18next';

import Loader from './Loader';

const Account = () => {
  const {i18n} = useTranslation();

  const dispatch = useDispatch();

  const userInfor = useSelector(state => getUserData(state));

  const actionSheetRef = React.useRef();

  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const loading = useSelector(state => getListLoadingSelector(state));

  const list = useSelector(state => getListSelector(state));

  const hasLoadMore = useSelector(state => getHasLoadMoreSelector(state));

  const loadmoreLoading = useSelector(state => getLoadListMoreLoading(state));

  const page = useSelector(state => getPageSelector(state));

  const onUpdateAvatarPress = () => {
    actionSheetRef.current.show();
  };

  const onCaptureImagePress = () => {
    ImagePicker.openCamera({
      width: 600,
      height: 600,
      cropping: true,
      compressImageQuality: 0.8,
      includeBase64: true,
      mediaType: 'photo',
    })
      .then(res => {
        uploadAvatar(res?.path, res?.mime);
      })
      .catch(e => {});
  };

  const onPickImagePress = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      multiple: false,
      cropping: true,
      width: 600,
      height: 600,
    })
      .then(res => {
        uploadAvatar(res?.path, res?.mime);
      })
      .catch(e => {});
  };

  const uploadAvatar = async (uri, mime = 'image/jpeg') => {
    if (!uri) {
      return;
    }
    try {
      SlideInModal.show(() => {}, <Loading />, 'fadeIn', 'fadeOut');
      const time = Date.now();
      let uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
      const fileName = `avatar_${userInfor?.number_phone}_${time}.${
        mime.split('/')[1]
      }`;
      await updateUserAvatar({
        email: userInfor?.email,
        number_phone: userInfor?.number_phone,
        new_avatar: {uri: uploadUri, name: fileName, type: mime},
      }).then(res => {
        if (res && res.data.status === SUCCESS) {
          dispatch(
            actions.setInfoData({
              ...userInfor,
              avatar: uploadUri,
            }),
          );
          showMessage({
            message: i18n.t('reports:success'),
            description: i18n.t('profiles:update_avatar_success'),
            type: 'success',
          });
        } else {
          showMessage({
            message: i18n.t('reports:failed'),
            description: i18n.t('profiles:update_avatar_failed'),
            type: 'danger',
          });
        }
      });
    } catch (err) {
      showMessage({
        message: i18n.t('reports:failed'),
        description: i18n.t('profiles:update_avatar_failed'),
        type: 'danger',
      });
    } finally {
      SlideInModal.hide();
    }
  };

  const renderFooter = () => {
    return loadmoreLoading ? (
      <View style={styles.viewLoadmore}>
        <ActivityIndicator />
      </View>
    ) : null;
  };

  const _handleRefresh = () => {
    setIsRefreshing(true);
    dispatch(
      ReportActions.getList({
        page: PAGE_DEFAULT,
        limit: LIMIT_DEFAULT,
        user_id: userInfor?.id,
      }),
    );
  };

  const _handleLoadmore = () => {
    if (hasLoadMore && !loading) {
      dispatch(
        ReportActions.getListLoadMore({
          page: page + 1,
          limit: LIMIT_DEFAULT,
          user_id: userInfor?.id,
        }),
      );
    }
  };

  React.useEffect(() => {
    if (!loading) setIsRefreshing(false);
  }, [loading]);
  React.useEffect(() => {
    dispatch(
      ReportActions.getList({
        page: PAGE_DEFAULT,
        limit: LIMIT_DEFAULT,
        user_id: userInfor?.id,
      }),
    );
  }, []);
  const onDeleteSuccess = () => {
    dispatch(
      ReportActions.getList({
        page: PAGE_DEFAULT,
        limit: LIMIT_DEFAULT,
        user_id: userInfor?.id,
      }),
    );
  };

  return (
    <ContainerView style={styles.container} fluid>
      <FlatList
        style={styles.contentWrapper}
        contentContainerStyle={styles.listInner}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={loading && !isRefreshing && !loadmoreLoading ? [1] : list}
        renderItem={({item, index}) =>
          loading && !isRefreshing && !loadmoreLoading ? (
            <Loader />
          ) : (
            <Item key={index} item={item} onDeleteSuccess={onDeleteSuccess} />
          )
        }
        ListHeaderComponent={
          <Header userInfo={userInfor} onUpdateAvatar={onUpdateAvatarPress} />
        }
        keyExtractor={(item, index) => index}
        refreshing={isRefreshing}
        onRefresh={_handleRefresh}
        ListFooterComponent={renderFooter}
        onEndReached={_handleLoadmore}
      />
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
export default Account;
