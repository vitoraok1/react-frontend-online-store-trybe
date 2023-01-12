import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  state = {
    savedItems: [],
  };

  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
    const savedItems = JSON.parse(localStorage.getItem('cart'));
    if (!savedItems) {
      this.setState({
        savedItems: [],
      });
    } else {
      this.setState({
        savedItems,
      });
    }
  };

  render() {
    const { savedItems } = this.state;
    return (
      <section>
        <p data-testid="shopping-cart-product-quantity">
          Itens no carrinho:
          {' '}
          { savedItems.length }
        </p>
        {
          savedItems.length === 0
          && <h2 data-testid="shopping-cart-empty-message"> Seu carrinho está vazio</h2>
        }
        { savedItems.map((item, index) => (
          <div key={ index }>
            <h2 data-testid="shopping-cart-product-name">{ item.title }</h2>
            <img
              src={ item.thumbnail }
              alt={ item.title }
            />
            <h3>
              Preço: R$
              { item.price }
            </h3>
          </div>
        ))}
      </section>
    );
  }
}
