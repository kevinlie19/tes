import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { CUSTOM_BLACK } from '../constants/color';
import { Icon } from '../core-ui';
import { WelcomeCard } from '../components';

type Props = NavigationScreenProps & {};

export default class WelcomeScene extends Component<Props> {
  render() {
    return (
      <View style={styles.imageBackground}>
        <View style={styles.imageContainer}>
          <Icon name="logo" isActive={false} customStyle={styles.logo} />
        </View>
        <View>
          <WelcomeCard
            onPressTextLogin={() => this.props.navigation.navigate('SignIn')}
            onPressButtonSignUp={() => {
              this.props.navigation.navigate('SignUp');
            }}
          />
        </View>
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
    backgroundColor: CUSTOM_BLACK,
  },
  logo: {
    width: 152,
    height: 160,
  },
});
