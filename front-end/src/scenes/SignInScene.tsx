import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { RootState } from '../types/State';
import { CUSTOM_BLACK } from '../constants/color';
import { Icon } from '../core-ui';
import { SignInCard } from '../components';

type Props = NavigationScreenProps & {
  isProcessing: boolean;
  errorMessage: string;
  submitSignIn: (email: string, password: string, _navigator: any) => void;
  reset_error: () => void;
};

type SignInSceneState = {
  email: string;
  password: string;
};

export class SignInScene extends Component<Props, SignInSceneState> {
  state: SignInSceneState = {
    email: '',
    password: '',
  };

  componentDidUpdate() {
    let { errorMessage, reset_error } = this.props;

    if (errorMessage !== '') {
      alert(errorMessage);
      reset_error();
    }
  }

  render() {
    return (
      <View style={styles.imageBackground}>
        <View style={styles.imageContainer}>
          <Icon name="logo" isActive={false} customStyle={styles.logo} />
        </View>
        <View>
          <SignInCard
            onChangeTextEmail={this._onChangeTextEmail}
            onChangeTextPassword={this._onChangeTextPassword}
            onPress={this._onSignIn}
          />
        </View>
      </View>
    );
  }

  _onChangeTextEmail = (newEmail: string) => {
    this.setState({
      email: newEmail,
    });
  };

  _onChangeTextPassword = (newPassword: string) => {
    this.setState({
      password: newPassword,
    });
  };

  _onSignIn = () => {
    let { email, password } = this.state;
    let { submitSignIn } = this.props;

    let _navigator = this.props.navigation;

    submitSignIn(email, password, _navigator);
  };
}

let mapStateToProps = (state: RootState) => {
  let { signinState } = state;
  return {
    isProcessing: signinState.isProcessing,
    errorMessage: signinState.errorMessage,
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    submitSignIn: (email: string, password: string, _navigator: any) => {
      dispatch({ type: 'SIGNIN_REQUESTED', email, password, _navigator });
    },
    reset_error: () => {
      dispatch({ type: 'RESET_ERROR' });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInScene);

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
