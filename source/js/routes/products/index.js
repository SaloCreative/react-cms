import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class ProductIndex extends Component {

    render() {
        return (
            <div className='page__product-index'>
                <Helmet>
                    <title>Products</title>
                </Helmet>
                <div className='product__wrapper'>

                </div>
            </div>
        );
    }
}

