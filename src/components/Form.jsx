import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const {
      onInputChange, handleButton, email, rating, comment, validationField 
    } = this.props;

    return (
      <form>
        <input
          type="email"
          data-testid="product-detail-email"
          name="email"
          required="true"
          onChange={ onInputChange }
        />
        <label htmlFor="1">
          1
          <input
            type="radio"
            data-testid="1-rating"
            id="1"
            name="rating"
            required="true"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="2">
          2
          <input
            type="radio"
            data-testid="2-rating"
            id="2"
            name="rating"
            required="true"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="3">
          3
          <input
            type="radio"
            data-testid="3-rating"
            id="3"
            name="rating"
            required="true"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="4">
          4
          <input
            type="radio"
            data-testid="4-rating"
            id="4"
            name="rating"
            required="true"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="5">
          5
          <input
            type="radio"
            data-testid="5-rating"
            id="5"
            name="rating"
            required="true"
            onChange={ onInputChange }
          />
        </label>
        <textarea
          data-testid="product-detail-evaluation"
          id="detailEvaluation"
          name="comment"
          rows="4"
          cols="50"
          onChange={ onInputChange }
        />
        <button
          type="submit"
          data-testid="submit-review-btn"
          onClick={ handleButton }
        >
          Enviar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onInputChange: PropTypes.func,
  handleButton: PropTypes.func,
  email: PropTypes.string,
  rating: PropTypes.bool,
  comment: PropTypes.string,
  validationField: PropTypes.bool,
}.isRequired;
