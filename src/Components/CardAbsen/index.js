import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { screenSize } from '../../Styles/globalStyles';

const CardAbsen = ({ setIsCheck, isCheck, color, title }) => {
  return (
    <TouchableOpacity
      disabled={isCheck}
      onPress={setIsCheck}
      style={{
        backgroundColor: isCheck ? '#eaeaea' : '#FFF',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 10,
        width: screenSize.width * 0.42,
        shadowColor: '#000',
        shadowOffset: {
          width: 12,
          height: 10,
        },
        shadowRadius: 22,
        elevation: 5,
      }}>
      <Icon name="user-check" size={50} style={{ color }} />
      <Text style={{ marginTop: 5, fontWeight: '900' }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CardAbsen;
