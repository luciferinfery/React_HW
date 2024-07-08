import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Post = ({ title, body, id }) => {
    return (
        <ListGroup.Item className="posts_single-post" data-post-id={id}>
            <Card.Title className="posts__post-title">{title}</Card.Title> {/* Use Card.Title for title */}
            <Card.Text className="posts__post-description">{body}</Card.Text> {/* Use Card.Text for body */}
        </ListGroup.Item>
    );
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

export default Post;