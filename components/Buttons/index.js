import React from 'react';
import ReactInk from 'react-ink';

export const SimpleButton = React.createClass({

    render() {
        return (
            <button {...this.props} className="djy-button">
                {this.props.children}
                <ReactInk />
            </button>
        );
    }

});