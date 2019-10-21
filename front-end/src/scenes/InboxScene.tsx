import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';

import { Icon, Text } from '../core-ui';
import { InboxList } from '../components';
import {
  CUSTOM_BLACK,
  CUSTOM_YELLOW,
  CUSTOM_WHITE,
  WHITE,
} from '../constants/color';
import { STATUS_BAR_HEIGHT } from '../constants/deviceConfig';
import { RootState } from '../types/State';
import { InboxObject } from '../types/Commons';
import { token } from '../helpers';

type Props = NavigationScreenProps & {
  inboxData: InboxObject;
  fetchInbox: (authToken: string) => void;
  fetchDeleteInbox: (authToken: string, inboxId: string) => void;
};

type InboxSceneState = {
  isRefresh: boolean;
};

export class InboxScene extends Component<Props, InboxSceneState> {
  state: InboxSceneState = {
    isRefresh: false,
  };

  async componentDidMount() {
    this._asyncStorage();
  }

  _asyncStorage = async () => {
    let { fetchInbox } = this.props;
    let userToken = await token.getToken();

    if (userToken) {
      await fetchInbox(userToken);
    }
  };

  render() {
    let { inboxData } = this.props;

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
          <FlatList
            style={styles.inboxList}
            onRefresh={this._onRefresh}
            refreshing={this.state.isRefresh}
            data={inboxData}
            extraData={this.state}
            renderItem={({ item }) => {
              return (
                <InboxList
                  date={dateFormat(item.inbox_date, 'dd mmmm yyyy')}
                  inboxTitle={item.message}
                  onRightPress={() => this._onPressDelete(item.id)}
                />
              );
            }}
            keyExtractor={(index, item) => item.toString()}
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

  async _onPressDelete(inboxId: string) {
    let { fetchDeleteInbox } = this.props;
    let userToken = await token.getToken();

    if (userToken) {
      await fetchDeleteInbox(userToken, inboxId);
    }
  }
}

let mapStateToProps = (state: RootState) => {
  let { inboxState } = state;

  return {
    inboxData: inboxState.inboxData,
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchInbox: (authToken: string) => {
      dispatch({ type: 'INBOX_REQUESTED', authToken });
    },
    fetchDeleteInbox: (authToken: string, inboxId: string) => {
      dispatch({ type: 'DELETE_INBOX_REQUESTED', authToken, inboxId });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InboxScene);

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
    marginTop: 24,
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
