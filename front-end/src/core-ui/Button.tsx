import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

import Icon from './Icon';
import {
  WHITE,
  CUSTOM_YELLOW,
  CUSTOM_BLACK,
  CUSTOM_RED,
} from '../constants/color';

type Props = {
  newStyleButton?: StyleProp<ViewStyle>;
  newStyleText?: StyleProp<TextStyle>;
  newTextContainer?: StyleProp<ViewStyle>;
  buttonType: 'primary' | 'secondary' | 'google';
  text?: string;
  onPress?: () => void;
};

export default function Button(props: Props) {
  let {
    newStyleButton,
    newStyleText,
    newTextContainer,
    buttonType,
    text,
    onPress,
  } = props;

  const _renderPrimaryButton = () => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.primary, newStyleButton]}
    >
      <View style={styles.container}>
        <View style={[styles.textContainer, newTextContainer]}>
          {text ? (
            <Text style={[styles.primaryTextStyle, newStyleText]}>{text}</Text>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );

  const _renderSecondaryButton = () => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.secondary, newStyleButton]}
    >
      <View style={styles.container}>
        <View style={[styles.textContainer, newTextContainer]}>
          {text ? (
            <Text style={[styles.secondaryTextStyle, newStyleText]}>
              {text}
            </Text>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );

  const _renderGoogleButton = () => (
    <TouchableOpacity onPress={onPress} style={[styles.google, newStyleButton]}>
      <View style={styles.container}>
        <View style={[styles.textContainer, newTextContainer]}>
          <View style={styles.leftIconContainer}>
            <Icon name="google" customStyle={styles.googleLogo} />
          </View>
          <Text style={[styles.googleTextStyle, newStyleText]}>
            Login with Google
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return buttonType === 'primary'
    ? _renderPrimaryButton()
    : buttonType === 'secondary'
    ? _renderSecondaryButton()
    : buttonType === 'google'
    ? _renderGoogleButton()
    : null;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  leftIconContainer: {
    paddingRight: 7,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleLogo: {
    width: 20,
    height: 20,
  },
  primary: {
    height: 40,
    backgroundColor: CUSTOM_YELLOW,
    marginHorizontal: 16,
    borderRadius: 6,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  secondary: {
    height: 40,
    backgroundColor: CUSTOM_BLACK,
    marginHorizontal: 16,
    borderRadius: 6,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  google: {
    height: 40,
    borderWidth: 1,
    borderColor: CUSTOM_RED,
    marginHorizontal: 24,
    borderRadius: 6,
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  primaryTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: CUSTOM_BLACK,
  },
  secondaryTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: WHITE,
  },
  googleTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: CUSTOM_RED,
  },
});
