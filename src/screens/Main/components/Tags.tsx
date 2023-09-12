import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NativeUiText} from '../../../components';

import * as THEME from '../../../themes/theme';

type SectionHeaderProps = {
  text: string;
};

type Props = SectionHeaderProps;

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.colors.red,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
  },
  text: {
    color: THEME.colors.white,
    fontSize: THEME.sizes.small,
  },
});

const Tags = ({text}: Props) => {
  return (
    <View style={styles.container}>
      <NativeUiText style={styles.text}>{text}</NativeUiText>
    </View>
  );
};

export default Tags;
