import React from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
// import Menu from './components/MenuComponent';
import Main from './components/MainComponent'
// import dishes from './shared/dishes'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
