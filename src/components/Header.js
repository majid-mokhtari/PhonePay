import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  const { textStyles, viewStyles, iconStyle } = styles;
  return (
    <View style={viewStyles}>
      
      <TouchableWithoutFeedback onPress={() => null}>
        <Icon 
          name="bars"
          color="white"
          size={25}
          style={iconStyle}
        />
        
      </TouchableWithoutFeedback>
      <Text style={textStyles}>Phone Pay</Text>
    </View>
  );
};

const styles = {
  viewStyles: {
    backgroundColor: 'lightblue',
    height: 80,
    paddingTop: 10,

  },
  textStyles: {
    fontSize: 20,
    alignItems: 'center',
    
  },
  iconStyle: {
    padding: 20,
    fontSize: 30
  }
};

export default Header;
