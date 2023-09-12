import React from 'react';
import {StyleSheet, TextStyle} from 'react-native';
import {Text as RNText} from 'react-native-ui-lib';

type NativeUiTextProps = {
  children?: React.ReactNode;
};

type OwnProps = {
  style?: TextStyle | TextStyle[];
  textType?: 'regular' | 'bold' | 'light';
  textColor?: string;
};

type Props = NativeUiTextProps & OwnProps;

const NativeUiText = ({children, textType, style, textColor}: Props) => {
  let textStyle = {};
  switch (textType) {
    case 'regular':
      textStyle = styles.regular;
      break;
    case 'bold':
      textStyle = styles.bold;
      break;
    case 'light':
      textStyle = styles.light;
      break;
    default:
      textStyle = styles.regular;
      break;
  }

  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;
  return (
    <RNText
      adjustsFontSizeToFit
      numberOfLines={2}
      style={[textStyle, {...passedStyles}, textColor && {color: textColor}]}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  regular: {
    fontWeight: '300',
  },
  bold: {
    fontWeight: '600',
  },
  light: {
    fontWeight: '100',
  },
});

export default NativeUiText;
