import React from 'react';
import './App.css';
import Main from './components/MainComponent'
import { Provider } from 'react-redux'
import { store } from './redux/store'

class App extends React.Component {

  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
