import React from 'react';
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import { Image as Picture } from 'react-native-elements';

type Props = {
  newAvatarStyle?: StyleProp<ViewStyle>;
  src?: string | null;
};

export default function Avatar(props: Props) {
  let { src, newAvatarStyle } = props;

  return src ? (
    <Picture
      source={{ uri: src }}
      style={styles.avatarDefault}
      PlaceholderContent={<ActivityIndicator />}
      containerStyle={newAvatarStyle}
    />
  ) : (
    <Picture
      source={require('../../assets/images/avatarDefault.png')}
      style={styles.avatarDefault}
      PlaceholderContent={<ActivityIndicator />}
      containerStyle={newAvatarStyle}
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
