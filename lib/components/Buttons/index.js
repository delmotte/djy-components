'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var ReactInk = require('react-ink');

var SimpleButton = React.createClass({
    displayName: 'SimpleButton',
    render: function render() {
        return React.createElement(
            'button',
            _extends({}, this.props, { className: 'djy-button' }),
            this.props.children,
            React.createElement(ReactInk, null)
        );
    }
});

module.exports = {
    SimpleButton: SimpleButton
};