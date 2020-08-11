import axios from 'axios';

interface posts {
    id : number,
    title: string,
    body: string
}

type postsResponse = posts[]

export function fetchPosts() :Promise<postsResponse> {
    return axios.get(`https://simple-blog-api.crew.red/posts`)
}