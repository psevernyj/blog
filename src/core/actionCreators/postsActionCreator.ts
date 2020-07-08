import * as actions from "../actionTypes/postsActionTypes";

export function setPosts(posts: []): actions.SetPostsAction {
    return {
        type: actions.SET_POSTS,
        posts
    }
}

export function getPosts(posts:[]): actions.GetPostsAction {
    return {
        type: actions.GET_POSTS,
        posts
    }
}

export function getPostsFailure(
    error: Error | string
): actions.CatchError {
    return {
        type: actions.ERROR_LOADING_DATA,
        error
    };
}