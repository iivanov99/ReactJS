import React, { Component } from 'react';
import './styles.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({
      searchValue: ev.target.value
    });
  }

  render() {
    return (
      <div className="header-container">
        <span>SoftUni React.js Course</span>
        <input value={this.state.searchValue} onChange={this.handleChange} placeholder="Search..." />
      </div>
    );
  }
}

export default Header;