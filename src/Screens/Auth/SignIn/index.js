import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  StatusBar,
  Animated,
} from 'react-native';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import {Button} from '../../../Components';
import {LinkPolicy} from '../../../Configs/setting';
import {AnalyticsAction} from '../../../Utils/analytics';
import RoutesConfig from '../../../Configs/routes';

const SignIn = ({navigation}) => {
  /* Localization */
  const leftLogoText = useRef(new Animated.Value(0)).current;
  const leftLogoImage = useRef(new Animated.Value(135)).current;
  const speed = 700;
  useEffect(() => {
    Animated.timing(leftLogoText, {
      toValue: 100,
      duration: speed - 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(leftLogoImage, {
      toValue: 75,
      duration: speed - 200,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      Animated.timing(leftLogoText, {
        toValue: 0,
        duration: speed,
        useNativeDriver: false,
      }).start();
      Animated.timing(leftLogoImage, {
        toValue: 135,
        duration: speed,
        useNativeDriver: false,
      }).start();
    }, speed - 200);
  }, []);
  const {i18n} = useTranslation();
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" backgroundColor="#80CD28" />
      <View style={styles.content}>
        <View
          style={{
            position: 'relative',
            height: 400,
            width: '100%',
          }}>
          <Animated.View
            style={{
              position: 'absolute',
              top: 130,
              marginLeft: leftLogoText,
              zIndex: 2,
            }}>
            <Image
              style={styles.logo}
              source={require('../../../assets/images/logo_text.png')}
            />
          </Animated.View>
          <Animated.View
            style={{
              position: 'absolute',
              top: 100,
              marginLeft: leftLogoImage,
              zIndex: 1,
            }}>
            <Image
              style={styles.logo}
              source={require('../../../assets/images/logo_image.png')}
            />
          </Animated.View>
        </View>

        <View style={styles.btnGroup}>
          <Button
            onPress={() => {
              AnalyticsAction(
                () =>
                  navigation.navigate(
                    RoutesConfig.AuthStack.screens.FormSignIn.name,
                  ),
                {
                  routes: RoutesConfig.AuthStack.screens.FormSignIn,
                  action: 'navigation',
                },
              );
            }}
            label={i18n.t('auth:text_sign_in')}
            styleButton={styles.btnLogin}
            styleTextInput={styles.textLogin}
          />

          <Button
            onPress={() => {
              AnalyticsAction(
                () =>
                  navigation.navigate(
                    RoutesConfig.AuthStack.screens.FormSignUp.name,
                  ),
                {
                  routes: RoutesConfig.AuthStack.screens.FormSignUp,
                  action: 'navigation',
                },
              );
            }}
            label={i18n.t('auth:text_sign_up')}
            styleTextInput={styles.textSignUp}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(LinkPolicy);
        }}>
        <View style={styles.security}>
          <Text style={styles.txt}>
            {i18n.t('auth:text_description_bottom_1')}
            <Text style={styles.txtClick}>
              {i18n.t('auth:text_description_bottom_2')}
            </Text>
            {i18n.t('auth:text_description_bottom_and')}
            <Text style={styles.txtClick}>
              {i18n.t('auth:text_description_bottom_3')}
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
