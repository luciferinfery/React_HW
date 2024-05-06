import React from 'react';
import Progress from "./components/Progress.jsx";

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Task Progress</h5>
                    <Progress percentage={40} />
                </div>
            </div>
        );
    }
}

export default Card;
