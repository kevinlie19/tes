import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { CUSTOM_BLACK } from '../constants/color';
import { Icon } from '../core-ui';
import { SignInCard } from '../components';

type Props = NavigationScreenProps & {};

type State = {
  emailValue: string;
  passwordValue: string;
};

export default class SignInScene extends Component<Props, State> {
  state: State = {
    emailValue: '',
    passwordValue: '',
  };

  _onChangeEmail(newEmail: string) {
    this.setState({
      emailValue: newEmail,
    });
  }

  _onChangePassword(newPassword: string) {
    this.setState({
      passwordValue: newPassword,
    });
  }

  render() {
    return (
      <View style={styles.imageBackground}>
        <View style={styles.imageContainer}>
          <Icon name="logo" isActive={false} customStyle={styles.logo} />
        </View>
        <View>
          <SignInCard
            onChangeTextEmail={() => this._onChangeEmail}
            onChangeTextPassword={() => this._onChangePassword}
            onPress={() => this.props.navigation.navigate('Home')}
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
