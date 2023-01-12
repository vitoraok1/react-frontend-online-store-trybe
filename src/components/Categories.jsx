import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categories extends Component {
  render() {
    const { categories, filterCategories } = this.props;
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
              onClick={ filterCategories }
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
  filterCategories: PropTypes.func,
}.isRequired;

export default Categories;
