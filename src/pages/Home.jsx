import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List from '../components/List';
import Categories from '../components/Categories';
import Input from '../components/Input';
import ProductList from './ProductList';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends Component {
  state = {
    categories: [],
    search: '',
    searchResult: [],
    id: '',
  };

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const response = await getCategories();
    this.setState({
      categories: [...response],
    });
  };

  handleClick = async () => {
    const { id, search } = this.state;
    const response = await getProductsFromCategoryAndQuery(id, search);
    this.setState({
      searchResult: response.results,
    });
  };

  getInput = ({ target }) => {
    this.setState({
      search: target.value,
    });
  };

  filterCategories = (id) => {
    this.setState({
      id,
    }, () => this.handleClick());
  };

  render() {
    const { categories, search, searchResult } = this.state;
    return (
      <div>
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Input
          getInput={ this.getInput }
          value={ search }
          handleClick={ this.handleClick }
        />
        <List />
        <Categories
          categories={ categories }
          filterCategories={ this.filterCategories }
        />
        <Link to="/shoppingCart" data-testid="shopping-cart-button">Carrinho</Link>
        <ProductList searchResult={ searchResult } />
      </div>
    );
  }
}

export default Home;
