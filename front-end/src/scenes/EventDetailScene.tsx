import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationScreenProps, FlatList, ScrollView } from 'react-navigation';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';

import { token } from '../helpers';
import { EventObject } from '../types/Commons';
import { RootState } from '../types/State';
import {
  MIDDLE_BLACK,
  WHITE,
  CUSTOM_YELLOW,
  DARK_GREY,
} from '../constants/color';
import { Icon, Image, Text, Button } from '../core-ui';

type Props = NavigationScreenProps & {
  eventDetailData: EventObject;
  fetchEventDetail: (authToken: string, _navigator: any) => void;
};

type EventDetailSceneState = {
  countTicket: number;
};

export class EventDetailScene extends Component<Props, EventDetailSceneState> {
  state: EventDetailSceneState = {
    countTicket: 1,
  };

  async componentWillMount() {
    this._asyncStorage();
  }

  _asyncStorage = async () => {
    let { fetchEventDetail } = this.props;
    let userToken = await token.getToken();

    if (userToken) {
      await fetchEventDetail(userToken, this.props.navigation);
    }
  };

  render() {
    let { eventDetailData } = this.props;
    let { countTicket } = this.state;

    let src = this.props.eventDetailData.image;
    let listInclude: Array<String> = eventDetailData.description.split(', ');

    return (
      <View style={styles.container}>
        <View style={styles.navbarContainer}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon name="arrowBack" customStyle={styles.arrowBack} />
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            <Image type="xLarge" src={src} />
          </View>
        </View>
        <View style={styles.eventInfoContainer}>
          <Text
            text={eventDetailData.event_name}
            type="large"
            newTextStyle={styles.textWhite}
          />
          <Text
            text={dateFormat(eventDetailData.event_date, 'dd mmmm yyyy')}
            type="medium"
            newTextStyle={styles.textWhite}
          />
          <View style={styles.locationContainer}>
            <Text
              text={eventDetailData.place}
              type="medium"
              newTextStyle={styles.textWhite}
            />
            <Icon name="location" isActive={true} customStyle={styles.icon} />
          </View>

          <Text
            text={'Rp ' + eventDetailData.price}
            type="mlarge"
            newTextStyle={styles.textPrice}
          />
        </View>
        <ScrollView style={styles.detailContainer}>
          <Text text="Include:" type="medium" newTextStyle={styles.textBold} />
          <FlatList
            style={styles.listIncludeContainer}
            data={listInclude}
            renderItem={({ item }) => (
              <View style={styles.textIncludeContainer}>
                <Text type="medium" text="- " newTextStyle={styles.greyText} />
                <Text
                  type="medium"
                  text={item}
                  newTextStyle={styles.greyText}
                />
              </View>
            )}
            keyExtractor={(item) => String(item)}
          />
          <Text
            text="Buy Ticket:"
            type="medium"
            newTextStyle={styles.textBold}
          />
          <View style={styles.buyTicketContainer}>
            <Text
              text="Regular Class"
              type="medium"
              newTextStyle={styles.greyText}
            />
            <View style={styles.iconTicketContainer}>
              <Icon
                name="minus"
                customStyle={styles.icon}
                onPress={() =>
                  this._onPressMinus(
                    countTicket,
                    eventDetailData.available_seat,
                  )
                }
              />
              <Text
                text={String(countTicket)}
                type="medium"
                newTextStyle={styles.countTicketText}
              />
              <Icon
                name="add"
                customStyle={styles.icon}
                onPress={() =>
                  this._onPressAdd(countTicket, eventDetailData.available_seat)
                }
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.reserveButtonContainer}>
          <Button
            buttonType="primary"
            text="RESERVE NOW"
            newStyleText={styles.buttonText}
            onPress={() => this.props.navigation.navigate('MyTicket')}
          />
        </View>
      </View>
    );
  }

  _onPressMinus(prevCount: number, available_seat: number) {
    if (prevCount > 1 && prevCount <= available_seat) {
      this.setState({
        countTicket: prevCount - 1,
      });
    }
  }

  _onPressAdd(prevCount: number, available_seat: number) {
    if (prevCount >= 1 && prevCount < available_seat) {
      this.setState({
        countTicket: prevCount + 1,
      });
    }
  }
}

let mapStateToProps = (state: RootState) => {
  let { eventDetailState } = state;

  return {
    eventDetailData: eventDetailState.eventDetailData,
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchEventDetail: (authToken: string, _navigator: any) => {
      dispatch({ type: 'FETCH_EVENT_DETAIL_REQUESTED', authToken, _navigator });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventDetailScene);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbarContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    position: 'absolute',
    left: 16,
    top: 40,
    bottom: 0,
  },
  arrowBack: {
    width: 24,
    height: 24,
  },
  imageContainer: {
    width: '100%',
    zIndex: -100,
  },
  eventInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: MIDDLE_BLACK,
    height: 146,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  textWhite: {
    color: WHITE,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 20,
    height: 20,
  },
  textPrice: {
    color: CUSTOM_YELLOW,
  },
  detailContainer: {
    paddingTop: 24,
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  textBold: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  listIncludeContainer: {
    marginBottom: 24,
  },
  textIncludeContainer: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  greyText: {
    color: DARK_GREY,
  },
  countTicketText: {
    alignSelf: 'center',
  },
  buyTicketContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconTicketContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 70,
  },
  reserveButtonContainer: {
    position: 'absolute',
    bottom: 16,
    width: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonText: {
    fontWeight: 'normal',
  },
});
