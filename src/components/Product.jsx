import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const { id, price, thumbnail, title } = this.props;
    return (
      <Link to={ `/product-detail/${id}` } data-testid="product-detail-link">
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
      </Link>
    );
  }
}

Product.propTypes = {
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
}.isRequired;

export default Product;
