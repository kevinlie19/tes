import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { CUSTOM_BLACK } from '../constants/color';
import { Icon } from '../core-ui';
import { SignUpCard } from '../components';

type Props = NavigationScreenProps & {};

type State = {
  emailValue: string;
  passwordValue: string;
  repeatPasswordValue: string;
};

export default class SignUpScene extends Component<Props, State> {
  state: State = {
    emailValue: '',
    passwordValue: '',
    repeatPasswordValue: '',
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

  _onChangeRepeatPassword(newRepeatPassword: string) {
    this.setState({
      passwordValue: newRepeatPassword,
    });
  }

  render() {
    return (
      <View style={styles.imageBackground}>
        <View style={styles.imageContainer}>
          <Icon name="logo" isActive={false} customStyle={styles.logo} />
        </View>
        <View>
          <SignUpCard
            onChangeTextEmail={() => this._onChangeEmail}
            onChangeTextPassword={() => this._onChangePassword}
            onChangeTextRepeatPassword={() => this._onChangeRepeatPassword}
            onPress={() => this.props.navigation.navigate('SignIn')}
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
