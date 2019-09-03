import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Icon } from '../core-ui';
import { LIGHT_BLACK } from '../constants/color';

type Props = {};

export default class WelcomeScene extends Component<Props> {
  render() {
    return (
      <View style={styles.imageBackground}>
        <Text>This is welcome scene</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: LIGHT_BLACK,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    margin: 16,
  },
  logo: {
    width: 152,
    height: 160,
  },
});
