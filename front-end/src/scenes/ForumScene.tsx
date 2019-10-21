import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
// import { Dispatch } from 'redux';
// import { connect } from 'react-redux';

// import { RootState } from '../types/State';
// import { HomeObject } from '../types/Commons';
// import { token, eventID } from '../helpers';
import { CUSTOM_BLACK, WHITE, GREY } from '../constants/color';
import { STATUS_BAR_HEIGHT } from '../constants/deviceConfig';
import { Icon, Text } from '../core-ui';
import { ForumList } from '../components';

type Props = NavigationScreenProps & {
  // forumData: HomeObject;
  // fetchForum: (authToken: string, _navigator: any) => void;
};

type ForumSceneState = {
  // isRefresh: boolean;
};

const UmumRoute = () => (
  <View style={styles.body}>
    <View style={styles.textContainer}>
      <Text text="Terbaru" type="medium" />
    </View>
    <ScrollView>
      <ForumList
        thumbnail="https://www.nordicchoicehotels.com/globalassets/global/hotel-pictures/clarion-hotel/clarion-hotel-copenhagen-airport/rooms/room-clarion-hotel-copenhagen-airport.jpg?t=SmartScale%7C1024x570"
        type="Forum"
        date="26 Juli 2019"
        forumTitle="Tips dan trik ternak lele"
        starter="Lia Eden"
        comments={1296}
      />
      <ForumList
        type="Forum"
        date="26 Juli 2019"
        forumTitle="Tips dan trik ternak lele"
        starter="Lia Eden"
        comments={1296}
      />
      <ForumList
        type="Forum"
        date="26 Juli 2019"
        forumTitle="Tips dan trik ternak lele"
        starter="Lia Eden"
        comments={1296}
      />
      <ForumList
        type="Forum"
        date="26 Juli 2019"
        forumTitle="Tips dan trik ternak lele"
        starter="Lia Eden"
        comments={1296}
      />
    </ScrollView>
    {/* {this._renderEvents()} */}
  </View>
);

const JualRoute = () => (
  <View style={styles.body}>
    <View style={styles.textContainer}>
      <Text text="Terbaru" type="medium" />
    </View>
    <ScrollView>
      <ForumList
        thumbnail="https://www.nordicchoicehotels.com/globalassets/global/hotel-pictures/clarion-hotel/clarion-hotel-copenhagen-airport/rooms/room-clarion-hotel-copenhagen-airport.jpg?t=SmartScale%7C1024x570"
        type="Market"
        date="26 Juli 2019"
        forumTitle="Tips dan trik ternak lele"
        starter="Lia Eden"
        comments={1296}
      />
      <ForumList
        type="Market"
        date="26 Juli 2019"
        forumTitle="Tips dan trik ternak lele"
        starter="Lia Eden"
        comments={1296}
      />
      <ForumList
        type="Market"
        date="26 Juli 2019"
        forumTitle="Tips dan trik ternak lele"
        starter="Lia Eden"
        comments={1296}
      />
      <ForumList
        type="Market"
        date="26 Juli 2019"
        forumTitle="Tips dan trik ternak lele"
        starter="Lia Eden"
        comments={1296}
      />
    </ScrollView>
    {/* {this._renderEvents()} */}
  </View>
);

const BeliRoute = () => (
  <View style={styles.body}>
    <View style={styles.textContainer}>
      <Text text="Terbaru" type="medium" />
    </View>
    <ScrollView>
      <ForumList
        thumbnail="https://www.nordicchoicehotels.com/globalassets/global/hotel-pictures/clarion-hotel/clarion-hotel-copenhagen-airport/rooms/room-clarion-hotel-copenhagen-airport.jpg?t=SmartScale%7C1024x570"
        type="Market"
        date="26 Juli 2019"
        forumTitle="Tips dan trik ternak lele"
        starter="Lia Eden"
        comments={1296}
      />
      <ForumList
        type="Market"
        date="26 Juli 2019"
        forumTitle="Tips dan trik ternak lele"
        starter="Lia Eden"
        comments={1296}
      />
      <ForumList
        type="Market"
        date="26 Juli 2019"
        forumTitle="Tips dan trik ternak lele"
        starter="Lia Eden"
        comments={1296}
      />
      <ForumList
        type="Market"
        date="26 Juli 2019"
        forumTitle="Tips dan trik ternak lele"
        starter="Lia Eden"
        comments={1296}
      />
    </ScrollView>
    {/* {this._renderEvents()} */}
  </View>
);

export default class ForumScene extends Component<Props, ForumSceneState> {
  state = {
    isRefresh: false,
    index: 0,
    routes: [
      { key: 'umum', title: 'UMUM' },
      { key: 'jual', title: 'JUAL' },
      { key: 'beli', title: 'BELI' },
    ],
  };

  componentWillMount() {
    if (this.props.navigation.getParam('from') === 'Forum') {
      this.setState({ index: 0 });
    } else if (this.props.navigation.getParam('from') === 'Market') {
      this.setState({ index: 1 });
    }
  }

  // async componentDidMount() {
  //   this._asyncStorage();
  // }

  // _asyncStorage = async () => {
  //   let { fetchForum } = this.props;
  //   let userToken = await token.getToken();

  //   if (userToken) {
  //     await fetchForum(userToken, this.props.navigation);
  //   }
  // };

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
              text="Forum"
              type="headerTitle"
              newTextStyle={styles.titleText}
            />
            <View />
          </View>

          <TabView
            navigationState={this.state}
            renderTabBar={this._renderTabBar}
            renderScene={SceneMap({
              umum: UmumRoute,
              jual: JualRoute,
              beli: BeliRoute,
            })}
            onIndexChange={(index) => this.setState({ index })}
            initialLayout={{ width: Dimensions.get('window').width }}
          />
        </View>
      </View>
    );
  }

  // _renderEvents = () => {
  //   let { forumData } = this.props;

  //   return forumData ? (
  //     <FlatList
  //       onRefresh={this._onRefresh}
  //       refreshing={this.state.isRefresh}
  //       data={forumData.events}
  //       extraData={this.state}
  //       renderItem={({ item }) => {
  //         return (
  //           <EventList
  //             src={item.image}
  //             type="vertical"
  //             category={item.category}
  //             title={item.event_name}
  //             date={item.event_date}
  //             price={item.price}
  //             onPress={() => {
  //               this._onPressEvent(item.id);
  //             }}
  //           />
  //         );
  //       }}
  //       keyExtractor={(item) => item.id.toString()}
  //     />
  //   ) : (
  //     <View />
  //   );
  // };

  // _onRefresh = () => {
  //   this.setState({ isRefresh: true });
  //   this._asyncStorage().then(() => {
  //     this.setState({ isRefresh: false });
  //   });
  // };

  // async _onPressEvent(eventId: string) {
  //   await eventID.saveEventID(String(eventId));
  //   this.props.navigation.navigate('EventDetail');
  // }
}

// let mapStateToProps = (state: RootState) => {
//   let { forumState } = state;

//   return {
//     forumData: forumState.inboxData,
//   };
// };

// let mapDispatchToProps = (dispatch: Dispatch) => {
//   return {
//     fetchHome: (authToken: string, _navigator: any) => {
//       dispatch({ type: 'FETCH_HOME_REQUESTED', authToken, _navigator });
//     },
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(ForumScene);

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
  arrowBack: {
    width: 24,
    height: 24,
  },
  titleText: {
    paddingRight: 20,
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
  bannerContainer: {
    marginVertical: 24,
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 24,
    marginHorizontal: 16,
    marginBottom: 16,
  },
});
