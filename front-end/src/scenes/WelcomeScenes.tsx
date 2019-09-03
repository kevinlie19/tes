import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon } from '../core-ui';
import { LIGHT_BLACK } from '../constants/color';

type Props = {};

export default class WelcomeScene extends Component<Props> {
  render() {
    return (
      <View style={styles.imageBackground}>
        <View style={styles.imageContainer}>
          <Icon name="logo" isActive={false} customStyle={styles.logo} />
        </View>
        <View></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',

    alignItems: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: LIGHT_BLACK,
  },
  logo: {
    width: 152,
    height: 160,
  },
});
