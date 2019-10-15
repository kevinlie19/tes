import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text, Button, TextInput } from '../core-ui';
import { WHITE } from '../constants/color';

type Props = {
  onChangeTextFullname: (text: string) => void;
  onChangeTextEmail: (text: string) => void;
  onChangeTextPassword: (text: string) => void;
  onChangeTextRepeatPassword: (text: string) => void;
  onPress: () => void;
};

export default function SignUpCard(props: Props) {
  let {
    onChangeTextFullname,
    onChangeTextEmail,
    onChangeTextPassword,
    onChangeTextRepeatPassword,
    onPress,
  } = props;

  return (
    <View style={styles.cardContainer}>
      <Text type="large" text="Sign Up" newTextStyle={styles.title} />
      <TextInput
        placeholder="Fullname"
        onChangeText={onChangeTextFullname}
        newContainerStyle={styles.textinputContainer}
        autoFocus={true}
        autoCapitalize={'words'}
      />
      <TextInput
        placeholder="Email"
        onChangeText={onChangeTextEmail}
        newContainerStyle={styles.textinputContainer}
        autoCapitalize={'none'}
      />
      <TextInput
        placeholder="Password"
        onChangeText={onChangeTextPassword}
        newContainerStyle={styles.textinputContainer}
        autoCapitalize={'none'}
      />
      <TextInput
        placeholder="Repeat Password"
        onChangeText={onChangeTextRepeatPassword}
        newContainerStyle={styles.textinputContainer}
        autoCapitalize={'none'}
      />
      <Button
        buttonType="secondary"
        text="SIGN UP"
        newStyleText={styles.textButton}
        newStyleButton={styles.buttonSignUp}
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
  textButton: {
    fontWeight: 'normal',
  },
  buttonSignUp: {
    marginTop: 20,
    marginBottom: 30,
    marginHorizontal: 24,
    alignSelf: 'stretch',
  },
});
