import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Text, Image } from '../core-ui';
import { CUSTOM_YELLOW } from '../constants/color';

type Props = {
  src?: string | null;
  type: 'horizontal' | 'vertical';
  category: string;
  title: string;
  date: string;
  price: number;
  onPress: () => void;
};

export default function EventList(props: Props) {
  let { src, type, category, title, date, price, onPress } = props;

  const _renderEventListHorizontal = () => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.eventListContainerHorizontal}
      >
        <Image type="event" src={src ? src : null} />
        <Text
          text={category}
          type="xxsmall"
          newTextStyle={styles.categoryEventHorizontal}
        />
        <Text
          text={title}
          type="small"
          newTextStyle={styles.titleEventHorizontal}
          ellipsizeMode="tail"
          numberOfLines={1}
        />
        <Text
          text={date}
          type="xsmall"
          newTextStyle={styles.dateEventHorizontal}
        />
        <Text
          text={'Rp ' + price}
          type="xsmall"
          newTextStyle={styles.priceEventHorizontal}
        />
      </TouchableOpacity>
    );
  };

  const _renderEventListVertical = () => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.eventListContainerVertical}
      >
        <Image type="event" src={src ? src : null} />
        <View style={styles.eventInfoContainer}>
          <Text text={category} type="xxsmall" />
          <Text
            text={title}
            type="small"
            newTextStyle={styles.titleEventVertical}
            ellipsizeMode="tail"
            numberOfLines={1}
          />
          <Text
            text={date}
            type="xsmall"
            newTextStyle={styles.dateEventVertical}
          />
          <Text
            text={'Rp ' + price}
            type="xsmall"
            newTextStyle={styles.priceEventVertical}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return type === 'horizontal'
    ? _renderEventListHorizontal()
    : _renderEventListVertical();
}

const styles = StyleSheet.create({
  eventListContainerHorizontal: {
    maxWidth: 120,
    marginRight: 16,
  },
  categoryEventHorizontal: {
    marginTop: 5,
  },
  titleEventHorizontal: {
    fontWeight: 'bold',
    marginTop: 2,
  },
  dateEventHorizontal: {
    marginTop: 2,
  },
  priceEventHorizontal: {
    color: CUSTOM_YELLOW,
    fontWeight: 'bold',
    marginTop: 2,
  },
  eventListContainerVertical: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  eventInfoContainer: {
    paddingLeft: 12,
  },
  titleEventVertical: {
    fontWeight: 'bold',
    marginTop: 2,
  },
  dateEventVertical: {
    marginTop: 2,
  },
  priceEventVertical: {
    color: CUSTOM_YELLOW,
    fontWeight: 'bold',
    marginTop: 2,
  },
});
