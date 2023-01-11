import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <ol>
        { categories.map(({ id, name }) => (
          <li
            key={ id }
            category={ name }
          >
            <button
              type="button"
              data-testid="category"
              value={ id }
            >
              { name }
            </button>
          </li>
        ))}
      </ol>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default Categories;
