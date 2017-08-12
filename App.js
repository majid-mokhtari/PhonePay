import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';
import { SideMenu, List, ListItem } from 'react-native-elements';
import AppContainer from './src/container/AppContainer';

export default class App extends Component {
  renderMenu(list){
    return (
      <View style={{ flex: 1, backgroundColor: '#ededed', paddingTop: 60 }}>
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
  }
  render() {
    const items = [
      { name: 'Home' },
      { name: 'Settings' }
    ];
    return (
      <SideMenu menu={this.renderMenu(items)} >
          <AppContainer />
      </SideMenu>
      );
    }
}

AppRegistry.registerComponent('PhonePay', () => App);
