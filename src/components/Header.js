import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { textStyles, viewStyles } = styles;
  return (
    <View style={viewStyles}>
      <Text style={textStyles}>Phone Pay</Text>
    </View>
  );
};

const styles = {
  viewStyles: {
    backgroundColor: 'lightblue',
    height: 80,
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center'

  },
  textStyles: {
    fontSize: 20
  }
};

export default Header;
