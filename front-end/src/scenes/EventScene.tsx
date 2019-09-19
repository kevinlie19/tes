import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps, FlatList } from 'react-navigation';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { RootState } from '../types/State';
import { HomeObject } from '../types/Commons';
import { token } from '../helpers';
import { Icon, Text, Image } from '../core-ui';
import { CUSTOM_BLACK, WHITE } from '../constants/color';
import { STATUS_BAR_HEIGHT } from '../constants/deviceConfig';
import { EventList } from '../components';

type Props = NavigationScreenProps & {
  homeData: HomeObject;
  fetchHome: (authToken: string, _navigator: any) => void;
};

type EventSceneState = {
  isRefresh: boolean;
};

export class EventScene extends Component<Props, EventSceneState> {
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
            <View />
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
    let { homeData } = this.props;

    return homeData ? (
      <FlatList
        style={styles.events}
        data={homeData.events}
        extraData={this.state}
        renderItem={({ item }) => {
          return (
            <EventList
              type="vertical"
              category={item.category}
              title={item.event_name}
              date={item.place}
              price={item.price}
              onPress={() => {}}
            />
          );
        }}
        keyExtractor={(item, index) => (index + item.id).toString()}
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
  events: {
    // marginVertical: 50,
  },
});
