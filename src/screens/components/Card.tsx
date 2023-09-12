import React from 'react';
import {View, StyleSheet} from 'react-native';

import {NativeUiText} from '../../components';
import * as THEME from '../../themes/theme';
import Tags from './Tags';

type CardProps = {
  height: number;
  width: number;
  showProgress?: boolean;
  showTag?: boolean;
  tagText?: string;
  bgColor?: string;
  cardLabel: string;
  subCardLabel?: string;
};

type Props = CardProps;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    backgroundColor: THEME.colors.grey,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 5,
    marginVertical: 10,
    marginRight: 10,
  },
  progressBar: {
    width: '94%',
    backgroundColor: THEME.colors.white,
    height: 5,
    borderRadius: 10,
  },
  cardContainer: {
    marginVertical: 10,
    marginRight: 12,
  },
  tagContainer: {
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: 8,
  },
});

const Card = ({
  height,
  width,
  bgColor,
  cardLabel,
  subCardLabel,
  tagText,
  showProgress = true,
  showTag = false,
}: Props) => {
  return (
    <View style={[styles.cardContainer, {width: width}]}>
      <View
        style={[
          styles.card,
          {
            height: height,
            width: width,
            backgroundColor: bgColor ? bgColor : THEME.colors.grey,
          },
        ]}>
        {showProgress && <View style={styles.progressBar} />}
        {showTag && (
          <View style={styles.tagContainer}>
            <Tags text={tagText || ''} />
          </View>
        )}
      </View>
      <NativeUiText textColor={THEME.colors.textGrey}>{cardLabel}</NativeUiText>
      <NativeUiText textColor={THEME.colors.textGrey}>
        {subCardLabel}
      </NativeUiText>
    </View>
  );
};

export default Card;
