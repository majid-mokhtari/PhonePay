import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';
import SideMenu from 'react-native-side-menu';
import Header from './src/components/Header';
import Content from './src/components/Content';
import Menu from './src/components/Menu';

export default class App extends Component {
  render() {
    const menu = <Menu navigator={this.props.navigator} />;
    const { viewStyles } = styles;
    return (
        <SideMenu menu={menu}>
          <View style={viewStyles}>
            <Header />
            <Content />
          </View>
        </SideMenu>
      );
    }
}


const styles = {
  viewStyles: {
    backgroundColor: 'lightgrey'
  }
};

AppRegistry.registerComponent('PhonePay', () => App);
