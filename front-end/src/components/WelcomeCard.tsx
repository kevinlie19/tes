import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { Text, Button } from '../core-ui';
import { WHITE, GREY } from '../constants/color';

type State = {};

type Props = {
  onPressTextLogin?: () => void;
  onPressButtonSignUp?: () => void;
};

export default class WelcomeCard extends Component<Props, State> {
  render() {
    let { onPressTextLogin, onPressButtonSignUp } = this.props;

    return (
      <View style={styles.cardContainer}>
        <Text
          type="large"
          text="Welcome, Entrepreneurs!"
          newTextStyle={styles.title}
        />
        <Button
          buttonType="secondary"
          text="SIGN UP"
          newStyleText={styles.textButton}
          onPress={onPressButtonSignUp}
        />

        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text type="medium" text="   or   " newTextStyle={styles.greyText} />
          <View style={styles.divider} />
        </View>

        <Button buttonType="google" newStyleText={styles.textButton} />
        <View style={styles.loginContainer}>
          <Text
            type="large"
            text="Already have an account?"
            newTextStyle={styles.greyText}
          />
          <Text
            onPress={onPressTextLogin}
            type="large"
            text=" Login here"
            newTextStyle={styles.greyText}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 16,
    marginBottom: 36,
    // margin: 16,
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
  greyText: {
    color: GREY,
    fontWeight: 'normal',
  },
  dividerContainer: {
    flexDirection: 'row',
  },
  divider: {
    width: '39%',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: GREY,
  },
  loginContainer: {
    flexDirection: 'row',
    paddingBottom: 40,
  },
});