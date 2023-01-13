import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import Button from '../components/Button';

export default class ProductDetails extends Component {
  state = {
    details: {},
  };

  componentDidMount() {
    this.getProductDetails();
  }

  getProductDetails = async () => {
    const { match } = this.props;
    const { params: { id } } = match;
    const response = await getProductById(id);
    this.setState({
      details: response,
    });
  };

  addProduct = (info) => {
    const savedItems = JSON.parse(localStorage.getItem('cart'));
    if (!savedItems) {
      localStorage.setItem('cart', JSON.stringify([info]));
    } else {
      localStorage.setItem('cart', JSON.stringify([...savedItems, info]));
    }
  };

  render() {
    const { details } = this.state;
    const { id, price, thumbnail, title } = details;
    const info = { id, price, thumbnail, title };
    return (
      <div>
        <h2 data-testid="product-detail-name">{ details.title }</h2>
        <img
          src={ details.thumbnail }
          alt={ details.title }
          data-testid="product-detail-image"
        />
        <h3 data-testid="product-detail-price">
          Preço: R$
          { details.price }
        </h3>
        <Button
          addProduct={ this.addProduct }
          info={ info }
          dataTestId="product-detail-add-to-cart"
        />
        <Link to="/shoppingCart" data-testid="shopping-cart-button">Carrinho</Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
