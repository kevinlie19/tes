import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Text, Avatar, Icon } from '../core-ui';
import { GREY, CUSTOM_RED, MIDDLE_BLACK, LIGHT_GREY } from '../constants/color';

type Props = {
  avatar?: string | null;
  isLiked?: boolean;
  name: string;
  date: string;
  comment: string;
  likes: number;
  onPressLike: () => void;
};

export default function CommentList(props: Props) {
  let { avatar, isLiked, name, date, comment, likes, onPressLike } = props;

  return (
    <View style={styles.commentListContainer}>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}>
        <Avatar src={avatar} newAvatarStyle={{ width: 32, height: 32 }} />
        <View style={{ marginLeft: 8 }}>
          <Text
            text={name}
            type="small"
            newTextStyle={{ marginBottom: 3, color: MIDDLE_BLACK }}
          />
          <Text text="Learning" type="xsmall" newTextStyle={{ color: GREY }} />
        </View>
      </View>
      <Text text={date} type="xsmall" newTextStyle={{ color: LIGHT_GREY }} />
      <View style={{ marginBottom: 19 }}>
        <Text text={comment} type="medium" newTextStyle={{ marginTop: 8 }} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 29,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon
            name="heart"
            isActive={isLiked && isLiked === true ? true : false}
            customStyle={styles.smallIcon}
            onPress={onPressLike}
          />
          <Text
            text={likes.toString()}
            type="small"
            newTextStyle={{
              marginLeft: 5,
              fontWeight: 'normal',
              color: isLiked && isLiked === true ? CUSTOM_RED : GREY,
            }}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Icon
            name="share"
            customStyle={[styles.smallIcon, { marginRight: 12 }]}
          />
          <Icon name="report" customStyle={styles.smallIcon} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  commentListContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
  },
  infoContainer: {
    paddingLeft: 27,
  },
  dateComment: {
    color: GREY,
    paddingVertical: 6,
  },
  smallIcon: {
    width: 18,
    height: 18,
  },
});
