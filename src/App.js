import React, { Component } from 'react';
import { Nav, Navbar, NavItem, ButtonGroup, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import logo from './logo.svg';
import '../css/App.css';

var App = React.createClass({

  getInitialState() {
    return { 
      activeKey: 1
    };
  },

  handleSelect(selectedKey) {
    this.setState({activeKey: selectedKey});
  },

  render() {
    return (

      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the React Demo</h2>
        </div>

        <div className="App-nav">
          <Nav className="App-nav-menu" bsStyle="pills" justified activeKey={this.state.activeKey} onSelect={this.handleSelect}>
            <NavItem eventKey={1}>NavItem 1 content</NavItem>
            <NavItem eventKey={2}>NavItem 2 content</NavItem>
            <NavItem eventKey={3}>NavItem 3 content</NavItem>
          </Nav>
        </div>

      </div>

    );
  }

});

module.exports = App;

// class App extends Component {

// }

// export default App;
