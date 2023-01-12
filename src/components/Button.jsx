import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { info, addProduct } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addProduct(info) }
        >
          Adicionar ao carrinho
        </button>

      </div>
    );
  }
}

Button.propTypes = {
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  addProduct: PropTypes.func,
}.isRequired;
