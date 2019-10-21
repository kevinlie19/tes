import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import {
  WHITE,
  CUSTOM_BLACK,
  CUSTOM_YELLOW,
  CUSTOM_WHITE,
  CUSTOM_GREEN,
  CUSTOM_RED,
  GREY,
} from '../constants/color';
import { STATUS_BAR_HEIGHT } from '../constants/deviceConfig';
import { Icon, Text } from '../core-ui';
import { TransactionList } from '../components';

type Props = NavigationScreenProps & {};

type TransactionSceneState = {};

export default class TransactionScene extends Component<
  Props,
  TransactionSceneState
> {
  state = {
    index: 0,
    routes: [
      { key: 'ongoing', title: 'ONGOING' },
      { key: 'history', title: 'HISTORY' },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <View style={styles.navbarContainer}>
            <Icon name="logo" customStyle={styles.logo} />
            <Text
              text="Transaction"
              type="headerTitle"
              newTextStyle={styles.titleText}
            />

            <Icon name="qr" customStyle={styles.smallIcon} />
          </View>
          <TabView
            navigationState={this.state}
            renderTabBar={this._renderTabBar}
            renderScene={SceneMap({
              ongoing: this.OngoingRoute,
              history: this.HistoryRoute,
            })}
            onIndexChange={(index) => this.setState({ index })}
            initialLayout={{ width: Dimensions.get('window').width }}
          />
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
              isActive={true}
              customStyle={styles.smallIcon}
            />
            <Text
              text="Transaction"
              type="small"
              newTextStyle={styles.transactionText}
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
            <Text text="Inbox" type="small" newTextStyle={styles.otherText} />
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

  _renderTabBar = (props: any) => {
    return (
      <TabBar
        {...props}
        style={{
          backgroundColor: CUSTOM_BLACK,
        }}
        indicatorStyle={{
          backgroundColor: WHITE,
        }}
        activeColor={WHITE}
        inactiveColor={GREY}
      />
    );
  };

  OngoingRoute = () => (
    <ScrollView style={styles.body}>
      <TransactionList
        icon={<Icon name="membership" isActive={true} />}
        transactionTitle="Upgrade Membership"
        date="27 July 2019"
        status="Waiting for payment"
        onPress={() => {}}
        newTextStyle={{ color: CUSTOM_RED }}
      />
      <TransactionList
        icon={<Icon name="event" isActive={false} />}
        transactionTitle="Talkshow Motivasi Kaya"
        date="23 September 2019"
        status="E-ticket ready"
        onPress={() => {}}
        newTextStyle={{ color: CUSTOM_GREEN }}
      />
    </ScrollView>
  );

  HistoryRoute = () => (
    <ScrollView style={styles.body}>
      <TransactionList
        icon={<Icon name="membership" isActive={true} />}
        transactionTitle="Upgrade Membership"
        date="27 July 2019"
        onPress={() => {}}
      />
      <TransactionList
        icon={<Icon name="event" isActive={false} />}
        transactionTitle="Talkshow Motivasi Kaya"
        date="23 September 2019"
        onPress={() => {}}
      />
    </ScrollView>
  );
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
  tabBar: {
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  body: {
    flex: 7,
    backgroundColor: WHITE,
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
  transactionText: {
    color: CUSTOM_YELLOW,
  },
  otherText: {
    color: CUSTOM_WHITE,
  },
});
