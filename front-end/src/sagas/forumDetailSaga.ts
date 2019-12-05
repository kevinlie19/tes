import { call, put, takeLatest } from 'redux-saga/effects';

import { API_HOST } from '../constants/api';
import { ForumDetailAction } from '../types/ForumDetailSceneType';

export default function* forumDetailSagaWatcher(): any {
  yield takeLatest('FORUM_DETAIL_REQUESTED', fetchForumDetail);
  yield takeLatest('GET_COMMENT_REQUESTED', fetchGetComment);
  yield takeLatest('POST_COMMENT_REQUESTED', fetchPostComment);
  yield takeLatest('FORUM_DETAIL_LIKE_REQUESTED', fetchForumDetailLike);
  yield takeLatest('COMMENT_LIKE_REQUESTED', fetchCommentLike);
}

function* fetchForumDetail(action: ForumDetailAction) {
  if (action.type === 'FORUM_DETAIL_REQUESTED') {
    let { authToken, detailId } = action;
    let url = `${API_HOST}/api/feature/get-forum/${detailId}`;
    let response = yield call(fetch, url, {
      method: 'GET',
      headers: {
        authorization: authToken.slice(1, -1),
      },
    });
    let result = yield response.json();
    if (result.success) {
      let data = result.data;
      yield put({
        type: 'FORUM_DETAIL_SUCCEED',
        forumDetailData: data,
      });
    } else {
      yield put({
        type: 'FORUM_DETAIL_FAILED',
        forumDetailData: {},
      });
    }
  }
}

function* fetchGetComment(action: ForumDetailAction) {
  if (action.type === 'GET_COMMENT_REQUESTED') {
    let { authToken, detailId } = action;
    let url = `${API_HOST}/api/feature/get-comment/${detailId}`;
    let response = yield call(fetch, url, {
      method: 'GET',
      headers: {
        authorization: authToken.slice(1, -1),
      },
    });
    let result = yield response.json();
    if (result.success) {
      let data = result.data;
      yield put({
        type: 'GET_COMMENT_SUCCEED',
        commentData: data,
      });
    } else {
      yield put({
        type: 'GET_COMMENT_FAILED',
        commentData: [],
      });
    }
  }
}

function* fetchPostComment(action: ForumDetailAction) {
  if (action.type === 'POST_COMMENT_REQUESTED') {
    let { authToken, detailId, comment } = action;
    let id_forum = detailId;
    let data = {
      id_forum,
      comment,
    };
    let url = `${API_HOST}/api/feature/add-comment`;
    let response = yield call(fetch, url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: authToken.slice(1, -1),
      },
      body: JSON.stringify(data),
    });

    yield response.json();
  }
}

function* fetchForumDetailLike(action: ForumDetailAction) {
  if (action.type === 'FORUM_DETAIL_LIKE_REQUESTED') {
    let { authToken, detailId } = action;

    let url = `${API_HOST}/api/feature/likes-forum/${detailId}`;
    let response = yield call(fetch, url, {
      method: 'GET',
      headers: {
        authorization: authToken.slice(1, -1),
      },
    });

    yield response.json();
  }
}

function* fetchCommentLike(action: ForumDetailAction) {
  if (action.type === 'COMMENT_LIKE_REQUESTED') {
    let { authToken, detailId } = action;

    let url = `${API_HOST}/api/feature/likes-comment/${detailId}`;
    let response = yield call(fetch, url, {
      method: 'GET',
      headers: {
        authorization: authToken.slice(1, -1),
      },
    });

    yield response.json();
  }
}
