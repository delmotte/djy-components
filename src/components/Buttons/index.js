var React = require('react');
var ReactInk = require('react-ink');

var SimpleButton = React.createClass({

    render() {
        return (
            <button {...this.props} className="djy-button">
                {this.props.children}
                <ReactInk />
            </button>
        );
    }

});

module.exports = {
    SimpleButton
};
