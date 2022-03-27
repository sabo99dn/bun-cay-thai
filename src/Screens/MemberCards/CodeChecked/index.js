import React from 'react';
import {View, Text, Image, Dimensions, Platform} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import QRCode from 'react-native-qrcode-svg';
import Barcode from '@kichiyaki/react-native-barcode-generator';
import BarcodeIOS from 'react-native-barcode-builder';

const windowWidth = Dimensions.get('screen').width;
import Colors from '../../../Configs/theme/colors';
import {useSelector} from 'react-redux';
import {getUserData} from '../../../Store/user/selector';
const Code = ({memberCardData}) => {
  const userInfo = useSelector(state => getUserData(state));
  return (
    <LinearGradient
      colors={[
        Colors.$linearGradientMemberCardOne,
        Colors.$linearGradientMemberCardTwo,
      ]}
      style={styles.container}>
      <View style={[styles.wrapper]}>
        <View style={styles.name}>
          <Text style={styles.fullName}>{userInfo.full_name}</Text>
        </View>
        <View style={[styles.wrapperImgBarcode]}>
          <Image
            source={{uri: memberCardData.barcode128}}
            style={styles.barcode}
          />
        </View>
        <View style={styles.wrapperImg}>
          <Image source={{uri: memberCardData.qrcode}} style={styles.qrcode} />
        </View>
        {/* <View style={[styles.wrapperImgBarcode]}>
          {Platform.OS === 'android' ? (
            <Barcode
              value={userInfo.number_phone}
              format="CODE128"
              width={3}
              height={80}
            />
          ) : (
            <BarcodeIOS
              value={userInfo.number_phone}
              format="CODE128"
              width={3}
              height={80}
            />
          )}

          <Text style={styles.numberPhone}>{userInfo.number_phone}</Text>
        </View>
        <View style={styles.wrapperImg}>
          <QRCode
            size={windowWidth * 0.94 - 60}
            value={userInfo.number_phone}
          />
        </View> */}
      </View>
    </LinearGradient>
  );
};

export default Code;
