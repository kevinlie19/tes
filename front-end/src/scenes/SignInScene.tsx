import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {};

type State = {};

export default class SignInScene extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up SignInScene.tsx to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
