import React from 'react';
import { Text, View } from 'react-native';

const HeaderSelectBranch = ({ title = '' }) => {
  return (
    <View
      style={{
        height: 65,
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 18,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,

        elevation: 3,
      }}
    >
      <Text style={{ fontSize: 20, lineHeight: 23, fontWeight: 'bold' }}>
        {title.toUpperCase()}
      </Text>
    </View>
  );
};

export default HeaderSelectBranch;
