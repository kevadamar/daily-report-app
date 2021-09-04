import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { screenSize } from '../../Styles/globalStyles';

const InputReuse = ({ valueState, onChangeText, style = {}, ...props }) => {
  const [borderColor, setBorderColor] = useState('#303F9F');

  return (
    <View style={{ position: 'relative' }}>
      <TextInput
        style={{ ...style, ...styles.defaultInput, borderColor }}
        onFocus={() => setBorderColor('#3F51B5')}
        onBlur={() => setBorderColor('#303F9F')}
        placeholderTextColor="rgba(0,0,0,.5)"
        value={valueState}
        onChangeText={text => onChangeText(text)}
        {...props}
      />
    </View>
  );
};

export default InputReuse;

const styles = StyleSheet.create({
  defaultInput: {
    width: screenSize.width * 0.8,
    height: 40,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    color: '#000',
  },
});
