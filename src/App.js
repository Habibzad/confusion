import React from 'react';
import './App.css';
// import Main from './components/MainComponent'
import { Navbar, NavbarBrand } from 'reactstrap'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="#">Restorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
