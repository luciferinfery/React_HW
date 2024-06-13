import React from 'react';
import { Button } from 'react-bootstrap';

const Item = ({ task, onRemove }) => {
    return (
        <div>
            <div className="row">
                <div className="col-auto">
                    <Button type="button" className="btn btn-primary btn-sm" onClick={onRemove}>
                        -
                    </Button>
                </div>
                <div className="col">
                    {task}
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Item;