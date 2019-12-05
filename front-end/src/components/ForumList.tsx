import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Text, Image, Icon } from '../core-ui';
import { LIGHT_GREY, CUSTOM_WHITE, DARK_GREY, GREY } from '../constants/color';

type Props = {
  thumbnail?: string | null;
  type: 'All' | 'Latest';
  category: 'Umum' | 'Jual' | 'Beli';
  date?: string;
  forumTitle: string;
  starter: string;
  comments?: number;
  latestComment?: string;
  onPress?: () => void;
};

export default function ForumList(props: Props) {
  let {
    thumbnail,
    type,
    category,
    date,
    forumTitle,
    starter,
    comments,
    latestComment,
    onPress,
  } = props;

  return type === 'All' ? (
    <TouchableOpacity onPress={onPress} style={styles.forumListContainer}>
      {thumbnail && thumbnail !== null ? (
        <Image
          src={thumbnail}
          type="square"
          newImageStyle={styles.imageContainer}
        />
      ) : (
        <View style={styles.iconContainer}>
          {category === 'Umum' ? (
            <Icon name="forum" isActive={true} customStyle={styles.forumIcon} />
          ) : (
            <Icon name="cart" isActive={true} customStyle={styles.forumIcon} />
          )}
        </View>
      )}

      <View style={styles.infoContainer}>
        <Text
          text={date ? date : ''}
          type="xsmall"
          newTextStyle={styles.lightGreyText}
        />
        <Text
          text={forumTitle}
          type="medium"
          newTextStyle={styles.titleForum}
          ellipsizeMode="tail"
          numberOfLines={1}
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
  ) : (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.forumListContainer,
        { borderBottomWidth: 0, paddingHorizontal: 0, marginBottom: 0 },
      ]}
    >
      {thumbnail && thumbnail !== null ? (
        <Image
          src={thumbnail}
          type="square"
          newImageStyle={[
            styles.imageContainer,
            { alignSelf: 'flex-start', marginTop: 5 },
          ]}
        />
      ) : (
        <View style={styles.iconContainer}>
          {category === 'Umum' ? (
            <Icon name="forum" isActive={true} customStyle={styles.forumIcon} />
          ) : (
            <Icon name="cart" isActive={true} customStyle={styles.forumIcon} />
          )}
        </View>
      )}

      <View style={styles.infoContainer}>
        <Text
          text={forumTitle}
          type="medium"
          newTextStyle={styles.titleForum}
          ellipsizeMode="tail"
          numberOfLines={1}
        />
        <Text
          text={'Starter: ' + starter}
          type="small"
          newTextStyle={styles.starterForum}
        />
        <Text
          text={'Latest Comment: ' + latestComment}
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
    maxWidth: 270,
  },
  starterForum: {
    color: GREY,
    marginBottom: 6,
  },
});
