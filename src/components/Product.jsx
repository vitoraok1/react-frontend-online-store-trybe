import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { price, thumbnail, title } = this.props;
    return (
      <div
        data-testid="product"
      >
        <h2>
          {' '}
          { title }
        </h2>
        <div>
          <img src={ thumbnail } alt={ title } />
        </div>
        <span>
          {' '}
          { price }
          {' '}
        </span>
      </div>
    );
  }
}

Product.propTypes = {
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
}.isRequired;

export default Product;
