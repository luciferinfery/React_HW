import React, { Component } from 'react';
import Log from "../Log/index.js";
import { Button } from 'react-bootstrap';

class LogList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            log: []
        };
    }

    handleAdd = (value) => {
        this.setState(prevState => ({
            log: [value, ...prevState.log]
        }));
    };

    handleDelete = (index) => {
        this.setState(prevState => ({
            log: prevState.log.filter((_, i) => i !== index)
        }));
    };

    render() {
        const { log } = this.state;

        return (
            <div>
                <div className="btn-group font-monospace" role="group">
                    <Button
                        variant="outline-success"
                        onClick={() => this.handleAdd(log.length === 0 ? 1 : log[0] + 1)}>
                        +
                    </Button>
                    <Button
                        variant="outline-danger"
                        onClick={() => this.handleAdd(log.length === 0 ? -1 : log[0] - 1)}>
                        -
                    </Button>
                </div>
                <div className="list-group">
                    {log.map((value, index) => (
                        <Log
                            key={index}
                            value={value}
                            index={index}
                            onDelete={() => this.handleDelete(index)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default LogList;
