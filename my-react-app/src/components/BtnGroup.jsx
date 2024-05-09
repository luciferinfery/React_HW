import React from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

class BtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            primaryLeft: false,
            primaryRight: false
        };
    }

    handleLeftClick = () => {
        this.setState({
            primaryLeft: true,
            primaryRight: false
        });
    }

    handleRightClick = () => {
        this.setState({
            primaryLeft: false,
            primaryRight: true
        });
    }

    render() {
        const btnClassLeft = `btn ${this.state.primaryLeft ? 'btn-primary' : 'btn-secondary'}`;
        const btnClassRight = `btn ${this.state.primaryRight ? 'btn-primary' : 'btn-secondary'}`;

        return (
            <div className="btn-group" role="group">
                <button type="button" className={btnClassLeft} onClick={this.handleLeftClick}>Left</button>
                <button type="button" className={btnClassRight} onClick={this.handleRightClick}>Right</button>
            </div>
        )
    }
}

export default BtnGroup;
