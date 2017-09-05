import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import AppContainer from './src/container/AppContainer';
import { configureStore } from './src/store/store';
import { createStore } from 'redux';

const store = configureStore();
    
export default App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

AppRegistry.registerComponent('App', () => App);
