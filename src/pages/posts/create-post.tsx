import Layout from '../../components/Layout'

const IndexPage = () => (
    <Layout title="CreatePost">
        <h1>Create</h1>
        <input placeholder={'Title'}/>
        <input placeholder={'Text'}/>
        <button>Add post</button>

    </Layout>
)

export default IndexPage;