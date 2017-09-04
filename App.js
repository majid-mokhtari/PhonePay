import React, { Component } from 'react';
import { View, AppRegistry, Alert } from 'react-native';
import { SideMenu, List, ListItem } from 'react-native-elements';
import AppContainer from './src/container/AppContainer';

export default class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  
  onToggleSideMenu () {
    this.setState({
      isOpen: !this.state.isOpen
    })
    // Alert.alert(
    //   'Alert Title',
    //   "alertMessage",
    // )
  }

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
      <SideMenu 
          menu={ this.renderMenu(items) }
          isOpen={ this.state.isOpen } 
          onChange={ (isOpen) => this.setState({ isOpen: isOpen })} >
          <AppContainer 
            {...this.props}
            onToggleSideMenu={this.onToggleSideMenu.bind(this)}
             />
      </SideMenu>
      );
    }
}

AppRegistry.registerComponent('PhonePay', () => App);
