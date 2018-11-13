import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomeComponent from './component/HomeComponent';
import IntroductionComponent from'./component/IntroductionComponent';
import ShoppingComponent from './component/ShoppingComponent';
import Navbar from './Navbar';
class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <div className="App">
     <Navbar />
      <Route exact path='/' component={HomeComponent}></Route>
      <Route path='/intro' component={IntroductionComponent}></Route>
      <Route path='/shopping' component={ShoppingComponent}></Route>
     </div>
     
     </BrowserRouter>
    );
  }
}

export default App;
