import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import * as THEME from '../../../themes/theme';

type Props = {
  navigation: any;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Splash = ({navigation}: Props) => {
  React.useEffect(() => {
    setTimeout(async () => {
      try {
        navigation.navigate('Home');
      } catch (e) {
        console.log(e);
      }
    }, 3000);
  });

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/bg.png')}
        style={styles.imageStyle}
      />
    </View>
  );
};

export default Splash;
