import 'react-native-gesture-handler';
import React from 'react';
import FlashMessage from 'react-native-flash-message';

import NetworkConnectionProvider from './src/device/NetworkConnectionProvider';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <NetworkConnectionProvider>
      <AppNavigator />
      <FlashMessage position="top" />
    </NetworkConnectionProvider>
  );
};

export default App;
