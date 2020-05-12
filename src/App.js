import React from 'react';
import './App.scss';
import {Switch,Route} from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './Components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in_and_sign-up/sign-in_and_sign-up.component';


function App() { 
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route  path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
      
    </div>
  );  
}

export default App; 
