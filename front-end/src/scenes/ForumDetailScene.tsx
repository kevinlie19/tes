import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  RefreshControl,
  KeyboardAvoidingView,
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';

import { RootState } from '../types/State';
import { ForumObject, CommentObject } from '../types/Commons';
import { token } from '../helpers';
import { Icon, Text, Image, Avatar, TextInput } from '../core-ui';
import { CommentList } from '../components';
import {
  CUSTOM_BLACK,
  WHITE,
  CUSTOM_WHITE,
  GREY,
  LIGHT_GREY,
  MIDDLE_BLACK,
} from '../constants/color';
import { STATUS_BAR_HEIGHT, DEVICE_WIDTH } from '../constants/deviceConfig';

type Props = NavigationScreenProps & {
  forumDetailData: ForumObject;
  commentData: Array<CommentObject>;
  fetchForumDetail: (
    authToken: string,
    detailId: number,
    _navigator: any,
  ) => void;
  fetchForumDetailLike: (
    authToken: string,
    detailId: number,
    _navigator: any,
  ) => void;
  fetchCommentLike: (
    authToken: string,
    detailId: number,
    _navigator: any,
  ) => void;
  fetchGetComment: (
    authToken: string,
    detailId: number,
    _navigator: any,
  ) => void;
  fetchPostComment: (
    authToken: string,
    detailId: number,
    comment: string,
    _navigator: any,
  ) => void;
};

type ForumDetailSceneState = {
  isRefresh: boolean;
  isLikedForum: boolean;
  likesCountForum: number;
  comment: string;
};

export class ForumDetailScene extends Component<Props, ForumDetailSceneState> {
  state: ForumDetailSceneState = {
    isRefresh: false,
    isLikedForum: false,
    likesCountForum: 0,
    comment: '',
  };

  async componentDidMount() {
    await this._asyncStorage();
  }

  _asyncStorage = async () => {
    let { fetchForumDetail, fetchGetComment, forumDetailData } = this.props;
    let userToken = await token.getToken();
    let detailId = this.props.navigation.getParam('id');

    if (userToken) {
      await fetchForumDetail(userToken, detailId, this.props.navigation);
      await fetchGetComment(userToken, detailId, this.props.navigation);

      await this.setState({
        likesCountForum: forumDetailData.likes,
        isLikedForum: forumDetailData.is_liked_by_you,
      });
    }
  };

  render() {
    let { forumDetailData } = this.props;
    let { isLikedForum, likesCountForum, comment } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
          <View style={styles.navbarContainer}>
            <Icon
              name="arrowBack"
              customStyle={styles.icon}
              onPress={() => this.props.navigation.goBack()}
            />

            <Text
              text="Forum"
              type="headerTitle"
              newTextStyle={styles.titleText}
            />
            <View />
          </View>
        </View>
        <View style={styles.body}>
          <ScrollView
            indicatorStyle="white"
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefresh}
                onRefresh={this._onRefresh}
              />
            }
          >
            <View style={styles.forumDetail}>
              <View style={{ marginTop: 24, marginHorizontal: 16 }}>
                <Text
                  text={forumDetailData.forum_name}
                  type="large"
                  newTextStyle={{ marginBottom: 18 }}
                />
                <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                  <Avatar newAvatarStyle={styles.avatar} />
                  <View style={{ marginLeft: 8 }}>
                    <Text
                      text={forumDetailData.full_name}
                      type="small"
                      newTextStyle={{ marginBottom: 3, fontWeight: 'normal' }}
                    />
                    <Text
                      text="Learning"
                      type="xsmall"
                      newTextStyle={styles.greyText}
                    />
                  </View>
                </View>
                <Text
                  text={dateFormat(forumDetailData.cdate, 'dd mmmm yyyy')}
                  type="xsmall"
                  newTextStyle={{ color: LIGHT_GREY }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 9,
                  }}
                >
                  <Image src={forumDetailData.image} />
                </View>
                <View>
                  <Text
                    text={forumDetailData.description}
                    type="xsmall"
                    newTextStyle={{
                      marginTop: 16,
                      color: MIDDLE_BLACK,
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 16,
                  }}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon
                      name="heart"
                      isActive={isLikedForum}
                      customStyle={styles.smallIcon}
                      onPress={this._onPressForumDetailLike}
                    />
                    <Text
                      text={likesCountForum.toString()}
                      type="small"
                      newTextStyle={{
                        marginLeft: 5,
                        fontWeight: 'normal',
                        color: GREY,
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
            </View>
            <View style={styles.forumComments}>
              <View style={{ marginHorizontal: 16 }}>
                <Text
                  text="Komen Terbaru"
                  type="medium"
                  style={{ marginVertical: 18 }}
                />
                <View>{this._renderComment()}</View>
              </View>
            </View>
          </ScrollView>
          <KeyboardAvoidingView
            keyboardVerticalOffset={76}
            behavior="padding"
            enabled
          >
            <View style={styles.inputComment}>
              <Icon
                name="attachment"
                customStyle={{ width: 24, height: 24, marginRight: 32 }}
              />
              <TextInput
                placeholder="Add a Comment"
                newInputContainerStyle={{
                  borderBottomWidth: 0,
                  paddingRight: 20,
                }}
                onChangeText={this._onChangeComment}
                value={comment}
              />
              <Icon
                name="send"
                customStyle={styles.icon}
                onPress={this._onPressSend}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  }

  _renderComment = () => {
    let { commentData } = this.props;

    return commentData.length > 0 ? (
      <FlatList
        data={commentData}
        extraData={this.state}
        renderItem={({ item }) => {
          return (
            <CommentList
              name={item.full_name}
              date={dateFormat(item.date, 'dd mmmm yyyy')}
              comment={item.comment}
              isLiked={item.is_liked_by_you}
              likes={item.likes}
              onPressLike={() => this._onPressCommentLike(item.id)}
            />
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    ) : (
      <View style={styles.emptyComment}>
        <Text
          newTextStyle={styles.greyText}
          type="large"
          text="No Comments Yet"
        />
      </View>
    );
  };

  _onRefresh = () => {
    this.setState({ isRefresh: true });
    this._asyncStorage().then(() => {
      this.setState({ isRefresh: false });
    });
  };

  _onChangeComment = (newComment: string) => {
    this.setState({ comment: newComment });
  };

  _onPressForumDetailLike = async () => {
    let { fetchForumDetailLike } = this.props;
    let userToken = await token.getToken();
    let detailId = this.props.navigation.getParam('id');
    let { isLikedForum, likesCountForum } = this.state;

    if (userToken) {
      await fetchForumDetailLike(userToken, detailId, this.props.navigation);
      this.setState({
        isLikedForum: !isLikedForum,
        likesCountForum: !isLikedForum
          ? likesCountForum + 1
          : likesCountForum - 1,
      });
    }
  };

  async _onPressCommentLike(commentId: number) {
    let { fetchCommentLike } = this.props;
    let userToken = await token.getToken();

    if (userToken) {
      await fetchCommentLike(userToken, commentId, this.props.navigation);
      await this._asyncStorage();
    }
  }

  _onPressSend = async () => {
    let { comment } = this.state;
    let { fetchPostComment } = this.props;
    let userToken = await token.getToken();
    let detailId = this.props.navigation.getParam('id');
    if (userToken) {
      await fetchPostComment(
        userToken,
        detailId,
        comment,
        this.props.navigation,
      );

      this.setState({ comment: '' });
      await this._asyncStorage();
    }
  };
}

let mapStateToProps = (state: RootState) => {
  let { forumDetailState } = state;

  return {
    forumDetailData: forumDetailState.forumDetailData,
    commentData: forumDetailState.commentData,
  };
};

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchForumDetail: (
      authToken: string,
      detailId: number,
      _navigator: any,
    ) => {
      dispatch({
        type: 'FORUM_DETAIL_REQUESTED',
        authToken,
        detailId,
        _navigator,
      });
    },
    fetchForumDetailLike: (
      authToken: string,
      detailId: number,
      _navigator: any,
    ) => {
      dispatch({
        type: 'FORUM_DETAIL_LIKE_REQUESTED',
        authToken,
        detailId,
        _navigator,
      });
    },
    fetchCommentLike: (
      authToken: string,
      detailId: number,
      _navigator: any,
    ) => {
      dispatch({
        type: 'COMMENT_LIKE_REQUESTED',
        authToken,
        detailId,
        _navigator,
      });
    },
    fetchGetComment: (authToken: string, detailId: number, _navigator: any) => {
      dispatch({
        type: 'GET_COMMENT_REQUESTED',
        authToken,
        detailId,
        _navigator,
      });
    },
    fetchPostComment: (
      authToken: string,
      detailId: number,
      comment: string,
      _navigator: any,
    ) => {
      dispatch({
        type: 'POST_COMMENT_REQUESTED',
        authToken,
        detailId,
        comment,
        _navigator,
      });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForumDetailScene);

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
  icon: {
    width: 24,
    height: 24,
  },
  titleText: {
    paddingRight: 20,
  },
  body: {
    flex: 7,
    backgroundColor: WHITE,
  },
  forumDetail: {
    borderBottomWidth: 1,
    paddingBottom: 24,
    borderBottomColor: CUSTOM_WHITE,
  },
  avatar: {
    width: 32,
    height: 32,
  },
  smallIcon: {
    width: 18,
    height: 18,
  },
  forumComments: {},
  inputComment: {
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // bottom: 0,
    backgroundColor: WHITE,
    width: DEVICE_WIDTH,
    height: 48,
    flexDirection: 'row',
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: CUSTOM_WHITE,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  emptyComment: {
    alignItems: 'center',
  },
  greyText: {
    color: GREY,
  },
});
