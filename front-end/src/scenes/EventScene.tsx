import React, { Component } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { RootState } from '../types/State';
import { HomeObject } from '../types/Commons';
import { token, eventID } from '../helpers';
import { Icon, Text, Image } from '../core-ui';
import { EventList } from '../components';
import { CUSTOM_BLACK, WHITE, CUSTOM_YELLOW, GREY } from '../constants/color';
import { STATUS_BAR_HEIGHT } from '../constants/deviceConfig';

type Props = NavigationScreenProps & {
  homeData: HomeObject;
  isLoading: boolean;
  fetchHome: (authToken: string, _navigator: any) => void;
};

type EventSceneState = {
  isRefresh: boolean;
};

export class EventScene extends Component<Props, EventSceneState> {
  state: EventSceneState = {
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
              text="Events"
              type="headerTitle"
              newTextStyle={styles.titleText}
            />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.bannerContainer}>
            <Image type="banner" />
          </View>
          <View style={styles.textContainer}>
            <Text text="Event List" type="large" />
          </View>
          {this._renderEvents()}
        </View>
      </View>
    );
  }

  _renderEvents = () => {
    let { homeData, isLoading } = this.props;

    return isLoading ? (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={CUSTOM_YELLOW} />
      </View>
    ) : homeData.events.length > 0 ? (
      <FlatList
        indicatorStyle="white"
        onRefresh={this._onRefresh}
        refreshing={this.state.isRefresh}
        data={homeData.events}
        extraData={this.state}
        renderItem={({ item }) => {
          return (
            <EventList
              src={item.image}
              type="vertical"
              category={item.category}
              title={item.event_name}
              date={item.event_date}
              price={item.price}
              onPress={() => {
                this._onPressEvent(item.id);
              }}
            />
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    ) : (
      <View style={styles.emptyContainer}>
        <Text
          style={styles.emptyText}
          type="medium"
          text="Sorry, No Available Events Yet"
        />
      </View>
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
    isLoading: homeState.isLoading,
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
)(EventScene);

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
    paddingRight: 20,
  },
  body: {
    flex: 7,
    backgroundColor: WHITE,
  },
  bannerContainer: {
    marginVertical: 24,
    alignItems: 'center',
  },
  textContainer: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  emptyContainer: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: GREY,
  },
});
