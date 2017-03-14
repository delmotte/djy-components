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
            <button {...this.props} className={"djy-button " + (this.props.type || '') + ' ' + this.props.className}>
                {this.props.icon && <i className="material-icons">{this.props.icon}</i>}
                <span className="label">{this.props.text}</span>
                <ReactInk />
            </button>
        );
    }

});

export const FlatButton = React.createClass({
     render() {
         return <SimpleButton {...this.props} className={this.props.className + ' flat'}/>
     }
});
