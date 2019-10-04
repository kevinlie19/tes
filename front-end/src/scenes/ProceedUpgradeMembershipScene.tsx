import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { CUSTOM_BLACK, WHITE } from '../constants/color';
import { STATUS_BAR_HEIGHT } from '../constants/deviceConfig';
import { Icon, Text, Button } from '../core-ui';

type Props = NavigationScreenProps & {};

type ProceedUpgradeMembershipSceneState = {};

export default class ProceedUpgradeMembershipScene extends Component<
  Props,
  ProceedUpgradeMembershipSceneState
> {
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
              text="Upgrade Membership"
              type="headerTitle"
              newTextStyle={styles.titleText}
            />
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.iconContainer}>
            <Icon
              name="membership"
              isActive={false}
              customStyle={styles.iconMembership}
            />
          </View>
          <View style={styles.contentContainer}>
            <Text
              text="Please proceed to payment to upgrade your"
              type="mlarge"
              newTextStyle={styles.normalText}
            />
            <Text
              text="membership status"
              type="mlarge"
              newTextStyle={styles.normalText}
            />
          </View>
          <Button
            buttonType="primary"
            text="PROCEED TO PAYMENT"
            onPress={() => this.props.navigation.navigate('Payment')}
            newStyleButton={styles.buttonContainer}
            newStyleText={styles.normalText}
          />
        </View>
      </View>
    );
  }
}

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
    paddingRight: 75,
  },
  body: {
    flex: 7,
    backgroundColor: WHITE,
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 168,
    marginBottom: 24,
  },
  iconMembership: {
    width: 80,
    height: 80,
  },
  contentContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 16,
  },
  normalText: {
    fontWeight: 'normal',
  },
});
