import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Item from './index.js';
import uniqueId from 'lodash/uniqueId';

const TodoBox = () => {
    const [notes, setNotes] = useState([]);
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === '') return;

        const newNote = { id: uniqueId(), text: value };
        setNotes([newNote, ...notes]);
        setValue('');
    };

    const handleDelete = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    return (
        <div>
            <div className="mb-3">
                <Form className="d-flex" onSubmit={handleSubmit}>
                    <div className="me-3">
                        <Form.Control
                            type="text"
                            value={value}
                            required
                            className="form-control"
                            placeholder="I am going..."
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                    <Button type="submit" className="btn btn-primary">Add</Button>
                </Form>
            </div>
            <div>
                {notes.map((note) => (
                    <Item key={note.id} task={note.text} onRemove={() => handleDelete(note.id)} />
                ))}
            </div>
        </div>
    );
};

export default TodoBox;