import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {NativeUiText} from '../../../components';

import * as THEME from '../../../themes/theme';

const styles = StyleSheet.create({
  container: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: THEME.colors.textGrey,
    fontWeight: '500',
    fontSize: THEME.sizes.font,
    marginTop: 5,
  },
  iconStyle: {
    width: 25,
    height: 25,
    borderRadius: 15,
  },
  iconContainer: {
    backgroundColor: THEME.colors.darkGrey,
    borderRadius: 20,
    padding: 5,
  },
});

const SeeAll = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require('../../../assets/icons/arrow-right.png')}
          style={styles.iconStyle}
        />
      </View>
      <NativeUiText style={styles.text}>See All</NativeUiText>
    </TouchableOpacity>
  );
};

export default SeeAll;
