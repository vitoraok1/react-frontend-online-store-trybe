import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import Button from '../components/Button';
import Form from '../components/Form';
import Coment from '../components/Coment';

export default class ProductDetails extends Component {
  state = {
    details: {},
    validationField: true,
    email: '',
    rating: '',
    text: '',
    previousComents: [],
  };

  componentDidMount() {
    this.getProductDetails();
    this.getComents();
  }

  getComents = () => {
    const { match } = this.props;
    const { params: { id } } = match;

    const previousComents = JSON.parse(localStorage.getItem(id));
    this.setState({
      previousComents,
    });
  };

  getProductDetails = async () => {
    const { match } = this.props;
    const { params: { id } } = match;
    const response = await getProductById(id);
    this.setState({
      details: response,
    });
  };

  onInputChange = ({ target }) => {
    const { value, name, checked, id } = target;

    if (checked) {
      this.setState({
        [name]: id,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  validateInputs = () => {
    const { email, rating } = this.state;

    const regexMail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    const validateEmail = regexMail.test(email);
    const validateRadio = rating !== '';

    return validateEmail && validateRadio;
  };

  saveOnLocalStorage = () => {
    const { email, rating, text } = this.state;
    const { match } = this.props;
    const { params: { id } } = match;
    const savedComents = JSON.parse(localStorage.getItem(id));
    const info = {
      email,
      text,
      rating,
    };

    if (!savedComents) {
      localStorage.setItem(id, JSON.stringify([info]));
    } else {
      localStorage.setItem(id, JSON.stringify([...savedComents, info]));
    }
  };

  handleButton = (event) => {
    event.preventDefault();

    if (this.validateInputs()) {
      this.saveOnLocalStorage();
      this.setState({
        email: '',
        text: '',
        validationField: true,
      });
    } else {
      this.setState({
        validationField: false,
      });
    }

    this.getComents();
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
    const {
      details, email, rating, text, validationField, previousComents } = this.state;
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
        <Form
          onInputChange={ this.onInputChange }
          handleButton={ this.handleButton }
          email={ email }
          rating={ rating }
          text={ text }
          validationField={ validationField }
        />
        { validationField
          ? null : <span data-testid="error-msg">Campos inválidos</span>}
        { previousComents && previousComents.map((data, index) => (
          <Coment key={ index } data={ data } />
        ))}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
    onInputChange: PropTypes.func,
    handleButton: PropTypes.func,
  }),
}.isRequired;
