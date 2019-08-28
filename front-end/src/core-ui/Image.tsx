import React from 'react';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';

import { Image as Picture } from 'react-native-elements';

type Props = {
  newImageStyle?: StyleProp<ViewStyle>;
  src?: string;
  type?: 'event' | 'banner' | 'square' | 'xLarge';
  resizeMode?: 'center' | 'contain' | 'stretch' | 'cover' | 'repeat';
};

export default function Image(props: Props) {
  let { src, type, resizeMode, newImageStyle, ...other } = props;

  return !src ? (
    <Picture
      source={require('../../assets/images/placeholder.jpg')}
      style={styles[type || 'square']}
      containerStyle={newImageStyle}
      resizeMode={resizeMode}
      {...other}
    />
  ) : (
    <Picture
      source={{ uri: src }}
      style={styles[type || 'square']}
      containerStyle={newImageStyle}
      resizeMode={resizeMode}
      {...other}
    />
  );
}

const styles = StyleSheet.create({
  square: {
    width: 54,
    height: 54,
    borderRadius: 4,
    alignSelf: 'center',
  },
  event: {
    width: 120,
    height: 56,
    borderRadius: 4,
  },
  banner: {
    width: 328,
    height: 100,
  },
  xLarge: {
    width: 360,
    height: 240,
  },
});
