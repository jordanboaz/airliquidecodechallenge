import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Home from './src/views/Home';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
