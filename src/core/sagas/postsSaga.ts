import { put , call , takeEvery, all, fork} from "redux-saga/effects";

import {fetchPosts} from "../services/getPosts";
import * as actionTypes from "../actionTypes/postsActionTypes"
import * as actionCreators from "../actionCreators/postsActionCreator"

function* onLoadPosts() {
    try {
        const {data} = yield call(fetchPosts)
        yield put(actionCreators.getPosts(data))
    } catch (e) {
        yield put(actionCreators.getPostsFailure(e.response.data.error))
    }
}

function* watchOnLoadPosts() {
    yield takeEvery(actionTypes.GET_POSTS, onLoadPosts);
}

export default function* postsSaga() {
    yield all([fork(watchOnLoadPosts)]);
}