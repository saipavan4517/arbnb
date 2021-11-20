import React,{useState} from "react";
import {BrowserRouter as Router,Switch ,Route, Redirect,useHistory} from "react-router-dom";
import AllNature from "./components/AllNature"
import Header from './components/Header/Header';
import ProductsByCategoryComponent from './components/Products/ProductsByCategory'
import ProductInfo from "./components/Products/ProductInfo";


const AppRoutes = () =>{


  return (
  <Router>
    <Header />
    <Switch>
        <Route exact path="/" component={AllNature} />
        <Route exact path="/category/:catogories" component={ProductsByCategoryComponent} />
        <Route exact path="/:catogories/product/:id" component={ProductInfo} />
    </Switch>
  </Router>
)}

export default AppRoutes;
