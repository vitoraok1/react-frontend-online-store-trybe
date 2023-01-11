import React, { Component } from 'react';
import List from '../components/List';
import Categories from '../components/Categories';
import Input from '../components/Input';
import { getCategories } from '../services/api';

class Home extends Component {
  state = {
    categories: [],
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

  render() {
    const { categories } = this.state;

    return (
      <div>
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <Input />
        <List />
        <Categories
          categories={ categories }
        />
      </div>
    );
  }
}

export default Home;
