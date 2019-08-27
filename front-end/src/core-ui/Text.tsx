import React, { ReactNode } from 'react';

import {
  TextProps,
  StyleSheet,
  Text as TextComponent,
} from 'react-native';

import { CUSTOM_RED, CUSTOM_BROWN, CUSTOM_YELLOW, CUSTOM_GREEN, BLACK, WHITE, GREY, DARK_GREY, LIGHT_GREY } from '../constants/color';
import { XXSMALL, XSMALL, SMALL, MEDIUM, MLARGE, LARGE, XLARGE } from '../constants/fontSize';

type Props = TextProps & {
  children?: ReactNode;
  definedStyle?:
  | 'headTitle'
  | 'heading'
  | 'title'
  | 'status';
  weight?: 'regular' | 'bold' | 'light';
  color?: string;
  text: string;
  onPress?: () => void;
};


const FONT_WEIGHT: any = {
  regular: 'normal',
  bold: 'bold',
};

const FONT_COLOR = '#323232';

export default function Text(props: Props) {
  let {
    children,
    definedStyle,
    style,
    onPress,
    color,
    weight,
    text,
    ...other
  } = props;

  let fontWeight = FONT_WEIGHT[weight || 'regular'];
  let textColor = color || FONT_COLOR;

  let textStyle = { fontWeight, color: textColor };

  return (
    <TextComponent>{text}</TextComponent>
  )

}

const styles = StyleSheet.create({
  headTitle: {
    fontSize: LARGE,
    color: WHITE,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: LARGE,
    color: BLACK,
    fontWeight: 'bold',
  },
  title: {
    fontSize: MEDIUM,
    color: BLACK,
    fontWeight: 'bold',
  },
  status: {
    fontSize: XSMALL,
    color: GREY || LIGHT_GREY || CUSTOM_RED || CUSTOM_GREEN,
    fontWeight: 'bold',
  },

});