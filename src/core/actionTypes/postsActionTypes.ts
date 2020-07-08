export const SET_POSTS = 'SET_POSTS';
export interface SetPostsAction {
    type: typeof SET_POSTS;
    posts: []
}

export const GET_POSTS = 'GET_POSTS';
export interface GetPostsAction {
    type: typeof GET_POSTS;
    posts: []
}

export const ERROR_LOADING_DATA = 'ERROR LOADING DATA';
export interface CatchError {
    type: typeof ERROR_LOADING_DATA;
    error: Error | string;
}

export type PostsAction =
    | SetPostsAction
    | GetPostsAction
    | CatchError;
