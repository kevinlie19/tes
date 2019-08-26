import React, { ReactNode } from 'react';

import {
 TextProps,
 StyleSheet,
 Text as TextComponent,
 TouchableOpacity,
 GestureResponderEvent,
} from 'react-native';

//import { PRIMARY_COLOR, WHITE, CUSTOM_BLACK, GREY } from '../constants/color';

type Props = TextProps & {
 children: ReactNode;
 definedStyle?:
 | 'headTitle'
 | 'heading'
 | 'subheading'
 | 'regularHome'
 | 'regularAuth'
 | 'small';
 weight?: 'regular' | 'bold' | 'light';
 size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
 color?: string;
 onPress?: (event: GestureResponderEvent) => void;
};

const FONT_SIZE = {
 xsmall: 8,
 small: 10,
 medium: 14,
 large: 18,
 xlarge: 24,
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
  size,
  weight,
  ...other
 } = props;

 let fontWeight = FONT_WEIGHT[weight || 'regular'];
 let fontSize = FONT_SIZE[size || 'small'];
 let textColor = color || FONT_COLOR;

 let textStyle = { fontWeight, fontSize, color: textColor };

 let mixedStyles = [
  textStyle,
  definedStyle && styles[definedStyle],
  style && style,
 ];

 return onPress ? (
  <TouchableOpacity onPress={onPress}>
   <TextComponent style={mixedStyles} {...other}>
    {children}
   </TextComponent>
  </TouchableOpacity>
 ) : (
   <TextComponent style={mixedStyles} {...other}>
    {children}
   </TextComponent>
  );
}

const styles = StyleSheet.create({
 headTitle: {
  fontSize: 24,
  color: ,
  fontWeight: 'bold',
 },
 heading: {
  fontSize: 18,
  color: ,
  fontWeight: 'bold',
 },
 subheading: {
  fontSize: 14,
  color: ,
  fontWeight: 'regular',
 },
 small: {
  fontSize: 10,
  color: ,
  fontWeight: 'regular',
 },
});

//yellow: ffb900
//brown:d3793d
//green:3db67a
//grey:818181
//lightgrey:cbcbcb
//SlightGrey:eaeaea
//red:dd3945
//white:ffffff
//black:323232