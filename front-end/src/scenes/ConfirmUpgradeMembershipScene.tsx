import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { CUSTOM_BLACK, WHITE, CUSTOM_YELLOW } from '../constants/color';
import { STATUS_BAR_HEIGHT } from '../constants/deviceConfig';
import { Icon, Text, Button } from '../core-ui';

type Props = NavigationScreenProps & {};

type ConfirmUpgradeMembershipSceneState = {};

export default class ConfirmUpgradeMembershipScene extends Component<
  Props,
  ConfirmUpgradeMembershipSceneState
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
          <View
            style={{ alignItems: 'center', marginTop: 168, marginBottom: 24 }}
          >
            <Icon
              name="membership"
              isActive={false}
              customStyle={styles.iconMembership}
            />
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text
              text="You are now a"
              type="mlarge"
              newTextStyle={styles.normalText}
            />
            <View style={{ flexDirection: 'row' }}>
              <Text
                text="PREMIUM"
                type="mlarge"
                newTextStyle={{ fontWeight: 'normal', color: CUSTOM_YELLOW }}
              />
              <Text
                text=" Member"
                type="mlarge"
                newTextStyle={styles.normalText}
              />
            </View>
          </View>
          <Button
            buttonType="primary"
            text="THANKS!"
            onPress={() => this.props.navigation.navigate('Home')}
            newStyleButton={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 16,
            }}
            newStyleText={{ fontWeight: 'normal' }}
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
  iconMembership: {
    width: 80,
    height: 80,
  },
  normalText: {
    fontWeight: 'normal',
  },
});
