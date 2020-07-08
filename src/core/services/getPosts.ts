import axios from 'axios';

interface posts {
    id : number,
    title: string,
    body: string
}

type postsResponse = posts[]

export async function fetchPosts() :Promise<postsResponse> {
    return await axios.get(`https://simple-blog-api.crew.red/posts`)
}