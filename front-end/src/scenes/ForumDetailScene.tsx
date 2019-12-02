import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps, ScrollView } from 'react-navigation';
// import { Dispatch } from 'redux';
// import { connect } from 'react-redux';

// import { RootState } from '../types/State';
// import { HomeObject } from '../types/Commons';
// import { token, eventID } from '../helpers';
import { Icon, Text, Image, Avatar, TextInput } from '../core-ui';
import { CommentList } from '../components';
import {
  CUSTOM_BLACK,
  WHITE,
  CUSTOM_WHITE,
  GREY,
  LIGHT_GREY,
  MIDDLE_BLACK,
} from '../constants/color';
import { STATUS_BAR_HEIGHT, DEVICE_WIDTH } from '../constants/deviceConfig';

type Props = NavigationScreenProps & {
  // homeData: HomeObject;
  // fetchHome: (authToken: string, _navigator: any) => void;
};

type ForumDetailSceneState = {
  // isRefresh: boolean;
};

export default class ForumDetailScene extends Component<
  Props,
  ForumDetailSceneState
> {
  // state: EventSceneState = {
  //   isRefresh: false,
  // };

  async componentDidMount() {
    // this._asyncStorage();
  }

  // _asyncStorage = async () => {
  //   let { fetchHome } = this.props;
  //   let userToken = await token.getToken();
  //   let detailId = this.props.navigation.getParam('id');

  //   if (userToken) {
  //     await fetchHome(userToken, this.props.navigation);
  //   }
  // };

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
        </View>
        <View style={styles.body}>
          <ScrollView indicatorStyle="white" style={{ marginBottom: 48 }}>
            <View style={styles.forumDetail}>
              <View style={{ marginTop: 24, marginHorizontal: 16 }}>
                <Text
                  text="WTS Mesin Kopi Nescafe"
                  type="large"
                  newTextStyle={{ marginBottom: 18 }}
                />
                <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                  <Avatar newAvatarStyle={styles.avatar} />
                  <View style={{ marginLeft: 8 }}>
                    <Text
                      text="Lia Eden"
                      type="small"
                      newTextStyle={{ marginBottom: 3, fontWeight: 'normal' }}
                    />
                    <Text
                      text="Learning"
                      type="xsmall"
                      newTextStyle={{ color: GREY }}
                    />
                  </View>
                </View>
                <Text
                  text="26 Juli 2019"
                  type="xsmall"
                  newTextStyle={{ color: LIGHT_GREY }}
                />
                <ScrollView
                  horizontal={true}
                  style={{ flexDirection: 'row', marginTop: 9 }}
                >
                  <Image />
                  <Image />
                </ScrollView>
                <View>
                  <Text
                    text="1850W faster heat up 15 bar. Italian made. Pump 2L water tank with filter. Dedicated hot water. Outlet 250gm on board. Grinder 18, adjustable grind settings & dosage control. Fresh beans to an espresso in under a minute. PID temperature control. Pressure gauge, Low pressure preinfusion"
                    type="xsmall"
                    newTextStyle={{
                      marginTop: 16,
                      marginBottom: 20,
                      color: MIDDLE_BLACK,
                    }}
                  />
                  <Text
                    text="Harga: IDR 14.500.000"
                    type="xsmall"
                    newTextStyle={{ color: MIDDLE_BLACK }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 16,
                  }}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                      name="heart"
                      isActive={false}
                      customStyle={styles.smallIcon}
                      onPress={() => {}}
                    />
                    <Text
                      text="239"
                      type="small"
                      newTextStyle={{
                        marginLeft: 5,
                        fontWeight: 'normal',
                        color: GREY,
                      }}
                    />
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Icon
                      name="share"
                      customStyle={[styles.smallIcon, { marginRight: 12 }]}
                    />
                    <Icon name="report" customStyle={styles.smallIcon} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.forumComments}>
              <View style={{ marginHorizontal: 16 }}>
                <Text
                  text="Komen Terbaru"
                  type="medium"
                  style={{ marginVertical: 18 }}
                />
                <View>
                  <CommentList
                    name="Robert Kiyosaki"
                    date="27 Juli 2019"
                    comment="Mau dong, nego tapi 12 jeti"
                    isLiked={true}
                  />
                  <CommentList
                    name="Thomas Marjiono"
                    date="27 Juli 2019"
                    comment="Mahal betul yak"
                    isLiked={false}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={styles.inputComment}>
            <Icon
              name="attachment"
              customStyle={{ width: 24, height: 24, marginRight: 32 }}
            />
            <TextInput
              placeholder="Add a Comment"
              newInputContainerStyle={{ borderBottomWidth: 0 }}
            />
            <Icon
              name="send"
              customStyle={{ width: 24, height: 24 }}
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    );
  }

  // _renderEvents = () => {
  //   let { homeData } = this.props;

  //   return homeData ? (
  //     <FlatList
  //       onRefresh={this._onRefresh}
  //       refreshing={this.state.isRefresh}
  //       data={homeData.events}
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
//   let { homeState } = state;

//   return {
//     homeData: homeState.homeData,
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
// )(EventScene);

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
  forumDetail: {
    borderBottomWidth: 1,
    paddingBottom: 24,
    borderBottomColor: CUSTOM_WHITE,
  },
  avatar: {
    width: 32,
    height: 32,
  },
  smallIcon: {
    width: 18,
    height: 18,
  },
  forumComments: {},
  inputComment: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: WHITE,
    width: DEVICE_WIDTH,
    height: 48,
    flexDirection: 'row',
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: CUSTOM_WHITE,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
