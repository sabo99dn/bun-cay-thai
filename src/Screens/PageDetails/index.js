import React, {useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import {useDispatch, useSelector} from 'react-redux';
import {getListSelector} from '../../Store/pageDetails/selector';
import {actions} from '../../Store/pageDetails/reducer';
import {LIMIT_DEFAULT, PAGE_DEFAULT} from '../../Configs/contants';

const PageDetails = ({keyPage = '', it18n = null, title = ''}) => {
  const dispatch = useDispatch();
  const listSelector = useSelector(state => getListSelector(state));
  const data = listSelector || [];
  const findPolicy = keyPage => {
    return data.find(item => item.id === keyPage);
  };
  useEffect(() => {
    dispatch(
      actions.getList({
        page: PAGE_DEFAULT,
        limit: LIMIT_DEFAULT,
        // keyPage: keyPage,
      }),
    );
  }, []);
  return (
    <View style={styles.container}>
      <Header it18n={it18n} />
      <Content
        it18n={it18n}
        title={title}
        item={data.length > 0 ? findPolicy(keyPage) : {}}
      />
      <Footer />
    </View>
  );
};
export default PageDetails;
