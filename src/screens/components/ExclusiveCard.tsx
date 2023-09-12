import React from 'react';
import {View, StyleSheet} from 'react-native';

import {NativeUiText} from '../../components';
import * as THEME from '../../themes/theme';
import Tags from './Tags';
import LinearGradient from 'react-native-linear-gradient';

type ExclusiveCardProps = {
  showTag?: boolean;
  tagText?: string;
  cardLabel: string;
};

type Props = ExclusiveCardProps;

const styles = StyleSheet.create({
  card: {
    width: 255,
    height: 357,
    borderRadius: 5,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: 12,
    paddingLeft: 12,
    marginVertical: 20,
    marginRight: 15,
  },
  tagContainer: {
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 10,
  },
  text: {
    textAlign: 'left',
    fontWeight: '600',
    fontSize: THEME.sizes.base,
    textTransform: 'uppercase',
  },
});

const ExclusiveCard = ({cardLabel, tagText, showTag = true}: Props) => {
  return (
    <LinearGradient
      colors={[
        THEME.colors.grey,
        THEME.colors.darkGrey,
        THEME.colors.darkerGrey,
      ]}
      style={styles.card}>
      <NativeUiText textColor={THEME.colors.white} style={styles.text}>
        {cardLabel}
      </NativeUiText>
      {showTag && (
        <View style={styles.tagContainer}>
          <Tags text={tagText || ''} />
        </View>
      )}
    </LinearGradient>
  );
};

export default ExclusiveCard;
