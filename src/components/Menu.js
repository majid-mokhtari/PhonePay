import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';

export default class Menu extends Component {
  render() {
    const { menu, item } = styles;
    return (
      <ScrollView scrollsToTop={false} style={menu}>
        <Text
          onPress={() => this.props.onItemSelected('first')}
          style={item}
        >
          First
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('second')}
          style={item}
        >
          Second
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('third')}
          style={item}
        >
          Third
        </Text>
      </ScrollView>
    );
  }
}

const styles = {
  menuButton: {
      marginTop: 20,
      backgroundColor: '#777'
  },
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    padding: 20,
  },
  item: {
    fontSize: 16,
    fontWeight: '300',
    paddingTop: 20
  },
  page: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#777'
  },
  pageContent: {
      flex: 1,
      alignItems: 'center',
      top: 200,
  }
};
