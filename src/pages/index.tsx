import Layout from "../components/Layout";
import Link from "next/link";
import * as React from "react";
import {connect} from "react-redux";
import {AppState} from "../core/reducers/rootReducer";
import {FunctionComponent} from "react";

interface Props {
    posts: [];

}

const IndexPage: FunctionComponent<Props> = props => {
    const {posts} = props;
    return  <Layout title="The Latest Posts">
        <h1>Latests Posts List</h1>
        <ul>
            <li>
                {/*<h3>{posts.title}</h3>*/}
                {/*<p>{posts.body}</p>*/}
            </li>
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



export default connect(mapStateToProps, null) (IndexPage);