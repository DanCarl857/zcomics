import React from 'react';
import {View, StatusBar, StyleSheet, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import * as ONBOARDING_SCREENS from '../screens/Onboarding';
import * as MAIN_SCREENS from '../screens/Main';
import * as THEME from '../themes/theme';

export type RootStackParams = {
  Splash: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mainScreens = (
  <>
    <Stack.Screen
      name="Splash"
      options={{headerShown: false}}
      component={ONBOARDING_SCREENS.Splash}
    />
    <Stack.Screen
      name="Home"
      options={{headerShown: false}}
      component={MAIN_SCREENS.Home}
    />
  </>
);

const AppNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? THEME.colors.black : THEME.colors.white,
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer independent>
        <Stack.Navigator>{mainScreens}</Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default AppNavigator;
