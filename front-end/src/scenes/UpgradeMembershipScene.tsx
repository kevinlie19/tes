import React, { Component } from 'react';
import { StyleSheet, View,  TouchableOpacity, ScrollView } from 'react-native';
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

import { Icon, Text, Image, Button } from '../core-ui';
import { STATUS_BAR_HEIGHT } from '../constants/deviceConfig';

type Props = NavigationScreenProps & {};

type State = {
  isPremium: boolean;
};

export default class UpgradeMembershipScene extends Component<Props, State> {
  state: State = {
    isPremium: false,
  };
  render() {
    let { isPremium } = this.state;
    
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <View style={styles.navbarContainer}>
            <Text
              text= "Upgrade Membership"
              type= "headerTitle"
              newTextStyle={styles.titleText}
            />
        </View>
        </View>
     
        <View style={styles.body}>
        <Icon
            name="membership"
            isActive={false}
            customStyle={styles.memberIcon}
            />
        <View style={styles.tulisan}>
          <Text text=" Upgrade to " type="large" newTextStyle={styles.textUpgrade}/>
          <Text text={isPremium ? 'Premium' : 'PREMIUM'}
                      type="large"
                      newTextStyle={styles.upgradeText} ></Text>
        </View>
        <View style={styles.getText}>
          <Text text=" You will get : " type="medium"/>
        </View>
       
         <View style={styles.descText}>
            
            <Text text=" 1. Booth Discount - 5% (platinum only) " type="medium"/>
            <Text text=" 2. VIP registration/seating at the general session - 50%(platinum), 30(gold), 15(silver), 5(bronze)" type="medium"/>
            <Text text=" 3. Premium badge recognition" type="medium"/>
            <Text text=" 4. Premium level acknowledgement boot carpet decals - 2(platinum), 1(gold)" type="medium"/>
            <Text text=" 5. Show floor acknowledgement signage " type="medium"/>
            <Text text=" 6. Premium level acknowledgement table signs" type="medium"/>
        </View>

        <View style={styles.idrText}>
          <Text text="IDR" type="small" newTextStyle={styles.smallText}></Text>
          <Text text="1.350.000 " type="xlarge" newTextStyle={styles.priceText}/>
        </View>
        
        <TouchableOpacity>
            <Button
            buttonType="primary"
            text="UPGRADE NOW"
            newStyleText={styles.textButton}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
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
  titleText: {
    paddingRight: 20,
  },
  body: {
    flex: 7,
    backgroundColor: WHITE,
  },
  button:{
    paddingTop: 25,
  },
  textButton: {
    fontWeight: 'bold',
    alignItems: 'center',
  },
  icon:{
    width:100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  memberIcon: {
    width: 80,
    height: 80,
    alignItems: 'center',
    marginLeft: 140,
    marginTop: 120,
  },
  textUpgrade:{
    marginLeft: 100 ,
  },
  tulisan:{
    flexDirection:'row',
    width: 328,
    height:30,
    marginTop:16,
  },
  upgradeText: {
    color: CUSTOM_YELLOW,
  },
  priceText: {
    color: CUSTOM_YELLOW,
    fontWeight: 'bold',
    alignItems:'center',
    textAlign:'center',
  },
  descText:{
    marginTop:20,
    marginBottom:20,
    marginLeft: 20,
    marginRight:20,
  },
  getText:{
    marginTop: 16,
    marginLeft: 130,
  },
  idrText:{
    flexDirection:'row',
    marginTop:20,
    marginBottom:20,
    marginLeft: 75,
  },
  smallText:{
    marginTop: 12,
  }
});
