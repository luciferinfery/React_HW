import React from 'react';
import PropTypes from 'prop-types';
import Body from './CardBody.jsx';
import Title from './Title.jsx';
import Text from './Text.jsx';

const Card = ({ children }) => {
    return <div className="card">{children}</div>;
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
};

Card.Title = Title;
Card.Body = Body;
Card.Text = Text;

export default Card;
