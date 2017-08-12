import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

const Content = () => {
  const { textStyles, viewStyles } = styles;
  return (
    <View style={viewStyles}>
      <Text style={textStyles}>Some Content here</Text>
    </View>
  );
};

const styles = {
  viewStyles: {
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
  textStyles: {

  }
};

export default Content;
