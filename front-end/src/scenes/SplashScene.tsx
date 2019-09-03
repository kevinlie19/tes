import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { Icon } from '../core-ui';
import { LIGHT_BLACK, CUSTOM_YELLOW } from '../constants/color';

type Props = NavigationScreenProps;

export default class SplashScene extends Component<Props> {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Welcome');
    }, 2000);
  }

  render() {
    return (
      <View style={styles.imageBackground}>
        <View style={styles.imageContainer}>
          <Icon name="logo" isActive={false} customStyle={styles.logo} />
        </View>
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={CUSTOM_YELLOW} />
        </View>
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
  logo: {
    width: 152,
    height: 160,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 150,
  },
});
