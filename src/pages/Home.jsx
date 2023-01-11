import React, { Component } from 'react';
import List from '../components/List';

class Home extends Component {
  render() {
    return (
      <div>
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <List />
      </div>
    );
  }
}

export default Home;
