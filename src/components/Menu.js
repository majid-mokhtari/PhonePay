import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Menu extends Component {
  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>

        <Text
          onPress={() => this.props.onItemSelected('first')}
          style={styles.item}>
          First
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('second')}
          style={styles.item}>
          Second
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('third')}
          style={styles.item}>
          Third
        </Text>
      </ScrollView>
    );
  }
};
