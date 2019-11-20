import React, { Component } from 'react';
import BannerSignIn from './children/BannerSignIn';
import BoxOption from './children/BoxOption';
import LatelyProduct from './children/LatelyProduct';

class Container extends Component {
  render() {
    return (
      <div id="container">
        <BannerSignIn/>
        <div className="wrap_lately">
            <BoxOption/>
            <LatelyProduct/>
        </div>
      </div>
    );
  }
}

export default Container;