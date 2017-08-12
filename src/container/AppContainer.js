import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './../components/Header';
import Content from './../components/Content';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleSideMenu = this.toggleSideMenu.bind(this);
  }
  toggleSideMenu () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  onSideMenuChange (isOpen) {
    this.setState({
      isOpen: isOpen
    })
  }
  render() {
    const { viewStyles } = styles;
    return (
        <View style={viewStyles}>
          <Header />
          <Content />
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
