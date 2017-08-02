import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import FroalaEditor from 'react-froala-wysiwyg'
import { Column, Row, Card } from 'components/core/grid';

const config = {
  fullPage: false,
  charCounterCount: false,
  placeholderText: 'Edit Your Content Here!',
  fontFamilySelection: false,
  inlineStyles: false,
  toolbarButtons: [
    'bold', 'italic', 'underline', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'insertHR', 'insertLink', 'insertImage', 'insertVideo', 'insertTable', 'clearFormatting', 'html'
  ],
  height:300
};

export default class ProductDescription extends Component {

  render() {
    return (
      <Column classes='is-4'>
        <Card>
          <h4>Description</h4>
          <div className='froala-wrapper'>
            <FroalaEditor
              config={config}
              tag='textarea'
            />
          </div>
        </Card>
      </Column>
    );
  }
}

