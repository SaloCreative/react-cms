import React, { Component } from 'react';

export default class Dropdown extends Component {

    constructor(props) {
        super(props);
        this.state = { listVisible: false };
        this.toggleList = this.toggleList.bind(this);
    }

    toggleList() {
        if (this.state.listVisible) {
            return this.setState({ listVisible: false });
        }
        return this.setState({ listVisible: true });

    }

    render() {
        if (this.props.label) {
            return (
                <div className={"dropdown__wrapper" + (this.state.listVisible ? " show" : "") + " " + this.props.class}>
                    <div className="dropdown__label" onClick={this.toggleList}>
                        {this.props.label}
                    </div>
                    {this.renderListItems()}
                </div>
            );
        }
        return null;

    }

    renderListItems() {
        if (this.props.items) {
            return (
                <div className={"dropdown__list" + (this.state.listVisible ? " show" : "")}>
                    {this.props.items}
                </div>
            );
        }
        return null;

    }

}

Dropdown.defaultProps = {
    children: null
};