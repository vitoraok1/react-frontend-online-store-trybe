import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { value, getInput, handleClick } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          name="search"
          value={ value }
          onChange={ getInput }
        />

        <button
          type="button"
          data-testid="query-button"
          onClick={ handleClick }
        >
          {' '}
          Pesquisar
        </button>
      </div>

    );
  }
}

Input.propTypes = {
  value: PropTypes.string,
  getInput: PropTypes.func,
  handleClick: PropTypes.func,
}.isRequired;

export default Input;
