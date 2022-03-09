import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';

import store from './src/Redux/Store';
import AppNavigation from './src/Navigations/Route';

function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
