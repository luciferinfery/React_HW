import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Item = ({ task, onRemove }) => {
    return (
        <Row className="align-items-center">
            <Col xs="auto">
                <Button variant="primary" size="sm" onClick={onRemove}>-</Button>
            </Col>
            <Col>{task}</Col>
        </Row>
    );
};

export default Item;