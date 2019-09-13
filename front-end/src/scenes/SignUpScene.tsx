import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { RootState } from '../types/State';
import { CUSTOM_BLACK } from '../constants/color';
import { Icon } from '../core-ui';
import { SignUpCard } from '../components';

type Props = NavigationScreenProps & {
  isProcessing: boolean;
  errorMessage: string;
  submitSignUp: (
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    _navigator: any,
  ) => void;
  reset_error: () => void;
};

type SignUpSceneState = {
  email: string;
  password: string;
  repeatPassword: string;
  first_name: string;
  last_name: string;
};

export class SignUpScene extends Component<Props, SignUpSceneState> {
  state: SignUpSceneState = {
    email: '',
    password: '',
    repeatPassword: '',
    first_name: 'Kevin',
    last_name: 'Lie',
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
          <SignUpCard
            onChangeTextEmail={this._onChangeEmail}
            onChangeTextPassword={this._onChangePassword}
            onChangeTextRepeatPassword={this._onChangeRepeatPassword}
            onPress={this._onSubmitSignUp}
          />
        </View>
      </View>
    );
  }

  _onChangeEmail = (newEmail: string) => {
    this.setState({
      email: newEmail,
    });
  };

  _onChangePassword = (newPassword: string) => {
    this.setState({
      password: newPassword,
    });
  };

  _onChangeRepeatPassword = (newRepeatPassword: string) => {
    this.setState({
      repeatPassword: newRepeatPassword,
    });
  };

  _onSubmitSignUp = () => {
    let { email, password, repeatPassword, first_name, last_name } = this.state;
    let { submitSignUp } = this.props;

    let _navigator: any = this.props.navigation;

    if (
      password === repeatPassword &&
      password.length >= 6 &&
      email &&
      password
    ) {
      submitSignUp(email, password, first_name, last_name, _navigator);
    } else if (password.length < 6 || password !== repeatPassword) {
      alert('Please fill the password correctly.');
    } else {
      submitSignUp(email, password, first_name, last_name, _navigator);
    }

    // submitSignUp(email, password, first_name, last_name, _navigator);
  };
}

let mapStateToProps = (state: RootState) => {
  let { signupState } = state;
  return {
    isProcessing: signupState.isProcessing,
    errorMessage: signupState.errorMessage,
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    submitSignUp: (
      email: string,
      password: string,
      first_name: string,
      last_name: string,
      _navigator: any,
    ) => {
      dispatch({
        type: 'SIGNUP_REQUESTED',
        email,
        password,
        first_name,
        last_name,
        _navigator,
      });
    },
    reset_error: () => {
      dispatch({ type: 'RESET_ERROR' });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpScene);

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
