import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import Header from './../components/Header';
import Content from './../components/Content';

class AppContainer extends Component {

  constructor(props) {
    super(props);
  }
  
  onToggleSideMenu(){
    this.props.onToggleSideMenu();
  }

  render() {
    const { viewStyles } = styles;
    return (
        <View style={viewStyles}>
          <Header 
            {...this.props}
            onToggleSideMenu={this.onToggleSideMenu.bind(this)}/>
          <Content  />
        </View>
      );
    }
}

const styles = {
  viewStyles: {
    backgroundColor: 'lightgrey'
  }
};

export default AppContainer;
