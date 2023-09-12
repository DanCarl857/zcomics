import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

import * as THEME from '../../../themes/theme';
import {NativeUiText} from '../../../components';
import Tags from './Tags';

const height = Dimensions.get('window').height;
const fullHeight = height - height / 2;

const styles = StyleSheet.create({
  wrapper: {},
  text: {
    textAlign: 'center',
    fontSize: THEME.sizes.h2,
    fontWeight: '600',
    lineHeight: 20,
  },
  container: {
    height: fullHeight,
  },
  slide: {
    backgroundColor: THEME.colors.lightBlack,
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'flex-end',
    paddingBottom: 65,
  },
  box: {
    height: 100,
    width: 350,
    backgroundColor: THEME.colors.white,
    marginBottom: 20,
  },
  tagContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'center',
  },
  activeDot: {
    backgroundColor: THEME.colors.white,
    height: 8,
    width: 25,
    borderRadius: 5,
    marginVertical: 5,
  },
});

const Slide = () => {
  return (
    <View style={styles.slide}>
      <View style={styles.tagContainer}>
        <Tags text="NEW TODAY" />
        <Tags text="ACTION" bgColor={THEME.colors.grey} />
        <Tags text="ACTION" bgColor={THEME.colors.grey} />
      </View>
      <View style={styles.box} />
      <NativeUiText textColor={THEME.colors.textGrey} style={styles.text}>
        This is the comic synopsis which is clickable to open more details about
        it. Let's add some new t...
      </NativeUiText>
    </View>
  );
};

const ActiveDot = () => {
  return <View style={styles.activeDot} />;
};

const Banner = () => {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        dotColor={THEME.colors.grey}
        activeDot={ActiveDot()}
        autoplayTimeout={5}
        showsButtons={false}
        height={fullHeight}
        style={styles.wrapper}>
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </Swiper>
    </View>
  );
};

export default Banner;
