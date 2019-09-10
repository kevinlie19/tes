import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

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

type Props = NavigationScreenProps & {};

type State = {};

export default class SignInScene extends Component<Props, State> {
  render() {
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
            <Avatar />
            <View style={styles.textContainer}>
              <Text text="Lia Eden" type="large" />
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
                  text="Premium"
                  type="mlarge"
                  newTextStyle={styles.memberText}
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
}

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
  memberText: {
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
