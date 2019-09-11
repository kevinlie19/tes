import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { Text, Button, TextInput } from '../core-ui';
import { WHITE, GREY } from '../constants/color';

type Props = {
  onChangeTextEmail?: () => void;
  onChangeTextPassword?: () => void;
  onPress?: () => void;
};

export default function SignInCard(props: Props) {
  let { onChangeTextEmail, onChangeTextPassword, onPress } = props;

  return (
    <View style={styles.cardContainer}>
      <Text type="large" text="Sign In" newTextStyle={styles.title} />
      <TextInput
        placeholder="Email"
        onChangeText={onChangeTextEmail}
        newContainerStyle={styles.textinputContainer}
      />
      <TextInput
        placeholder="Password"
        onChangeText={onChangeTextPassword}
        newContainerStyle={styles.textinputContainer}
      />
      <TouchableOpacity style={styles.forgetPasswordContainer}>
        <Text
          text="Forget password"
          type="xsmall"
          newTextStyle={styles.forgetPasswordText}
        />
      </TouchableOpacity>
      <Button
        buttonType="secondary"
        text="SIGN IN"
        newStyleText={styles.textButton}
        newStyleButton={styles.buttonContainer}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: WHITE,
    height: 334,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    paddingVertical: 40,
    fontWeight: 'normal',
  },
  textinputContainer: {
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  forgetPasswordContainer: {
    alignSelf: 'flex-end',
    paddingRight: 24,
    marginTop: -10,
  },
  forgetPasswordText: {
    color: GREY,
  },
  textButton: {
    fontWeight: 'normal',
  },
  buttonContainer: {
    marginTop: 40,
    marginBottom: 58,
  },
});
