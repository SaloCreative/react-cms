import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TypeAhead extends Component {

  constructor() {
    super();
    this.state = {
      filteredItems: [],
      filterString: ''
    }
  }

  generateFilteredTags(e) {
    let filteredItems = [];
    this.props.items.forEach((tag) => {
      if (tag.title.toLowerCase().includes(e.toLowerCase())) {
        filteredItems.push(tag);
      }
    });
    return this.setState({ filteredItems: filteredItems })
  }

  filterTags(e) {
    this.generateFilteredTags(e);
    return this.setState({ filterString: e })
  }

  addTag(id) {
    if (this.props.selectedItem) {
      this.props.selectedItem(id)
    }
    return this.setState({ filterString: '' });
  }

  renderFilteredList() {
    if (this.state.filteredItems.length > 0  && this.state.filterString) {
      return (
        <ul className='tag-picker__list'>
          { this.state.filteredItems.map((tag, i) => (
            <li className='tag-picker__list-item' key={ i }>
              <a onClick={ () => this.addTag(tag.id) }>{ tag.title }</a>
            </li>
          ))}
        </ul>
      )
    }
    return null;
  }

  render() {
    return (
      <div className='form-group'>
        <input
          className={ `form-field ${ this.state.filterString ? 'has-value' : '' }` }
          value={ this.state.filterString }
          onChange={ (e) => this.filterTags(e.target.value) }/>
        <span className='bar' />
        <label>{ this.props.placeholder }</label>
        { this.renderFilteredList() }
      </div>
    );
  }
}

TypeAhead.defaultProps = {
  placeholder: 'Start typing...',
  items: []
};

TypeAhead.propTypes = {
  items: PropTypes.array,
  placeholder: PropTypes.string,
  selectedItem: PropTypes.func
};