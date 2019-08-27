import React from 'react';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';

import { Image as Picture } from 'react-native-elements';

type Props = {
 newImageStyle?: StyleProp<ViewStyle>;
 src?: string;
 type?: 'event' | 'banner' | 'square' | 'xLarge';
 resizeMode?: 'center' | 'contain' | 'stretch' | 'cover' | 'repeat';
};

const IMAGE = {
 placeholderImage: require('../../assets/placeholder.jpg'),
};

export default function Image(props: Props) {
 let { src, type, resizeMode, newImageStyle, ...other } = props;

 return !src ? (
  <Picture
   source={IMAGE['placeholderImage']}
   style={styles[type || 'square']}
   containerStyle={newImageStyle}
   resizeMode={resizeMode ? resizeMode : 'contain'}
   {...other}
  />
 ) : (
   <Picture
    source={{ uri: src }}
    style={styles[type || 'square']}
    containerStyle={newImageStyle}
    resizeMode={resizeMode ? resizeMode : 'contain'}
    {...other}
   />
  );
}

const styles = StyleSheet.create({
 square: {
  width: 54,
  height: 54,
  alignSelf: 'center',
  borderRadius: 4,
 },
 banner: {
  width: 328,
  height: 100,
 },
 event: {
  width: 120,
  height: 56,
  borderRadius: 4,
 },
 xLarge: {
  width: 360,
  height: 240,
 },

});
