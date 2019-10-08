import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import QRCode from 'react-native-qrcode-svg';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';

import { token } from '../helpers';
import { EventObject, UserObject } from '../types/Commons';
import { RootState } from '../types/State';
import {
  CUSTOM_BLACK,
  WHITE,
  CUSTOM_WHITE,
  DARK_GREY,
  MIDDLE_BLACK,
} from '../constants/color';
import { STATUS_BAR_HEIGHT } from '../constants/deviceConfig';
import { Text, Icon } from '../core-ui';

type Props = NavigationScreenProps & {
  eventDetailData: EventObject;
  accountData: UserObject;
  fetchEventDetail: (authToken: string, _navigator: any) => void;
  fetchMyAccount: (authToken: string) => void;
};

type MyTicketSceneState = {};

export class MyTicketScene extends Component<Props, MyTicketSceneState> {
  state: MyTicketSceneState = {};

  async componentWillMount() {
    this._asyncStorage();
  }

  _asyncStorage = async () => {
    let { fetchEventDetail, fetchMyAccount } = this.props;
    let userToken = await token.getToken();

    if (userToken) {
      await fetchEventDetail(userToken, this.props.navigation);
      await fetchMyAccount(userToken);
    }
  };

  render() {
    let { eventDetailData, accountData } = this.props;

    let fullName = accountData.first_name + ' ' + accountData.last_name;

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
              text="My Ticket"
              type="headerTitle"
              newTextStyle={styles.titleText}
            />
            <View />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.qrContainer}>
            <QRCode value="https://macroad.com/" size={200} />
          </View>
          <View style={styles.textContainerColumn}>
            <Text
              text={eventDetailData.event_name}
              type="large"
              newTextStyle={styles.greyText}
            />
            <Text
              text={dateFormat(eventDetailData.event_date, 'dd mmmm yyyy')}
              type="medium"
              newTextStyle={[styles.textContainer, styles.greyText]}
            />
            <View style={styles.textContainerRow}>
              <Text
                text={eventDetailData.place}
                type="medium"
                newTextStyle={styles.greyText}
              />
              <Icon
                name="location"
                isActive={false}
                customStyle={styles.iconLocation}
              />
            </View>
          </View>
          <View style={styles.divider}></View>
          <View style={styles.textContainerColumn}>
            <Text
              text="Ticket Information"
              type="medium"
              newTextStyle={styles.boldText}
            />
            <Text
              text={`Attendant: ${fullName}`}
              type="medium"
              newTextStyle={styles.greyText}
            />
            <Text
              text="Regular Class Ticket"
              type="medium"
              newTextStyle={styles.greyText}
            />
          </View>
        </View>
      </View>
    );
  }
}

let mapStateToProps = (state: RootState) => {
  let { eventDetailState, accountState } = state;

  return {
    eventDetailData: eventDetailState.eventDetailData,
    accountData: accountState.accountData,
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchEventDetail: (authToken: string, _navigator: any) => {
      dispatch({ type: 'FETCH_EVENT_DETAIL_REQUESTED', authToken, _navigator });
    },
    fetchMyAccount: (authToken: string) => {
      dispatch({ type: 'ACCOUNT_REQUESTED', authToken });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyTicketScene);

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
  qrContainer: {
    marginVertical: 50,
    alignItems: 'center',
  },
  textContainerColumn: {
    flexDirection: 'column',
    paddingHorizontal: 16,
  },
  textContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    marginVertical: 12,
  },
  iconLocation: {
    width: 18,
    height: 18,
  },
  boldText: {
    fontWeight: 'bold',
    color: MIDDLE_BLACK,
    marginBottom: 8,
  },
  greyText: {
    color: DARK_GREY,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_WHITE,
    marginVertical: 24,
  },
});
