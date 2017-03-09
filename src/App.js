import React, { Component } from 'react';
import { Nav, NavItem, ButtonGroup, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import logo from './logo.svg';
import '../css/App.css';

class App extends Component {

  handleSelect(selectedKey) {
    console.log(document.getElementsByClassName('App-nav-menu'));
  }

  render() {
    return (

      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the React Demo</h2>
        </div>

        <div className="App-nav">
          <ButtonGroup justified>
            <Button href="#">Left</Button>
            <Button href="#">Middle</Button>
            <DropdownButton title="Dropdown" id="bg-justified-dropdown">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
          </ButtonGroup>
        </div>

        <div className="App-nav2">
          <Nav className="App-nav-menu" bsStyle="pills" justified activeKey={1} onSelect={this.handleSelect}>
            <NavItem eventKey={1}>NavItem 1 content</NavItem>
            <NavItem eventKey={2}>NavItem 2 content</NavItem>
            <NavItem eventKey={3}>NavItem 3 content</NavItem>
          </Nav>
        </div>

      </div>

    );
  }
}

export default App;
