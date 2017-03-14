import React from 'react';
import ReactInk from 'react-ink';

export const SimpleButton = React.createClass({

    propTypes: {
        text: React.PropTypes.string.isRequired,
        icon: React.PropTypes.string,
        type: React.PropTypes.oneOf(['success', 'error'])
    },

    render() {
        return (
            <button {...this.props} className={"djy-button " + (this.props.type || '')}>
                {this.props.icon && <i className="material-icons">{this.props.icon}</i>}
                {this.props.text}
                <ReactInk />
            </button>
        );
    }

});
