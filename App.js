import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import store from './store';
import MainScreen from './screens/MainScreen';

export default class App extends Component {
  render() {
    const MainNavigator = createAppContainer(
      createStackNavigator({
        Main: { screen: MainScreen }
      })
    );

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
