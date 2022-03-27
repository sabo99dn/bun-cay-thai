import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Button} from '../../Components';
import {
  AddProductButton,
  DefaultLocation,
  Email,
  Phone,
  UpdateAvatarIcon,
} from '../../svg/common';
import styles from './styles';
import ImageWithIndicator from '../../Components/Image/ImageWithIndicator';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import RoutesConfig from '../../Configs/routes';
import {AnalyticsAction} from '../../Utils/analytics';
import FastImage from 'react-native-fast-image';

const Header = ({userInfo = {}, onUpdateAvatar = () => {}}) => {
  const {i18n} = useTranslation();
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.bannerContainer}>
        <ImageWithIndicator
          style={styles.backgroundImg}
          source={
            userInfo?.background
              ? {uri: userInfo?.background}
              : require('../../assets/images/logo.jpg')
          }
          PlaceholderContent={<ActivityIndicator />}
          ImageComponent={FastImage}
        />

        <TouchableOpacity onPress={onUpdateAvatar} style={styles.avatar}>
          <FastImage
            style={styles.avataImg}
            source={
              userInfo?.avatar
                ? {uri: userInfo?.avatar}
                : require('../../assets/images/logo.jpg')
            }
          />

          <View style={styles.iconWrapper}>
            <UpdateAvatarIcon width={20} height={18} />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{userInfo?.full_name}</Text>
      <View style={styles.contactInfo}>
        <View style={styles.iconContainer}>
          <Email />
        </View>
        <View style={styles.contactInfoRow}>
          <Text
            style={[
              styles.textInfo,
              {
                color: '#80CD28',
              },
            ]}>
            {i18n.t('profiles:email')}
          </Text>
          <Text style={styles.textInfo}>{` ` + userInfo?.email}</Text>
        </View>
      </View>
      <View style={styles.contactInfo}>
        <View style={styles.iconContainer}>
          <Phone />
        </View>
        <View style={styles.contactInfoRow}>
          <Text
            style={[
              styles.textInfo,
              {
                color: '#80CD28',
              },
            ]}>
            {i18n.t('profiles:phone')}
          </Text>
          <Text style={styles.textInfo}>{` ` + userInfo?.number_phone}</Text>
        </View>
      </View>
      <View style={styles.contactInfo}>
        <View style={styles.iconContainer}>
          <DefaultLocation />
        </View>
        <View style={styles.contactInfoColumn}>
          <Text
            style={[
              styles.textInfo,
              {
                color: '#80CD28',
              },
            ]}>
            {i18n.t('profiles:default_shipping_address')}:
          </Text>
          <Text style={styles.textInfo}>
            {`${userInfo?.street_address} ${userInfo?.ward} ${userInfo?.district} ${userInfo?.city}`}
          </Text>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          styleTextInput={styles.buttonLabel}
          styleButton={styles.contact}
          label={i18n.t('profiles:add_report')}
          leftIcon={
            <AddProductButton
              fillColor={'#fff'}
              strokeColor={'#80CD28'}
              strokeWidth={4}
              width={20}
              height={20}
              borderColor={'#80CD28'}
            />
          }
          onPress={() => {
            AnalyticsAction(
              () =>
                navigation.navigate(
                  RoutesConfig.MainStack.screens.AddReport.name,
                ),
              {
                routes: RoutesConfig.MainStack.screens,
                action: 'navigation',
              },
            );
          }}
        />
        <Button
          styleTextInput={styles.buttonLabel}
          styleButton={styles.changePassword}
          label={i18n.t('profiles:change_password')}
          onPress={() => {
            AnalyticsAction(
              () =>
                navigation.navigate(
                  RoutesConfig.MainStack.screens.ChangePassword.name,
                ),
              {
                routes: RoutesConfig.MainStack.screens,
                action: 'navigation',
              },
            );
          }}
        />
      </View>
    </>
  );
};
export default Header;
