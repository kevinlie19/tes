import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import * as Google from 'expo-google-app-auth';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { CUSTOM_BLACK } from '../constants/color';
import { Icon } from '../core-ui';
import { WelcomeCard } from '../components';
import { RootState } from '../types/State';

type Props = NavigationScreenProps & {
  isProcessing: boolean;
  errorMessage: string;
  submitSignInGoogle: (
    id: string | undefined,
    email: string | undefined,
    first_name: string | undefined,
    last_name: string | undefined,
    avatar: string | undefined,
    _navigator: any,
  ) => void;
};

export class WelcomeScene extends Component<Props> {
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
      let { submitSignInGoogle } = this.props;

      let _navigator = this.props.navigation;

      submitSignInGoogle(
        result.user.id,
        result.user.email,
        result.user.givenName,
        result.user.familyName,
        result.user.photoUrl,
        _navigator,
      );
    } else {
      throw new Error('Sorry, only available for Android only for now :(');
    }
  };
}

let mapStateToProps = (state: RootState) => {
  let { signinGoogleState } = state;
  return {
    isProcessing: signinGoogleState.isProcessing,
    errorMessage: signinGoogleState.errorMessage,
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    submitSignInGoogle: (
      id: string | undefined,
      email: string | undefined,
      first_name: string | undefined,
      last_name: string | undefined,
      avatar: string | undefined,
      _navigator: any,
    ) => {
      dispatch({
        type: 'SIGNINGOOGLE_REQUESTED',
        id,
        email,
        first_name,
        last_name,
        avatar,
        _navigator,
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WelcomeScene);

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
