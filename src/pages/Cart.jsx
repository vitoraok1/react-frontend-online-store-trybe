import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      const seen = new Set();
      const filtredArray = savedItems.filter((el) => {
        const duplicate = seen.has(el.id);
        seen.add(el.id);
        return !duplicate;
      });
      filtredArray.forEach((element) => {
        element.count = savedItems.filter((item) => item.id === element.id).length;
      });

      this.setState({
        savedItems: filtredArray,
      });
    }
  };

  increment = (item) => {
    const { savedItems } = this.state;
    const newArray = savedItems.map((element) => {
      if (element.id === item.id) {
        element.count += 1;
      }
      return element;
    });
    this.setState({
      savedItems: newArray,
    });
    const savedLocalStorage = JSON.parse(localStorage.getItem('cart'));
    localStorage.setItem('cart', JSON.stringify([...savedLocalStorage, item]));
  };

  decrement = (item) => {
    if (item.count === 1) {
      return;
    }
    const { savedItems } = this.state;
    const newArray = savedItems.map((element) => {
      if (element.id === item.id) {
        element.count -= 1;
      }
      return element;
    });
    this.setState({
      savedItems: newArray,
    });
    const savedLocalStorage = JSON.parse(localStorage.getItem('cart'));
    let i;
    savedLocalStorage.find((product, index) => {
      i = index;
      return product.id === item.id;
    });
    savedLocalStorage.splice(i, 1);
    localStorage.setItem('cart', JSON.stringify(savedLocalStorage));
  };

  removeItem = (item) => {
    const savedLocalStorage = JSON.parse(localStorage.getItem('cart'));
    const newArray = savedLocalStorage.filter((element) => element.id !== item.id);
    localStorage.setItem('cart', JSON.stringify(newArray));
    const arr = new Set();
    const filtredArray = newArray.filter((el) => {
      const duplicate = arr.has(el.id);
      arr.add(el.id);
      return !duplicate;
    });
    filtredArray.forEach((element) => {
      element.count = newArray.filter((otherItem) => otherItem.id === element.id).length;
    });
    this.setState({
      savedItems: filtredArray,
    });
  };

  render() {
    const { savedItems } = this.state;
    return (
      <section>
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
              { item.price * item.count }
            </h3>
            <p data-testid="shopping-cart-product-quantity">{ item.count }</p>
            <button
              type="button"
              data-testid="product-increase-quantity"
              onClick={ () => this.increment(item) }
            >
              +
            </button>
            <button
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ () => this.decrement(item) }
            >
              -
            </button>
            <button
              type="button"
              data-testid="remove-product"
              onClick={ () => this.removeItem(item) }
            >
              Remover item
            </button>
          </div>
        ))}
        <Link to="/shoppingCart" data-testid="shopping-cart-button">Carrinho</Link>
      </section>
    );
  }
}
