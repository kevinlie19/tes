import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  FlatList,
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';

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
import { STATUS_BAR_HEIGHT } from '../constants/deviceConfig';
import { Icon, Text, Image } from '../core-ui';
import { EventList } from '../components';
import { token, eventID } from '../helpers';
import { RootState } from '../types/State';
import { HomeObject } from '../types/Commons';

type Props = NavigationScreenProps & {
  homeData: HomeObject;
  fetchHome: (authToken: string, _navigator: any) => void;
};

type HomeSceneState = {
  isRefresh: boolean;
};

export class HomeScene extends Component<Props, HomeSceneState> {
  state: HomeSceneState = {
    isRefresh: false,
  };

  async componentDidMount() {
    this._asyncStorage();
  }

  _asyncStorage = async () => {
    let { fetchHome } = this.props;
    let userToken = await token.getToken();

    if (userToken) {
      await fetchHome(userToken, this.props.navigation);
    }
  };

  render() {
    let { homeData } = this.props;

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
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefresh}
                onRefresh={this._onRefresh}
              />
            }
          >
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
                    isActive={
                      homeData.user.membership === 'Premium' ? false : true
                    }
                    customStyle={styles.memberIcon}
                  />
                  <View style={styles.memberTextContainer}>
                    <Text
                      text={
                        homeData.user.membership === 'Premium'
                          ? 'Membership'
                          : 'Basic'
                      }
                      type="medium"
                      newTextStyle={
                        homeData.user.membership === 'Premium'
                          ? styles.entrepreneurText
                          : styles.basicText
                      }
                    />
                    <Text
                      text={
                        homeData.user.membership === 'Premium'
                          ? 'Premium'
                          : 'UPGRADE'
                      }
                      type="mlarge"
                      newTextStyle={styles.upgradeText}
                      onPress={
                        homeData.user.membership !== 'Premium'
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
                <TouchableOpacity
                  style={styles.menus}
                  onPress={() =>
                    this.props.navigation.navigate('Forum', { from: 'Forum' })
                  }
                >
                  <Icon name="forum" />
                  <Text text="Forum" type="medium" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.menus}
                  onPress={() => this.props.navigation.navigate('Event')}
                >
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
                    homeData.user.membership !== 'Premium'
                      ? () => this.props.navigation.navigate('Home')
                      : () =>
                          this.props.navigation.navigate('Forum', {
                            from: 'Market',
                          })
                  }
                >
                  <Icon
                    name="cart"
                    isActive={
                      homeData.user.membership === 'Premium' ? true : false
                    }
                  />
                  <Text
                    text="Market"
                    type="medium"
                    newTextStyle={styles.marketText}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.bannerContainer}>
                <Image type="banner" />
              </TouchableOpacity>

              <View style={styles.eventContainer}>
                <Text text="Latest Events" type="large" />
                {this._renderHome()}
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

  _renderHome = () => {
    let { homeData } = this.props;

    return homeData ? (
      <FlatList
        style={styles.events}
        horizontal={true}
        data={homeData.events.slice(0, 3)}
        extraData={this.state}
        renderItem={({ item }) => {
          return (
            <EventList
              src={item.image}
              type="horizontal"
              category={item.category}
              title={item.event_name}
              date={dateFormat(item.event_date, 'dd mmmm yyyy')}
              price={item.price}
              onPress={() => this._onPressEvent(item.id)}
            />
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    ) : (
      <View />
    );
  };

  _onRefresh = () => {
    this.setState({ isRefresh: true });
    this._asyncStorage().then(() => {
      this.setState({ isRefresh: false });
    });
  };

  async _onPressEvent(eventId: string) {
    await eventID.saveEventID(String(eventId));
    this.props.navigation.navigate('EventDetail');
  }
}

let mapStateToProps = (state: RootState) => {
  let { homeState } = state;

  return {
    homeData: homeState.homeData,
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchHome: (authToken: string, _navigator: any) => {
      dispatch({ type: 'FETCH_HOME_REQUESTED', authToken, _navigator });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScene);

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
    marginRight: 10,
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
    borderLeftWidth: 1,
    borderLeftColor: CUSTOM_WHITE,
    paddingRight: 24,
  },
  memberIcon: {
    width: 40,
    height: 40,
    marginRight: 5,
    marginLeft: 10,
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
  events: {
    paddingTop: 15,
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
