import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Text, Icon, Button } from '../core-ui';
import {
  CUSTOM_BLACK,
  CUSTOM_WHITE,
  DARK_GREY,
  CUSTOM_YELLOW,
} from '../constants/color';
import { STATUS_BAR_HEIGHT } from '../constants/deviceConfig';

type Props = NavigationScreenProps & {};

type PaymentSceneState = {};

export default class PaymentScene extends Component<Props, PaymentSceneState> {
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
              text="Payment"
              type="headerTitle"
              newTextStyle={styles.titleText}
            />
            <View />
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.headerInfoContainer}>
            <Text text="Bills" type="medium" newTextStyle={styles.billsText} />
            <View style={styles.textContainerRow}>
              <Text
                text="Upgrade Membership"
                type="medium"
                newTextStyle={styles.normalGreyText}
              />
              <Text
                text="IDR 1.350.000"
                type="medium"
                newTextStyle={styles.boldGreyText}
              />
            </View>
            <View style={styles.textContainerRow}>
              <Text
                text="Convenience Fee"
                type="medium"
                newTextStyle={styles.normalGreyText}
              />
              <Text
                text="IDR 132"
                type="medium"
                newTextStyle={styles.boldGreyText}
              />
            </View>
          </View>

          <View style={styles.totalPriceContainer}>
            <View style={styles.textContainerRow}>
              <Text
                text="Total"
                type="medium"
                newTextStyle={styles.normalGreyText}
              />
              <Text
                text="IDR 1.350.132"
                type="medium"
                newTextStyle={styles.priceText}
              />
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.textContainerColumn}>
                <View style={styles.paymentGuideTextStyle}>
                  <Text
                    text="Payment Guide"
                    type="medium"
                    newTextStyle={styles.boldGreyText}
                  />
                </View>
                <View style={styles.transferTextStyle}>
                  <Text
                    text="Transfer the exact amount of total to the account below and wait for authentication"
                    type="small"
                    newTextStyle={styles.normalGreyText}
                  />
                </View>
                <View style={styles.textContainerRow}>
                  <View style={styles.textContainerColumn}>
                    <Text
                      text="BANK NAME"
                      type="small"
                      newTextStyle={styles.normalGreyText}
                    />
                    <Text
                      text="ACCOUNT NUMBER"
                      type="small"
                      newTextStyle={styles.normalGreyText}
                    />
                    <Text
                      text="ACCOUNT NAME"
                      type="small"
                      newTextStyle={styles.normalGreyText}
                    />
                  </View>
                  <View style={styles.textContainerColumn}>
                    <Text
                      text=":"
                      type="small"
                      newTextStyle={styles.normalGreyText}
                    />
                    <Text
                      text=":"
                      type="small"
                      newTextStyle={styles.normalGreyText}
                    />
                    <Text
                      text=":"
                      type="small"
                      newTextStyle={styles.normalGreyText}
                    />
                  </View>
                  <View style={styles.textContainerColumn}>
                    <Text
                      text="BCA"
                      type="small"
                      newTextStyle={styles.normalGreyText}
                    />
                    <Text
                      text="830192390182"
                      type="small"
                      newTextStyle={styles.normalGreyText}
                    />
                    <Text
                      text="THE ENTREPRENEURS SOCIETY"
                      type="small"
                      newTextStyle={styles.normalGreyText}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Button
          buttonType="primary"
          text="PAY NOW"
          onPress={() =>
            this.props.navigation.navigate('ConfirmUpgradeMembership')
          }
          newStyleButton={styles.buttonContainer}
          newStyleText={styles.normalTextButton}
        />
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
    paddingRight: 17,
  },
  body: {
    flex: 7,
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 16,
  },
  headerInfoContainer: {
    flexDirection: 'column',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_WHITE,
  },
  textContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  textContainerColumn: {
    flexDirection: 'column',
    paddingBottom: 16,
  },
  totalPriceContainer: {
    marginTop: 24,
  },
  contentContainer: {
    marginTop: 24,
  },
  paymentGuideTextStyle: {
    marginBottom: 5,
  },
  transferTextStyle: {
    marginBottom: 16,
  },
  billsText: {
    marginBottom: 12,
  },
  boldGreyText: {
    color: DARK_GREY,
    fontWeight: 'bold',
  },
  priceText: {
    color: CUSTOM_YELLOW,
    fontWeight: 'bold',
  },
  normalGreyText: {
    color: DARK_GREY,
    fontWeight: 'normal',
  },
  buttonContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 16,
  },
  normalTextButton: {
    fontWeight: 'normal',
  },
});
