import React, { Component } from 'react';

import './App.css';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// List of Products
import List from './product/List';
import Cart from './cart/Cart';


class App extends Component {
  render() {
    return (
       <div className="container">
           <h3>Gadget Shop</h3>
           <List/>
       </div>
    );
  }
}

export default App;
