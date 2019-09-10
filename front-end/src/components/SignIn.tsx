import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { Text, Button } from '../core-ui';
import { WHITE, GREY } from '../constants/color';
import { TextInput } from '../core-ui';

type State = {};

export default class SignIn extends Component<State> {
  render() {

    return (
      <View style={styles.cardContainer}>
        <Text
          type="large"
          text="Sign In"
          newTextStyle={styles.title}
        />
        <TextInput 
        placeholder="Email"
        />
        <TextInput 
        placeholder="Password" 
        />
        <Button
          buttonType="secondary"
          text="SIGN IN"
          newStyleText={styles.textButton}
        />
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
});
