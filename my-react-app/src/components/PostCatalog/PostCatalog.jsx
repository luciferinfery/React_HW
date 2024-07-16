import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import Post from '../Post/Post.jsx';

const PostCatalog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="posts">
            <ListGroup className="posts__list">
                {posts.map(post => (
                    <Post key={post.id} id={post.id} title={post.title} body={post.body} />
                ))}
            </ListGroup>
        </div>
    );
};

export default PostCatalog;