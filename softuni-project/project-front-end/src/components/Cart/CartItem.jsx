import React, { Component } from 'react';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previousQuantity: 1,
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
        total: Number(this.props.price) * Number(this.state.quantity)
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
            onChange={this.handleInputChange}
            class="cart-input"
            type="number"
            min="1"
            value={quantity} />
        </td>
        <td>$ {total}</td>
      </tr>
    );
  }
}

export default CartItem;