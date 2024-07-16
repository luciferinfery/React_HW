import React, { useState } from 'react';
import uniqueId from 'lodash/uniqueId';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Item from '../TodoItem/TodoItem.jsx';

const TodoBox = () => {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');

    const handleInputChange = (e) => {
        setTaskText(e.target.value);
    };

    const handleAddTask = (e) => {
        e.preventDefault();
        const newTask = { id: uniqueId(), text: taskText };
        setTasks([newTask, ...tasks]);
        setTaskText('');
    };

    const handleRemoveTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div>
            <div className="mb-3">
                <Form className="d-flex" onSubmit={handleAddTask}>
                    <Form.Group className="me-3 flex-grow-1">
                        <Form.Control
                            type="text"
                            value={taskText}
                            onChange={handleInputChange}
                            required
                            placeholder="I am going..."
                        />
                    </Form.Group>
                    <Button type="submit" variant="primary">Add</Button>
                </Form>
            </div>
            <div>
                {tasks.map(task => (
                    <div key={task.id}>
                        <Item task={task.text} onRemove={() => handleRemoveTask(task.id)} />
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoBox;