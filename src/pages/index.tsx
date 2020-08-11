import Layout from "../components/Layout";
import Link from "next/link";
import * as React from "react";
import { useDispatch, connect} from "react-redux";
import {AppState} from "../core/reducers/rootReducer";
import {FunctionComponent, useEffect} from "react";
import {getPosts} from "../core/actionCreators/postsActionCreator";
import configureStore from "../core/store/configureStore";
import withRedux from 'next-redux-wrapper';

interface Props {
    posts: [],
    getPosts: any

}


const IndexPage: FunctionComponent<Props> = props => {

    const dispatch = useDispatch();

    useEffect(() =>{
        props.getPosts();
    }, [props.getPosts])

    const {posts} = props;

    // console.log(props)

    interface Post {
        title: string,
        body: string
    }
    return  <Layout title="The Latest Posts">
        <h1>Latests Posts List</h1>
        <ul>
            { posts && posts.map((post: Post) => {
                if(post.title && post.body)
               return <li> <h3>{post.title}</h3> <p>{post.body}</p></li>})}
        </ul>

        <p>
            <Link href="/about">
                <a>About</a>
            </Link>
        </p>
    </Layout>
}


const mapStateToProps = (state: AppState) => {
    return{
        posts: state.posts.posts
    }
}

const mapDispatchToProps = {
    getPosts
}


export default withRedux(configureStore)(connect(mapStateToProps, mapDispatchToProps)(IndexPage)) ;