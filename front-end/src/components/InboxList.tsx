import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Text } from '../core-ui';
import { LIGHT_GREY, CUSTOM_WHITE, DARK_GREY } from '../constants/color';

type Props = {
  date: string;
  inboxTitle: string;
  onPress?: () => void;
};

export default function InboxList(props: Props) {
  let { date, inboxTitle, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.inboxListContainer}>
      <View>
        <Text text={date} type="xsmall" newTextStyle={styles.dateInbox} />
        <Text
          text={inboxTitle}
          type="medium"
          newTextStyle={styles.titleInbox}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  inboxListContainer: {
    flexDirection: 'column',
    height: 65,
    paddingHorizontal: 16,
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_WHITE,
  },
  dateInbox: {
    color: LIGHT_GREY,
    paddingBottom: 5,
  },
  titleInbox: {
    color: DARK_GREY,
  },
});
