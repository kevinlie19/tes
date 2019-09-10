import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, Image } from '../core-ui';
import { CUSTOM_YELLOW } from '../constants/color';

type Props = {
  category: string;
  title: string;
  date: string;
  price: string;
  onPress: () => void;
};

export default function EventList(props: Props) {
  let { category, title, date, price, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Image type="event" />
      <Text text={category} type="xxsmall" />
      <Text text={title} type="small" newTextStyle={styles.titleEvent} />
      <Text text={date} type="xsmall" />
      <Text text={price} type="xsmall" newTextStyle={styles.priceEvent} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  titleEvent: {
    fontWeight: 'bold',
  },
  priceEvent: {
    color: CUSTOM_YELLOW,
    fontWeight: 'bold',
  },
});
