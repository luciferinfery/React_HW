import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from "prop-types";

const Log = ({ value, onDelete }) => (
    <Button
        variant="list-group-item list-group-item-action"
        onClick={onDelete}
    >
        {value}
    </Button>
);

Log.propTypes = {
    value: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Log;