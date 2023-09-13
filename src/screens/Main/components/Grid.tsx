import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {NativeUiText} from '../../../components';

import * as THEME from '../../../themes/theme';

const width = Dimensions.get('window').width;

type GridProps = {
  title: string;
};

type Props = GridProps;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: width - 20,
  },
  heading: {
    fontSize: 14,
    fontWeight: '500',
    color: THEME.colors.textGrey,
    textTransform: 'uppercase',
  },
  box: {
    width: 80,
    height: 110,
    backgroundColor: THEME.colors.lightGrey,
    borderRadius: 5,
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  textContainer: {
    flex: 2.5,
  },
  numberContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: THEME.colors.white,
    fontWeight: '500',
    marginBottom: 10,
    textAlign: 'left',
  },
  views: {
    color: THEME.colors.grey,
    fontWeight: '500',
  },
  num: {
    fontSize: 18,
    fontWeight: '600',
    color: THEME.colors.white,
  },
  active: {
    backgroundColor: THEME.colors.red,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 5,
  },
});

const Grid = ({title}: Props) => {
  return (
    <View style={styles.container}>
      <NativeUiText style={styles.heading}>{title}</NativeUiText>
      <View style={styles.column}>
        <View style={styles.box} />
        <View style={styles.numberContainer}>
          <View style={styles.active}>
            <NativeUiText style={styles.num}>1</NativeUiText>
          </View>
        </View>
        <View style={styles.textContainer}>
          <NativeUiText style={styles.title}>
            The Guy Upstairs and a Longer title and longer title
          </NativeUiText>
          <NativeUiText style={styles.views}>680 views</NativeUiText>
        </View>
      </View>
      <View style={styles.column}>
        <View style={styles.box} />
        <View style={styles.numberContainer}>
          <NativeUiText style={styles.num}>2</NativeUiText>
        </View>
        <View style={styles.textContainer}>
          <NativeUiText style={styles.title}>A Reverie with Nana</NativeUiText>
          <NativeUiText style={styles.views}>680 views</NativeUiText>
        </View>
      </View>
      <View style={styles.column}>
        <View style={styles.box} />
        <View style={styles.numberContainer}>
          <NativeUiText style={styles.num}>3</NativeUiText>
        </View>
        <View style={styles.textContainer}>
          <NativeUiText style={styles.title}>Love at First Fight</NativeUiText>
          <NativeUiText style={styles.views}>680 views</NativeUiText>
        </View>
      </View>
    </View>
  );
};

export default Grid;
