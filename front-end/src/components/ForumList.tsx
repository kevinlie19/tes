import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Text, Image, Icon } from '../core-ui';
import { LIGHT_GREY, CUSTOM_WHITE, DARK_GREY, GREY } from '../constants/color';

type Props = {
  thumbnail?: string | null;
  type: 'Umum' | 'Jual' | 'Beli';
  date: string;
  forumTitle: string;
  starter: string;
  comments: number;
  onPress?: () => void;
};

export default function ForumList(props: Props) {
  let { thumbnail, type, date, forumTitle, starter, comments, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.forumListContainer}>
      {thumbnail && thumbnail !== null ? (
        <Image
          src={thumbnail}
          type="square"
          newImageStyle={styles.imageContainer}
        />
      ) : (
        <View style={styles.iconContainer}>
          {type === 'Umum' ? (
            <Icon name="forum" isActive={true} customStyle={styles.forumIcon} />
          ) : (
            <Icon name="cart" isActive={true} customStyle={styles.forumIcon} />
          )}
        </View>
      )}

      <View style={styles.infoContainer}>
        <Text text={date} type="xsmall" newTextStyle={styles.lightGreyText} />
        <Text
          text={forumTitle}
          type="medium"
          newTextStyle={styles.titleForum}
        />
        <Text
          text={'Starter: ' + starter}
          type="small"
          newTextStyle={styles.starterForum}
        />
        <Text
          text={'Comment: ' + comments}
          type="xsmall"
          newTextStyle={styles.lightGreyText}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  forumListContainer: {
    flexDirection: 'row',
    height: 95,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: CUSTOM_WHITE,
  },
  imageContainer: {
    marginRight: 16,
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: 9,
  },
  iconContainer: {
    width: 54,
    height: 54,
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 16,
  },
  forumIcon: {
    width: 32,
    height: 32,
  },
  infoContainer: {
    flexDirection: 'column',
  },
  lightGreyText: {
    color: LIGHT_GREY,
  },
  titleForum: {
    color: DARK_GREY,
    marginTop: 4,
    marginBottom: 6,
  },
  starterForum: {
    color: GREY,
    marginBottom: 6,
  },
});
