import React, { Component, PropTypes } from 'react';

export default class Loader extends Component {
    render() {
        if (this.props.display) {
            switch (this.props.style) {
                case 'inline':
                    return (
                        <div className='lush-loader--inline'>Loading&hellip;</div>
                    );
                case 'default':
                default:
                    return (
                        <div className='lush-loader'>Loading&hellip;</div>
                    );
            }
        } else {
            return null;
        }
    }

}

Loader.defaultProps = {
    display: false,
    style: 'default'
};

Loader.propTypes = {
    display: PropTypes.bool,
    style: PropTypes.string
};