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
    <TouchableOpacity onPress={onPress} style={styles.eventListContainer}>
      <Image type="event" />
      <Text
        text={category}
        type="xxsmall"
        newTextStyle={styles.categoryEvent}
      />
      <Text
        text={title}
        type="small"
        newTextStyle={styles.titleEvent}
        ellipsizeMode="tail"
        numberOfLines={1}
      />
      <Text text={date} type="xsmall" newTextStyle={styles.dateEvent} />
      <Text text={price} type="xsmall" newTextStyle={styles.priceEvent} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  eventListContainer: {
    maxWidth: 120,
    marginRight: 16,
  },
  categoryEvent: {
    marginTop: 8,
  },
  titleEvent: {
    fontWeight: 'bold',
    marginTop: 4,
  },
  dateEvent: {
    marginTop: 4,
  },
  priceEvent: {
    color: CUSTOM_YELLOW,
    fontWeight: 'bold',
    marginTop: 4,
  },
});
