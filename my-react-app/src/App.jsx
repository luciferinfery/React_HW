import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TodoBox from './components/TodoBox/TodoBox.jsx';

const App = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <h1 className="mb-4">Todo List</h1>
                    <TodoBox />
                </Col>
            </Row>
        </Container>
    );
};

export default App;