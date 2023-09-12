import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import * as THEME from '../../../themes/theme';

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 2,
    left: 0,
    width: '100%',
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: THEME.colors.lightBlack,
    padding: 10,
    zIndex: 999,
    opacity: 1,
  },
  logoImg: {
    width: 30,
    height: 50,
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
});

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../../assets/logo.png')}
        style={styles.logoImg}
      />
      <Image
        source={require('../../../assets/person.jpeg')}
        style={styles.profileImg}
      />
    </View>
  );
};

export default Header;
