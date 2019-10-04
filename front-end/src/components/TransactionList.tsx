import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  StyleProp,
  TextStyle,
} from 'react-native';

import { Text } from '../core-ui';
import { CUSTOM_WHITE, GREY, LIGHT_GREY } from '../constants/color';

type Props = {
  newTextStyle?: StyleProp<TextStyle>;
  icon: JSX.Element;
  transactionTitle: string;
  date: string;
  status?: string;
  onPress: () => void;
};

export default function TransactionList(props: Props) {
  let { newTextStyle, icon, transactionTitle, date, status, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.transactionListContainer}>
      <View style={styles.contentContainer}>
        {icon}
        <View style={styles.infoContainer}>
          <Text text={transactionTitle} type="medium" />
          <Text
            text={date}
            type="small"
            newTextStyle={styles.dateTransaction}
          />
          {status ? (
            <View style={styles.contentContainer}>
              <Text
                text="Status: "
                type="xsmall"
                newTextStyle={styles.status}
              />
              <Text text={status} type="xsmall" newTextStyle={newTextStyle} />
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  transactionListContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 65,
    paddingHorizontal: 27,
    marginTop: 24,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_WHITE,
  },
  contentContainer: {
    flexDirection: 'row',
  },
  infoContainer: {
    paddingLeft: 27,
  },
  dateTransaction: {
    color: GREY,
    paddingVertical: 6,
  },
  status: {
    color: LIGHT_GREY,
  },
});
