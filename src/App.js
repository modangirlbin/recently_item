import React, { Component } from 'react';
import Header from './components/Header';
import Containers from './components/containers/Containers';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Containers/>
      </div>
    );
  }
}

export default App;