import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NativeUiText} from '../../../components';

import * as THEME from '../../../themes/theme';

type SectionHeaderProps = {
  title: React.ReactNode;
};

type Props = SectionHeaderProps;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
  },
  text: {
    color: THEME.colors.white,
    fontWeight: '500',
    fontSize: THEME.sizes.h3,
  },
});

const SectionHeader = ({title}: Props) => {
  return (
    <View style={styles.container}>
      <NativeUiText style={styles.text}>{title}</NativeUiText>
    </View>
  );
};

export default SectionHeader;
