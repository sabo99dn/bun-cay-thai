import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import {CheckIcon} from '../../svg/membercard';
import styles from './styles';
import CodeChecked from './CodeChecked';
import {useTranslation} from "react-i18next";

import {useSelector, useDispatch} from 'react-redux';
import {actions as memberCardAction} from '../../Store/memberCard/reducer';
import * as memberCardSelectors from '../../Store/memberCard/selector';
import {getUserData} from '../../Store/user/selector';

import HTML from 'react-native-render-html';

const MemberCards = () => {
  const { i18n } = useTranslation();
  const [refreshing, handleRefreshing] = useState(false);
  const [ keyRender, setKeyRender ] = useState(1);
  const dispatch = useDispatch();
  const userInfo = useSelector(state => getUserData(state));
  const memberCardData = useSelector(state =>
    memberCardSelectors.getMemberCardData(state),
  );
  useEffect(() => {
    dispatch(memberCardAction.getMemberCard({id: userInfo.id}));
    return () => {};
  }, []);
  useEffect(() => {
    setKeyRender(keyRender + 1)
    handleRefreshing(false);
  }, [refreshing]);

  const handleRefresh = () => {
    handleRefreshing(true);
  };
  const messageDiscount = text => {
    const numEnd = text.indexOf('<br/>');
    const message = text.slice(0, numEnd);
    return message;
  };
  return (
      <View style={styles.container}>
        <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                  refreshing={refreshing}
                  onRefresh={handleRefresh}
              />
            }
        >
          <CodeChecked key={ "CodeChecked" + keyRender} memberCardData={memberCardData}/>
          <View style={styles.wrapContent}>
            <Text style={styles.notification}>
              {messageDiscount(memberCardData.message)}
            </Text>
            <View style={styles.img}>
              <CheckIcon />
            </View>
            <Text style={styles.notification}>
                {i18n.t("memberCard:description_request_payment")}
            </Text>
          </View>
        </ScrollView>
      </View>
  );
};

export default MemberCards;
