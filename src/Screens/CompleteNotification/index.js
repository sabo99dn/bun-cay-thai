import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Header} from '../../Components';
import {ScrollView} from 'react-native-gesture-handler';

const Complete = () => {
  const [input1Active, setInput1Active] = React.useState(false);
  const [inputText, setInputText] = React.useState('');
  return (
    <View style={styles.wrapper}>
      <Header
        isDefault
        containerStyle={{
          paddingVertical: 10,
        }}
        leftStyle={{
          fontWeight: 'bold',
        }}
        middleComponent={
          <Text
            style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            HOÀN TẤT
          </Text>
        }
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Text style={styles.txtHeader}>
          Chúng tôi đã gửi một email vào địa chỉ.
        </Text>
        <Text style={styles.emailAddress}>tencuaban@gmail.com</Text>
        <Text style={styles.txtHeader}>
          Kiểm tra hộp thư đến hoặc hộp thư rác để nhận mật khẩu tạm thời.
        </Text>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.txtLogin}>Đăng nhập</Text>
        </TouchableOpacity>

        <Text style={styles.notSend}>Không nhận được email ?</Text>
        <Text style={styles.notifi}>
          Đợi thêm 1 phút và kiểm tra lại hộp thư rác của bạn. Nếu vẫn không
          nhận được email thì có lẻ bạn cần hỗ trợ thêm từ nhân viên của chúng
          tôi.
        </Text>
        <Text style={styles.contact}>Hỗ trợ gọi 1900.0327</Text>
      </View>
    </View>
  );
};

export default Complete;
