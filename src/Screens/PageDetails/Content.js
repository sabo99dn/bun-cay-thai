import React from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import {getListLoadingSelector} from '../../Store/pageDetails/selector';
import {ImageLoader} from './Loader/ImageLoader';
import {TitleLoader} from './Loader/TitleLoader';
import {BodyLoader} from './Loader/ContentLoader';
import HTML from 'react-native-render-html';
import {decode} from 'html-entities';

const WIDTH = Dimensions.get('window').width;

const PromotionContent = ({item = {}}) => {
  const loading = useSelector(state => getListLoadingSelector(state));
  return (
    <View style={styles.pageDetailsContentContainer}>
      <ScrollView contentContainerStyle={styles.contentWrapper}>
        <View style={styles.imageContainer}>
          {loading ? (
            <ImageLoader width={WIDTH - 40} height={WIDTH / 2} />
          ) : (
            <FastImage
              resizeMode={FastImage.resizeMode.stretch}
              source={item?.img_url ? {uri: item?.img_url} : null}
              style={styles.contentImg}
            />
          )}
        </View>
        {loading ? (
          <TitleLoader
            style={styles.mainTitle}
            width={WIDTH - 40}
            height={20}
          />
        ) : (
          <Text style={styles.mainTitle}>{item?.title}</Text>
        )}

        <Divider />
        {loading ? (
          <BodyLoader
            style={styles.textContent}
            width={WIDTH - 40}
            height={200}
          />
        ) : (
          <HTML
            source={{html: decode(item?.content)}}
            contentWidth={Dimensions.get('window').width - 40}
            style={styles.textContent}
          />
        )}
      </ScrollView>
    </View>
  );
};
export default PromotionContent;
