import React from 'react';
import {
  StyleSheet,
  StyleProp,
  ActivityIndicator,
  ImageStyle,
} from 'react-native';
import { Image as Picture } from 'react-native-elements';

type Props = {
  newAvatarStyle?: StyleProp<ImageStyle>;
  src?: string | null;
};

export default function Avatar(props: Props) {
  let { src, newAvatarStyle } = props;

  return src && src !== null ? (
    <Picture
      source={{ uri: src }}
      style={[styles.avatarDefault, newAvatarStyle]}
      PlaceholderContent={<ActivityIndicator />}
    />
  ) : (
    <Picture
      source={require('../../assets/images/avatarDefault.png')}
      style={[styles.avatarDefault, newAvatarStyle]}
      PlaceholderContent={<ActivityIndicator />}
    />
  );
}

const styles = StyleSheet.create({
  avatarDefault: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
});
