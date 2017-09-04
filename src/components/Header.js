import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  onToggleSideMenu(){
    this.props.onToggleSideMenu();
  }

  render (){
    const { titleStyle, viewStyles, searchStyle, barsStyle } = styles;
    return (
      <View style={viewStyles}>
        <TouchableWithoutFeedback 
          style={barsStyle} 
          onPress={ () => this.onToggleSideMenu() }>
          <Icon 
            name="bars"
            color="white"
            size={25}
          />
        </TouchableWithoutFeedback>
        <Text style={titleStyle}>
           Phone Pay</Text>
        <TouchableWithoutFeedback 
          style={searchStyle} 
          onPress={ () => this.onToggleSideMenu() }>
          <Icon 
            name="search"
            color="white"
            size={25}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  };
  
};

Header.propTypes = {
  toggleSideMenu: React.PropTypes.func,
};

const styles = {
  viewStyles: {
    backgroundColor: 'orange',
    padding: 20,
    paddingTop: 30,
    flexDirection: 'row'
  },
  titleStyle: {
    fontSize: 20,
    paddingLeft: 85,
    paddingRight: 95,
    fontFamily: 'Arial'
  },
  searchStyle: {
    padding: 20,
    fontSize: 30
  },
  barsStyle: {

  }
};

export default Header;
