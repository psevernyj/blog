import * as actions from "../actionTypes/postsActionTypes";

export interface PostState {
    posts: []
}

const initialState: PostState = {
    posts: []
}

export default function postReducer(
    state: PostState = initialState,
    action: actions.PostsAction
): PostState  {
    switch (action.type) {
        case actions.GET_POSTS:
        case actions.SET_POSTS:
            return {
                posts: action.posts
            }
        default:
            return state;
    }
}