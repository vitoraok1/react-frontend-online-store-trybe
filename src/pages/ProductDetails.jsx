import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';

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

  render() {
    const { details } = this.state;
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
