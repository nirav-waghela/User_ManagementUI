import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'; 
import NavMenu from './components/NavMenu';
import UserRegistration from './containers/User-Registration';
import UserLogin from './containers/User-login'
import PrivateRoute from './PrivateRoute'
import AddProductWrapper from './containers/Add-Product'
import Product from './containers/products'
 
function App() {
  return (
    <Router>
      <div>
        <NavMenu />
        <Route path= '/login' component={UserLogin} />
        <Route path='/' exact component={UserRegistration} />
        <PrivateRoute path='/addProduct' exact component={AddProductWrapper} />
        <PrivateRoute path='/dashboard' exact component={Product} />
      </div>
    </Router>
  );
}

export default App;
