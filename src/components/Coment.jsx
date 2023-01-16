import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Coment extends Component {
  render() {
    const { data } = this.props;
    const { email, text, rating } = data;
    return (
      <div>
        <p data-testid="review-card-email">{ email }</p>
        <p data-testid="review-card-evaluation">{ text }</p>
        <p data-testid="review-card-rating">{ rating }</p>
      </div>
    );
  }
}

Coment.propTypes = {
  data: PropTypes.shape({
    email: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.string,
  }).isRequired,
};
