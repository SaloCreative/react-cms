import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class AddProduct extends Component {

    render() {
        return (
            <div className='page__add-product'>
                <Helmet>
                    <title>Add Product</title>
                </Helmet>
                <div className='product__wrapper'>

                </div>
            </div>
        );
    }
}

