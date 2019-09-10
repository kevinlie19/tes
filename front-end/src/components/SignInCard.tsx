import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text, Button, TextInput } from '../core-ui';
import { WHITE } from '../constants/color';

type Props = {
  onChangeText?: () => void;
};

export default function SignInCard(props: Props) {
  let { onChangeText } = props;

  return (
    <View style={styles.cardContainer}>
      <Text type="large" text="Sign In" newTextStyle={styles.title} />
      <TextInput placeholder="Email" onChangeText={onChangeText} />
      <TextInput placeholder="Password" onChangeText={onChangeText} />
      <Button
        buttonType="secondary"
        text="SIGN IN"
        newStyleText={styles.textButton}
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
    paddingTop: 40,
    fontWeight: 'normal',
  },
  textButton: {
    fontWeight: 'normal',
  },
});
