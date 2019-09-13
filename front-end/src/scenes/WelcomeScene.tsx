import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import * as Google from 'expo-google-app-auth';

import { CUSTOM_BLACK } from '../constants/color';
import { Icon } from '../core-ui';
import { WelcomeCard } from '../components';

type Props = NavigationScreenProps & {};

type State = {
  signedIn: boolean;
  name: string;
};

export default class WelcomeScene extends Component<Props, State> {
  state: State = {
    signedIn: false,
    name: '',
  };

  _onClickLoginGoogle = async () => {
    const result = await Google.logInAsync({
      androidClientId:
        '793432711225-8c5tclehqfi8tf71d3q6i9spmb672obj.apps.googleusercontent.com',
      androidStandaloneAppClientId:
        '793432711225-8c5tclehqfi8tf71d3q6i9spmb672obj.apps.googleusercontent.com',
      clientId:
        '793432711225-bmjh3eh0aoan1ragi6b8q0mjq84ka9co.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });
    if (result.type === 'success') {
      console.log(result);
    } else {
      throw Error('Sorry, only available for Android only for now :(');
    }
  };

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
            onPressButtonGoogle={this._onClickLoginGoogle}
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
