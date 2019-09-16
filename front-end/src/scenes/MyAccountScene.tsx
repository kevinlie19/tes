import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Text, Icon, Avatar } from '../core-ui';
import {
  CUSTOM_BLACK,
  WHITE,
  CUSTOM_WHITE,
  CUSTOM_YELLOW,
  CUSTOM_RED,
  DARK_GREY,
  CUSTOM_BROWN,
} from '../constants/color';
import { STATUS_BAR_HEIGHT } from '../constants/deviceConfig';
import { token } from '../helpers';
import { RootState } from '../types/State';
import { UserObject } from '../types/Commons';

type Props = NavigationScreenProps & {
  accountData: UserObject;
  fetchMyAccount: (authToken: string) => void;
};

type MyAccountSceneState = {};

export class MyAccountScene extends Component<Props, MyAccountSceneState> {
  async componentDidMount() {
    this._asyncStorage();
  }

  _asyncStorage = async () => {
    let { fetchMyAccount } = this.props;
    let userToken = await token.getToken();

    if (userToken) {
      await fetchMyAccount(userToken);
    }
  };

  render() {
    let { accountData } = this.props;

    let fullName = accountData.first_name + ' ' + accountData.last_name;

    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <View style={styles.navbarContainer}>
            <Icon name="logo" customStyle={styles.logo} />

            <Text
              text="My Account"
              type="headerTitle"
              newTextStyle={styles.titleText}
            />

            <Icon name="qr" customStyle={styles.smallIcon} />
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.infoContainer}>
            <Avatar src={accountData.avatar} />
            <View style={styles.textContainer}>
              <Text text={fullName} type="large" />
              <View style={styles.smallTextContainer}>
                <Text
                  text="Entrepreneur"
                  type="small"
                  newTextStyle={styles.smallText}
                />
                <Text
                  text="Membership"
                  type="small"
                  newTextStyle={styles.smallText}
                />
              </View>
              <View style={styles.bigTextContainer}>
                <Text
                  text="Learning"
                  type="mlarge"
                  newTextStyle={styles.levelText}
                />
                <Text
                  text={accountData.membership}
                  type="mlarge"
                  newTextStyle={styles.memberPremiumText}
                />
              </View>
            </View>
          </View>
          <View style={styles.settingContainer}>
            <Text
              text="Edit Profile"
              type="medium"
              newTextStyle={styles.editProfileText}
            />
            <Text
              text="Terms of Service"
              type="medium"
              newTextStyle={styles.otherText}
            />
            <Text
              text="Privacy Policy"
              type="medium"
              newTextStyle={styles.otherText}
            />
            <Text
              text="Log Out"
              type="medium"
              newTextStyle={styles.logoutText}
              onPress={this._onPressLogOut}
            />
          </View>
        </View>

        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Icon name="home" isActive={false} customStyle={styles.smallIcon} />
            <Text
              text="Home"
              type="small"
              newTextStyle={styles.otherTextTabs}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.tabs}>
            <Icon
              name="transaction"
              isActive={false}
              customStyle={styles.smallIcon}
            />
            <Text
              text="Transaction"
              type="small"
              newTextStyle={styles.otherTextTabs}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabs}
            onPress={() => this.props.navigation.navigate('Inbox')}
          >
            <Icon
              name="inbox"
              isActive={false}
              customStyle={styles.smallIcon}
            />
            <Text
              text="Inbox"
              type="small"
              newTextStyle={styles.otherTextTabs}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabs}
            onPress={() => this.props.navigation.navigate('MyAccount')}
          >
            <Icon
              name="account"
              isActive={true}
              customStyle={styles.smallIcon}
            />
            <Text
              text="Account"
              type="small"
              newTextStyle={styles.accountText}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _onPressLogOut = async () => {
    await token.removeToken();
    this.props.navigation.navigate('Welcome');
  };
}

let mapStateToProps = (state: RootState) => {
  let { accountState } = state;

  return {
    accountData: accountState,
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchMyAccount: (authToken: string) => {
      dispatch({ type: 'ACCOUNT_REQUESTED', authToken });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyAccountScene);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flex: 1,
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
  logo: {
    width: 46,
    height: 48,
  },
  titleText: {
    paddingRight: 20,
  },
  smallIcon: {
    width: 24,
    height: 24,
  },
  body: {
    flex: 7,
    backgroundColor: WHITE,
  },
  infoContainer: {
    height: 108,
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
  },
  textContainer: {
    marginLeft: 16,
  },
  smallTextContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  smallText: {
    color: DARK_GREY,
    marginRight: 48,
  },
  bigTextContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  levelText: {
    color: CUSTOM_BROWN,
    marginRight: 59,
  },
  memberPremiumText: {
    color: CUSTOM_YELLOW,
  },
  settingContainer: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 24,
  },
  editProfileText: {
    marginBottom: 12,
  },
  otherText: {
    color: DARK_GREY,
    marginBottom: 12,
  },
  logoutText: {
    color: CUSTOM_RED,
  },
  tabsContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: CUSTOM_WHITE,
    backgroundColor: WHITE,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 7,
  },
  tabs: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  accountText: {
    color: CUSTOM_YELLOW,
  },
  otherTextTabs: {
    color: CUSTOM_WHITE,
  },
});
