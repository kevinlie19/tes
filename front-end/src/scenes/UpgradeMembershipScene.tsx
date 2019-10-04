import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import { CUSTOM_BLACK, WHITE, CUSTOM_YELLOW } from '../constants/color';
import { STATUS_BAR_HEIGHT } from '../constants/deviceConfig';
import { Icon, Text, Button } from '../core-ui';

type Props = NavigationScreenProps & {};

type UpgradeMembershipSceneState = {};

export default class SignInScene extends Component<
  Props,
  UpgradeMembershipSceneState
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
          <View style={{ alignItems: 'center', marginTop: 48 }}>
            <Icon
              name="membership"
              isActive={false}
              customStyle={styles.iconMembership}
            />
          </View>
          <View
            style={{ flexDirection: 'row', marginTop: 16, marginBottom: 24 }}
          >
            <Text text="Upgrade to " type="mlarge" />
            <Text
              text="PREMIUM"
              type="mlarge"
              newTextStyle={{ color: CUSTOM_YELLOW }}
            />
          </View>

          <Text text="You will get:" type="medium" />

          <View style={{ marginTop: 16, marginBottom: 40 }}>
            <Text text="1. Booth discount - 5% (platinum only)" type="small" />
            <Text
              text="2. VIP registration/seating at the general"
              type="small"
            />
            <Text
              text="     session - 50 (platinum), 30 (gold), 15"
              type="small"
            />
            <Text text="     (silver), 5 (bronze)" type="small" />
            <Text text="3. Premium badge recognition" type="small" />
            <Text text="4. Premium level acknowledgment booth" type="small" />
            <Text
              text="     carpet decals - 2 (platinum), 1 (gold)"
              type="small"
            />
            <Text text="5. show floor acknowledgment signage" type="small" />
            <Text text="6. Premium level acknowledgment table" type="small" />
            <Text text="     signs" type="small" />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text
              text="ID"
              type="medium"
              newTextStyle={{ paddingTop: 12, paddingRight: 24 }}
            />
            <Text
              text="1.350.000"
              type="xlarge"
              newTextStyle={{ color: CUSTOM_YELLOW }}
            />
          </View>

          <Button
            buttonType="primary"
            text="UPGRADE NOW"
            onPress={() =>
              this.props.navigation.navigate('ProceedUpgradeMembership')
            }
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
});
