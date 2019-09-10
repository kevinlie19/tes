import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import {
  WHITE,
  CUSTOM_BLACK,
  LIGHT_GREY,
  CUSTOM_YELLOW,
  CUSTOM_WHITE,
  CUSTOM_BROWN,
  GREY,
  DARK_GREY,
} from '../constants/color';
import { Icon, Text, Image } from '../core-ui';
import { STATUS_BAR_HEIGHT } from '../constants/deviceConfig';
import { EventList } from '../components';

type Props = NavigationScreenProps & {};

type State = {
  isPremium: boolean;
};

export default class HomeScene extends Component<Props, State> {
  state: State = {
    isPremium: false,
  };
  render() {
    let { isPremium } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <View style={styles.navbarContainer}>
            <Icon name="logo" customStyle={styles.logo} />

            <Text
              text="Home"
              type="headerTitle"
              newTextStyle={styles.titleText}
            />

            <Icon name="qr" customStyle={styles.smallIcon} />
          </View>
        </View>

        <View style={styles.body}>
          <ScrollView>
            <View>
              <View style={styles.infoContainer}>
                <View style={styles.levelContainer}>
                  <Icon name="level" customStyle={styles.levelIcon} />
                  <View style={styles.levelTextContainer}>
                    <Text
                      text="Entrepreneur"
                      type="small"
                      newTextStyle={styles.entrepreneurText}
                    />
                    <Text
                      text="Learning"
                      type="mlarge"
                      newTextStyle={styles.learningText}
                    />
                  </View>
                </View>
                <View style={styles.memberContainer}>
                  <Icon
                    name="membership"
                    isActive={isPremium ? false : true}
                    customStyle={styles.memberIcon}
                  />
                  <View style={styles.memberTextContainer}>
                    <Text
                      text={isPremium ? 'Membership' : 'Basic'}
                      type="medium"
                      newTextStyle={
                        isPremium ? styles.entrepreneurText : styles.basicText
                      }
                    />
                    <Text
                      text={isPremium ? 'Premium' : 'UPGRADE'}
                      type="mlarge"
                      newTextStyle={styles.upgradeText}
                      onPress={
                        !isPremium
                          ? () =>
                              this.props.navigation.navigate(
                                'UpgradeMembership',
                              )
                          : () => {}
                      }
                    />
                  </View>
                </View>
              </View>

              <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menus}>
                  <Icon name="forum" />
                  <Text text="Forum" type="medium" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menus}>
                  <Icon name="event" />
                  <Text text="Events" type="medium" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menus}>
                  <Icon name="course" />
                  <Text text="Courses" type="medium" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.menus}
                  onPress={
                    isPremium
                      ? () => this.props.navigation.navigate('Home')
                      : () => {}
                  }
                >
                  <Icon name="cart" isActive={isPremium ? true : false} />
                  <Text
                    text="Market"
                    type="medium"
                    newTextStyle={styles.marketText}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.bannerContainer}>
                <Image type="banner" />
              </View>

              <View style={styles.eventContainer}>
                <Text text="Event Terdekat" type="large" />
                <ScrollView
                  horizontal={true}
                  indicatorStyle="white"
                  contentContainerStyle={{ padding: 5, margin: 5 }}
                >
                  <EventList
                    category="WORKSHOP"
                    title="Talkshow Menjadi Seorang Entrepreneur"
                    date="01 Desember 2019"
                    price="Rp 400.000"
                    onPress={() => {}}
                  />
                  <EventList
                    category="SEMINAR"
                    title="Motivasi Kaya"
                    date="01 Desember 2019"
                    price="Rp 400.000"
                    onPress={() => {}}
                  />
                  <EventList
                    category="WORKSHOP"
                    title="Mental Baja Seorang Entrepreneur"
                    date="01 Desember 2019"
                    price="Rp 400.000"
                    onPress={() => {}}
                  />
                </ScrollView>
              </View>

              <View style={styles.latestNewsContainer}>
                <Text text="Latest News" type="large" />
                <View></View>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.tabsContainer}>
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Icon name="home" isActive={true} customStyle={styles.smallIcon} />
            <Text text="Home" type="small" newTextStyle={styles.homeText} />
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
              newTextStyle={styles.otherText}
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
    marginVertical: 24,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 4,
    height: 64,
    borderColor: CUSTOM_WHITE,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  levelContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelIcon: {
    width: 25,
    height: 36,
    marginRight: 12,
  },
  levelTextContainer: {
    flexDirection: 'column',
  },
  entrepreneurText: {
    color: GREY,
  },
  learningText: {
    color: CUSTOM_BROWN,
    paddingTop: 4,
  },
  memberContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  memberIcon: {
    width: 40,
    height: 40,
    marginRight: 4,
  },
  memberTextContainer: {
    flexDirection: 'column',
  },
  basicText: {
    color: DARK_GREY,
  },
  upgradeText: {
    color: CUSTOM_YELLOW,
    paddingTop: 4,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 24,
    marginHorizontal: 16,
  },
  menus: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  marketText: {
    color: LIGHT_GREY,
  },
  bannerContainer: {
    alignItems: 'center',
  },
  eventContainer: {
    marginVertical: 24,
    marginHorizontal: 16,
  },
  latestNewsContainer: {
    marginBottom: 24,
    marginHorizontal: 16,
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
  homeText: {
    color: CUSTOM_YELLOW,
  },
  otherText: {
    color: CUSTOM_WHITE,
  },
});
