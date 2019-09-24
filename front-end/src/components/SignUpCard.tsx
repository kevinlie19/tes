import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text, Button, TextInput } from '../core-ui';
import { WHITE } from '../constants/color';

type Props = {
  onChangeTextEmail: (text: string) => void;
  onChangeTextPassword: (text: string) => void;
  onChangeTextRepeatPassword: (text: string) => void;
  onChangeTextFirstName: (text: string) => void;
  onChangeTextLastName: (text: string) => void;
  onPress: () => void;
};

export default function SignUpCard(props: Props) {
  let {
    onChangeTextEmail,
    onChangeTextPassword,
    onChangeTextRepeatPassword,
    onChangeTextFirstName,
    onChangeTextLastName,
    onPress,
  } = props;

  return (
    <View style={styles.cardContainer}>
      <Text type="large" text="Sign Up" newTextStyle={styles.title} />
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
      <TextInput
        placeholder="Repeat Password"
        onChangeText={onChangeTextRepeatPassword}
        newContainerStyle={styles.textinputContainer}
      />
      <TextInput
        placeholder="First Name"
        onChangeText={onChangeTextFirstName}
        newContainerStyle={styles.textinputContainer}
      />
      <TextInput
        placeholder="Last Name"
        onChangeText={onChangeTextLastName}
        newContainerStyle={styles.textinputContainer}
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
