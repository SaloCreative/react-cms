import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { Column, Row, Card } from 'components/core/grid';
import TypeAhead from 'components/core/typeahead';
import Tag from 'components/core/tag';

export default class ProductTagsPicker extends Component {

  renderTags() {
    const { productTags } = this.props;
    if (productTags && productTags.length > 0) {
      {productTags.map((tag, i) =>
       <div>
         { tag.title }
       </div>
      )}
    }
  }

  addTag(id) {
    console.log(id);
  }

  removeTag(id) {
    console.log(id);
  }

  render() {
    const { productTags } = this.props;
    return (
      <Column classes='is-4 tag-picker__wrapper'>
        <Card>
          <h3 className='product-edit__tile-header'>Product Tags</h3>
          <TypeAhead
            items={ this.props.tags }
            placeholder='Assign tags...'
            selectedItem={ (id) => this.addTag(id) }
          />
          <div className='tags-picker__tags-wrapper'>
            {productTags.map((tag, i) =>
              <Tag
                key={ tag.slug }
                tag={ tag }
                removeTag={ (id) => this.removeTag(id) }
              />
            )}
          </div>
        </Card>
      </Column>
    );
  }
}

ProductTagsPicker.propTypes = {
  tags: PropTypes.array,
  productTags: PropTypes.array
};

ProductTagsPicker.defaultProps = {
  tags: [],
  productTags: []
};