import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class EditProduct extends Component {

    render() {
        return (
            <div className='page__edit-product'>
                <Helmet>
                    <title>Edit Product</title>
                </Helmet>
                <div className='product__wrapper'>

                </div>
            </div>
        );
    }
}

