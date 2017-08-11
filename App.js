import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';
import { SideMenu, List, ListItem } from 'react-native-elements';
//import SideMenu from 'react-native-side-menu';
import Header from './src/components/Header';
import Content from './src/components/Content';
//import Menu from './src/components/Menu';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    //this.toggleSideMenu = this.toggleSideMenu.bind(this)
  }
  render() {
    const list = [
      { name: 'Majid Mokhtari' },
      { name: 'Ziyad Parekh' }
    ];
    //const menu = <Menu navigator={this.props.navigator} />;
    const MenuComponent = (
      <View style={{ flex: 1, backgroundColor: '#ededed', paddingTop: 50 }}>
        <List containerStyle={{ marginBottom: 20 }}>
        {
          list.map((l, i) => (
            <ListItem
              roundAvatar
              onPress={() => console.log('Pressed')}
              //avatar={l.avatar_url}
              key={i}
              title={l.name}
              subtitle={l.subtitle}
            />
          ))
        }
        </List>
      </View>
    );
    const { viewStyles } = styles;
    return (
        <SideMenu menu={MenuComponent}>
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
