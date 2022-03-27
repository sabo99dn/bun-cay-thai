import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, Dimensions} from 'react-native';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {ScrollView} from 'react-native-gesture-handler';
import {
  checkExpiredDate,
  formatDate,
  formatTypeDate,
} from '../../../Utils/datetime';
import styles from './styles';
import {ImageLoader} from './Loader/ImageLoader';
import {TitleLoader} from './Loader/TitleLoader';
import {BodyLoader} from './Loader/ContentLoader';
import FastImage from 'react-native-fast-image';
import HTML from 'react-native-render-html';
import {decode} from 'html-entities';

const WIDTH = Dimensions.get('window').width;
const PromotionContent = ({item = {}}) => {
  const {i18n} = useTranslation();

  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState({});

  const endDate = formatTypeDate(data?.end_date);
  const startDate = formatTypeDate(data?.start_date);
  React.useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      setLoading(true);
      setData(item);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.promotionContentContainer}>
      <ScrollView
        contentContainerStyle={styles.contentWrapper}
        showsVerticalScrollIndicator={false}>
        {loading ? (
          <ImageLoader width={WIDTH - 40} height={WIDTH / 3} />
        ) : (
          <View style={styles.imageContainer}>
            <FastImage
              style={styles.contentImg}
              source={data?.image ? {uri: data?.image} : null}
            />
            {checkExpiredDate(endDate) ? (
              <View style={styles.badgeContainer}>
                <Text
                  style={[
                    styles.title,
                    {
                      color: '#fff',
                      textAlign: 'center',
                      fontWeight: '500',
                    },
                  ]}>
                  {i18n.t('promotion:out_of_date')}
                </Text>
              </View>
            ) : null}
          </View>
        )}
        {loading ? (
          <TitleLoader
            style={styles.mainTitle}
            width={WIDTH - 40}
            height={200}
          />
        ) : (
          <Text style={styles.mainTitle}>{data?.title}</Text>
        )}
        {loading ? (
          <BodyLoader
            style={styles.textContent}
            width={WIDTH - 40}
            height={300}
          />
        ) : (
          <>
            <Divider />
            <Text style={styles.title}>{i18n.t('promotion:time')}:</Text>
            <Text style={styles.textContent}>
              {i18n.t('promotion:start')}
              {formatDate(startDate)}
            </Text>
            <Text style={styles.textContent}>
              {i18n.t('promotion:end')}
              {formatDate(endDate)}
            </Text>
            <Divider />
            <Text style={styles.title}>{i18n.t('promotion:content')}</Text>
            <HTML
              source={{html: decode(item?.content)}}
              contentWidth={Dimensions.get('window').width - 40}
              style={styles.textContent}
              tagsStyles={{
                p: styles.textContentHTML,
              }}
            />
          </>
        )}
      </ScrollView>
    </View>
  );
};
export default PromotionContent;
