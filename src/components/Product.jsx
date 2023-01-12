import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';

class Product extends Component {
  render() {
    const { id, price, thumbnail, title, addProduct } = this.props;
    const info = { id, price, thumbnail, title };
    return (
      <section>
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
        <Button info={ info } addProduct={ addProduct } />
      </section>
    );
  }
}

Product.propTypes = {
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  addProduct: PropTypes.func,
}.isRequired;

export default Product;
