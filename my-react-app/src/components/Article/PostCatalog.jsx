import React, { Component } from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import Post from '../Post/Post.jsx';

class PostCatalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: null,
            loading: false
        };
    }

    async componentDidMount() {
        this.setState({ loading: true });
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!res.ok) {
                throw new Error('Failed to fetch');
            }
            const posts = await res.json();
            this.setState({ posts, loading: false });
        } catch (error) {
            console.error('Error fetching posts:', error);
            this.setState({ error: error.message, loading: false });
        }
    }

    render() {
        const { posts, error, loading } = this.state;

        if (error) {
            return <div>Error: {error}</div>;
        }

        if (loading) {
            return (
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            );
        }

        return (
            <div className="posts">
                <ListGroup className="posts__list">
                    {posts.length === 0 ? (
                        <div>No posts available</div>
                    ) : (
                        posts.map(post => (
                            <Post
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                body={post.body}
                            />
                        ))
                    )}
                </ListGroup>
            </div>
        );
    }
}

export default PostCatalog;