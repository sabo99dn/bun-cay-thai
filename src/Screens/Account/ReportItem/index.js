import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {Delete, EditIcon} from '../../../svg/common';
import styles from './styles';
import {putDeleteReport} from '../../../Store/reports/service';
import {showMessage} from 'react-native-flash-message';
import {useTranslation} from 'react-i18next';
import {formatDateTimeSeconds, formatTypeDate,} from '../../../Utils/datetime';
import {AnalyticsAction,} from '../../../Utils/analytics';
import RoutesConfig from '../../../Configs/routes';

const ReportItem = ({item, onDeleteSuccess = () => {}}) => {
  const navigation = useNavigation();
  const {i18n} = useTranslation();
  const onDeleteReports = id => {
    Alert.alert(
      i18n.t('reports:warning'),
      i18n.t('reports:delete_report_warning'),
      [
        {
          text: i18n.t('reports:approve'),
          onPress: async () => {
            try {
              await putDeleteReport({id: id});
              onDeleteSuccess();
            } catch (err) {
              showMessage({
                message: i18n.t('reports:failed'),
                description: i18n.t('reports:delete_report_failed'),
                type: 'danger',
              });
            }
          },
        },
        {
          text: i18n.t('reports:cancel'),
        },
      ],
    );
  };

  return (
    <View style={styles.itemContainer}>
      {item?.image ? (
        <Image
          style={styles.reportImg}
          source={{
            uri: item?.image,
          }}
        />
      ) : null}

      <View
        style={[
          styles.messageContainer,
          {
            borderTopLeftRadius: item?.image ? 0 : 8,
            borderTopRightRadius: item?.image ? 0 : 8,
          },
        ]}>
        <Text style={styles.messageText}>{item?.message}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.groupButton}>
          <TouchableOpacity
            onPress={() => {
              AnalyticsAction(
                () =>
                  navigation.navigate(
                    RoutesConfig.MainStack.screens.AddReport.name,
                    {item: item, isEdit: true},
                  ),
                {
                  routes: RoutesConfig.MainStack.screens,
                  action: 'navigation',
                },
              );
            }}>
            <EditIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDeleteReports(item?.id)}>
            <Delete />
          </TouchableOpacity>
        </View>
        <View style={styles.date}>
          <Text style={styles.dateText}>
            {`${formatDateTimeSeconds(
              formatTypeDate(item?.created_date),
            )}`.replace(' ', ' - ')}
          </Text>
        </View>
      </View>
      <View style={styles.replyContainer}>
        <View
          style={item?.reply ? styles.replyWrapperActive : styles.replyWrapper}>
          <Text style={item?.reply ? styles.replyTextActive : styles.replyText}>
            {item?.reply || i18n.t('reports:report_was_sent')}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ReportItem;
