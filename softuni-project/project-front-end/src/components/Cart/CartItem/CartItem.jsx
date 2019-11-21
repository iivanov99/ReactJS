import React, { Component } from 'react';
import './CartItem.css';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      total: props.price
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(ev) {
    this.setState({
      quantity: parseInt(ev.target.value)
    }, () => {
      this.setState({
        total: parseFloat(this.props.price) * parseInt(this.state.quantity)
      })
    });
  }

  render() {
    const { item, price } = this.props;
    const { quantity, total } = this.state;

    return (
      <tr>
        <td>{item}</td>
        <td>$ {price}</td>
        <td>
          <input
            className="cart-input" onChange={this.handleInputChange}
            type="number" min="1" value={quantity} />
        </td>
        <td>$ {total}</td>
      </tr>
    );
  }
}

export default CartItem;