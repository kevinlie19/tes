import React from 'react';
import {
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';

import { Text } from '../core-ui';
import {
  LIGHT_GREY,
  CUSTOM_WHITE,
  DARK_GREY,
  CUSTOM_RED,
  WHITE,
} from '../constants/color';

type Props = {
  newContainerStyle?: StyleProp<ViewStyle>;
  date: string;
  inboxTitle: string;
  onRightPress: () => void;
};

export default function InboxList(props: Props) {
  let { newContainerStyle, date, inboxTitle, onRightPress } = props;

  // @ts-ignore
  const RightActions = ({ progress, dragX, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.rightAction}>
          <Animated.Text style={styles.actionText}>Delete</Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable
      renderRightActions={(progress, dragX) => (
        <RightActions
          progress={progress}
          dragX={dragX}
          onPress={onRightPress}
        />
      )}
    >
      <View style={[styles.inboxListContainer, newContainerStyle]}>
        <Text text={date} type="xsmall" newTextStyle={styles.dateInbox} />
        <Text
          text={inboxTitle}
          type="medium"
          newTextStyle={styles.titleInbox}
        />
      </View>
    </Swipeable>
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
  rightAction: {
    backgroundColor: CUSTOM_RED,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  actionText: {
    color: WHITE,
    fontWeight: '600',
    padding: 20,
  },
});
