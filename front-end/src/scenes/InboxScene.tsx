import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { NavigationScreenProps, ScrollView } from 'react-navigation';

import { Icon, Text } from '../core-ui';
import {
  CUSTOM_BLACK,
  CUSTOM_YELLOW,
  CUSTOM_WHITE,
  WHITE,
} from '../constants/color';
import { STATUS_BAR_HEIGHT } from '../constants/deviceConfig';
import { InboxList } from '../components';

type Props = NavigationScreenProps & {};

type InboxSceneState = {
  isRefresh: boolean;
};

export default class InboxScene extends Component<Props, InboxSceneState> {
  state: InboxSceneState = {
    isRefresh: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <View style={styles.navbarContainer}>
            <Icon name="logo" customStyle={styles.logo} />

            <Text
              text="Inbox"
              type="headerTitle"
              newTextStyle={styles.titleText}
            />

            <Icon name="qr" customStyle={styles.smallIcon} />
          </View>
        </View>

        <View style={styles.body}>
          <ScrollView
            style={styles.inboxList}
            indicatorStyle="white"
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefresh}
                onRefresh={this._onRefresh}
              />
            }
          >
            <InboxList
              date="26 Juli 2019"
              inboxTitle="Your e-ticket for Talkshow Motivasi Kaya has been issued!"
              onPress={() => {}}
            />
            <InboxList
              date="26 Juli 2019"
              inboxTitle="You are now a premium member!"
              onPress={() => {}}
            />
          </ScrollView>
        </View>

        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Icon name="home" isActive={false} customStyle={styles.smallIcon} />
            <Text text="Home" type="small" newTextStyle={styles.otherText} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabs}
            onPress={() => this.props.navigation.navigate('Transaction')}
          >
            <Icon
              name="transaction"
              isActive={false}
              customStyle={styles.smallIcon}
            />
            <Text
              text="Transaction"
              type="small"
              newTextStyle={styles.otherText}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabs}
            onPress={() => this.props.navigation.navigate('Inbox')}
          >
            <Icon name="inbox" isActive={true} customStyle={styles.smallIcon} />
            <Text text="Inbox" type="small" newTextStyle={styles.inboxText} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabs}
            onPress={() => this.props.navigation.navigate('MyAccount')}
          >
            <Icon
              name="account"
              isActive={false}
              customStyle={styles.smallIcon}
            />
            <Text text="Account" type="small" newTextStyle={styles.otherText} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _onRefresh = () => {
    this.setState({ isRefresh: true });
    setTimeout(() => {
      this.setState({ isRefresh: false });
    }, 1000);
  };
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
    paddingRight: 18,
  },
  smallIcon: {
    width: 24,
    height: 24,
  },
  body: {
    flex: 7,
    backgroundColor: WHITE,
  },
  inboxList: {
    paddingTop: 24,
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
  inboxText: {
    color: CUSTOM_YELLOW,
  },
  otherText: {
    color: CUSTOM_WHITE,
  },
});
