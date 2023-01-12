import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from '../components/Product';

class ProductList extends Component {
  render() {
    const { searchResult, addProduct, info } = this.props;
    const renderProducts = searchResult.map((product) => (
      <Product
        { ...product }
        key={ product.id }
        info={ info }
        addProduct={ addProduct }
      />
    ));
    return (
      <section>
        { searchResult.length > 0 && renderProducts}
        {searchResult.length === 0 && <h2> Nenhum produto foi encontrado </h2>}

      </section>
    );
  }
}

ProductList.propTypes = {
  searchResult: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }).isRequired,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  addProduct: PropTypes.func,
}.isRequired;

export default ProductList;
