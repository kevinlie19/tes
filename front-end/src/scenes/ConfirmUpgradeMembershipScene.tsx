import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { token } from '../helpers';
import { RootState } from '../types/State';
import { UserObject, EditProfileObject } from '../types/Commons';
import { CUSTOM_BLACK, WHITE, CUSTOM_YELLOW } from '../constants/color';
import { STATUS_BAR_HEIGHT } from '../constants/deviceConfig';
import { Icon, Text, Button } from '../core-ui';

type Props = NavigationScreenProps & {
  accountData: UserObject;
  isProcessing: boolean;
  fetchMyAccount: (authToken: string) => void;
  fetchEditProfile: (
    authToken: string,
    updateObject: EditProfileObject,
  ) => void;
};

export class ConfirmUpgradeMembershipScene extends Component<
  Props,
  EditProfileObject
> {
  state: EditProfileObject = {
    full_name: '',
    avatar: null,
    membership: 'Basic',
    gender: 'Other',
    isAvatarChanged: false,
  };

  async componentWillMount() {
    await this._asyncStorage();
  }

  _asyncStorage = async () => {
    let { fetchMyAccount } = this.props;
    let userToken = await token.getToken();

    if (userToken) {
      await fetchMyAccount(userToken);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <View style={styles.navbarContainer}>
            <Icon
              name="arrowBack"
              customStyle={styles.arrowBack}
              onPress={() => this.props.navigation.goBack()}
            />

            <Text
              text="Upgrade Membership"
              type="headerTitle"
              newTextStyle={styles.titleText}
            />
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.iconContainer}>
            <Icon
              name="membership"
              isActive={false}
              customStyle={styles.iconMembership}
            />
          </View>
          <View style={styles.textContainerCenter}>
            <Text
              text="You are now a"
              type="mlarge"
              newTextStyle={styles.normalText}
            />
            <View style={styles.textContainerRow}>
              <Text
                text="PREMIUM"
                type="mlarge"
                newTextStyle={[styles.premiumText, styles.normalText]}
              />
              <Text
                text=" Member"
                type="mlarge"
                newTextStyle={styles.normalText}
              />
            </View>
          </View>
          {this.props.isProcessing ? null : (
            <Button
              buttonType="primary"
              text="THANKS!"
              onPress={() => this._onPressThanks()}
              newStyleButton={styles.buttonContainer}
              newStyleText={styles.normalText}
            />
          )}
        </View>
      </View>
    );
  }

  async _onPressThanks() {
    let { fetchEditProfile, navigation } = this.props;
    let userToken = await token.getToken();

    let { full_name, avatar, gender } = this.props.accountData;

    this.setState(
      {
        full_name,
        avatar,
        membership: 'Premium',
        gender,
      },
      async () => {
        let {
          full_name,
          avatar,
          membership,
          gender,
          isAvatarChanged,
        } = this.state;

        let updateObject = {
          full_name,
          avatar,
          membership,
          gender,
          isAvatarChanged,
        };

        if (userToken) {
          await fetchEditProfile(userToken, updateObject);
          navigation.navigate('Home');
        }
      },
    );
  }
}

let mapStateToProps = (state: RootState) => {
  let { accountState } = state;

  return {
    accountData: accountState.accountData,
    isProcessing: accountState.isProcessing,
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchMyAccount: (authToken: string) => {
      dispatch({ type: 'ACCOUNT_REQUESTED', authToken });
    },
    fetchEditProfile: (authToken: string, updateObject: EditProfileObject) => {
      dispatch({
        type: 'FETCH_EDIT_PROFILE_REQUESTED',
        authToken,
        updateObject,
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfirmUpgradeMembershipScene);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    backgroundColor: CUSTOM_BLACK,
  },
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: CUSTOM_BLACK,
    marginTop: STATUS_BAR_HEIGHT,
    paddingHorizontal: 16,
    height: 56,
  },
  arrowBack: {
    width: 24,
    height: 24,
  },
  titleText: {
    paddingRight: 75,
  },
  body: {
    flex: 7,
    backgroundColor: WHITE,
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 168,
    marginBottom: 24,
  },
  iconMembership: {
    width: 80,
    height: 80,
  },
  textContainerCenter: {
    alignItems: 'center',
  },
  textContainerRow: {
    flexDirection: 'row',
  },
  normalText: {
    fontWeight: 'normal',
  },
  premiumText: {
    color: CUSTOM_YELLOW,
  },
  buttonContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 16,
  },
});
