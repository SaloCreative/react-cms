import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FroalaEditor from 'react-froala-wysiwyg'

import { Column, Row, Card } from '@salocreative/react-ui';

import * as productEditActions from 'actions/products/edit';

const config = {
  fullPage: false,
  charCounterCount: false,
  placeholderText: 'Edit Your Content Here!',
  fontFamilySelection: false,
  inlineStyles: false,
  quickInsert: false,
  toolbarButtons: [
    'bold', 'italic', 'underline', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'insertHR', 'insertLink', 'insertImage', 'insertVideo', 'insertTable', 'clearFormatting', 'html'
  ],
  height:245
};

class ProductDescription extends Component {

  handleModelChange(content) {
    this.props.productFieldChanged('content', content);
  }

  render() {
    return (
      <Column customClasses='is-8'>
        <Card customClasses='froala-card'>
          <div className='froala-wrapper'>
            <FroalaEditor
              config={ config }
              model={ this.props.content }
              onModelChange={ (content) => this.handleModelChange(content) }
              tag='textarea'
            />
          </div>
        </Card>
      </Column>
    );
  }
}

ProductDescription.propTypes = {
  content: PropTypes.string
};

ProductDescription.defaultProps = {
  content: ''
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(productEditActions, dispatch);
}

export default connect(null, mapDispatchToProps)(ProductDescription);