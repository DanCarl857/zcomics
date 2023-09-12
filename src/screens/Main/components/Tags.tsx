import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NativeUiText} from '../../../components';

import * as THEME from '../../../themes/theme';

type SectionHeaderProps = {
  text: string;
  bgColor?: string;
};

type Props = SectionHeaderProps;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 3,
    marginRight: 8,
  },
  text: {
    color: THEME.colors.white,
    fontSize: THEME.sizes.small,
    fontWeight: '500',
  },
});

const Tags = ({text, bgColor}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: bgColor ? bgColor : THEME.colors.red},
      ]}>
      <NativeUiText style={styles.text}>{text}</NativeUiText>
    </View>
  );
};

export default Tags;
