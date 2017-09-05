import React, { Component } from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SideMenu, List, ListItem } from 'react-native-elements';
import Header from './../components/Header';
import Content from './../components/Content';
import * as actions from './../actions/menu';
import { Alert } from 'react-native';
// Alert.alert(
    //   'Alert Title',
    //   this.props
    // )

class AppContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
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
    const { isOpen } = this.props.menu;
    const { viewStyles } = styles;
    return (
      <SideMenu 
        menu={ this.renderMenu(items) }
        isOpen={ isOpen } >
        <View style={viewStyles}>
          <Header 
            {...this.props}
          />
          <Content  />
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

function mapStateToProps(state) {
    const {menu} = state;
      return {
      menu,
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(actions, dispatch)
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
