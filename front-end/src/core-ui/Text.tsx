import React from 'react';
import {
  TextProps,
  StyleSheet,
  StyleProp,
  TextStyle,
  Text as TextComponent,
  TouchableOpacity,
} from 'react-native';

import { BLACK, WHITE, GREY, DARK_GREY } from '../constants/color';
import {
  XXSMALL,
  XSMALL,
  SMALL,
  MEDIUM,
  MLARGE,
  LARGE,
  XLARGE,
} from '../constants/fontSize';

type Props = TextProps & {
  newTextStyle?: StyleProp<TextStyle>;
  type:
    | 'headerTitle'
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'mlarge'
    | 'large'
    | 'xlarge';
  text: string;
  onPress?: () => void;
};

export default function Text(props: Props) {
  let { newTextStyle, type, text, onPress, ...other } = props;

  return onPress ? (
    <TouchableOpacity onPress={onPress}>
      <TextComponent style={[styles[type], newTextStyle]} {...other}>
        {text}
      </TextComponent>
    </TouchableOpacity>
  ) : (
    <TextComponent style={[styles[type], newTextStyle]} {...other}>
      {text}
    </TextComponent>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    fontSize: SMALL,
    color: WHITE,
    fontWeight: '400' || 'normal',
  },
  headerTitle: {
    fontSize: LARGE,
    color: WHITE,
    fontWeight: 'bold',
  },
  xxsmall: {
    fontSize: XXSMALL,
    color: GREY,
    fontWeight: '400' || 'normal',
  },
  xsmall: {
    fontSize: XSMALL,
    color: DARK_GREY,
    fontWeight: '400' || 'normal',
  },
  small: {
    fontSize: SMALL,
    color: BLACK,
    fontWeight: '600',
  },
  medium: {
    fontSize: MEDIUM,
    color: BLACK,
    fontWeight: '400' || 'normal',
  },
  mlarge: {
    fontSize: MLARGE,
    color: BLACK,
    fontWeight: '600',
  },
  large: {
    fontSize: LARGE,
    color: BLACK,
    fontWeight: '600',
  },
  xlarge: {
    fontSize: XLARGE,
    color: BLACK,
    fontWeight: '600',
  },
});
