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
  isOngoing: boolean;
};

export default class MyTransactionScene extends Component<Props, State>{
  state: State = {
    isOngoing: true,
  };
  render(){
    let {isOngoing} = this.state;

    return(
      <View style={styles.container}>
          <View style={styles.navbar}>
            <View style={styles.navbarContainer}>
              <Icon name="logo" customStyle={styles.logo} />
  
              <Text
                text="My Transaction"
                type="headerTitle"
                newTextStyle={styles.titleText}
              />
  
              <Icon name="qr" customStyle={styles.smallIcon} />
            </View>
          </View>

          <View style={styles.navbar}>
            <View style={styles.transactionContainer}>
              <TouchableOpacity style={styles.menus}>
                onPress = {() => this.setState({isOngoing:true})}
                <Text
                  text="ONGOING"
                  type="mlarge"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.transactionContainer}>
            <TouchableOpacity style={styles.menus}>
              onPress={() => this.setState({isOngoing:false})}
                <Text
                  text="HISTORY"
                  type="mlarge"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.body}>
            {/* <Icon name="membership" customStyle={styles.smallIcon}/> */}
            {isOngoing === true ? renderOngoing() : renderHistory()}
          </View>
      </View>
    );
  }
  
};

const renderOngoing = () => {
  <div>
  <View style={styles.transactionContentContainer}>
    <Icon name="membership" customStyle={styles.memberIcon}/>
  </View>
  <View style={styles.transactionContentContainer}>
    <Icon name="event" customStyle={styles.memberIcon}/>
  </View>
  </div>
};

const renderHistory = () => (
    <div>
    <View style={styles.transactionContentContainer}>
      <Icon name="membership" customStyle={styles.memberIcon}/>
    </View>
    <View style={styles.transactionContentContainer}>
      <Icon name="event" customStyle={styles.memberIcon}/>
    </View>
    </div>
);

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
  transactionContentContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
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
  transactionContainer:{
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center'
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
  dividerInfo: {
    borderLeftWidth: 1,
    borderLeftColor: CUSTOM_WHITE,
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
