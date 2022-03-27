import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import styles from './styles';
import {Pin} from '../../../svg/common';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {getUserAddress} from '../../../Store/user/selector';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {TouchableOpacity} from 'react-native';
import AddressModal from '../../Order/AddressModal';
import {useNavigation} from '@react-navigation/native';
import SlideInModal from '../../../Components/SlideInModal';

const Header = () => {
  const {i18n} = useTranslation();
  const userAddress = useSelector(state => getUserAddress(state));
  const navigation = useNavigation();
  const _handlePress = () => {
    SlideInModal.show(
      () => {},
      <AddressModal navigation={navigation} isOutOrder={true} />,
      'slideInRight',
      'slideOutRight',
    );
  };
  return (
    <View style={[styles.container, {paddingTop: getStatusBarHeight()}]}>
      <Text style={{color: 'black'}}>{i18n.t('home:delivery_to')}</Text>
      <View style={styles.address}>
        <Pin />
        <TouchableOpacity onPress={_handlePress}>
          <Text style={styles.tittle} numberOfLines={1}>
            {userAddress}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
