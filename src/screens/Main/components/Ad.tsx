import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NativeUiText} from '../../../components';

import * as THEME from '../../../themes/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.colors.purple,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: '100%',
  },
  text: {
    color: THEME.colors.white,
    fontWeight: '500',
    fontSize: THEME.sizes.base,
  },
});

const Ad = () => {
  return (
    <View style={styles.container}>
      <NativeUiText style={styles.text}>Ad</NativeUiText>
    </View>
  );
};

export default Ad;
