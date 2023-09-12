import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    paddingHorizontal: 10,
    opacity: 1,
  },
  logoImg: {
    width: 40,
    height: 60,
  },
  profileImg: {
    width: 50,
    height: 50,
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
