import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    browserHistory
} from 'react-router-dom';
import axios from 'axios';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Home from '../components/home/HomeContainer';
import FilterSite from '../components/main/FilterSite';
import SearchSite from '../components/main/SearchSite';
import ProductDetailSite from '../components/product/ProductDetailSite';
import CartSite from '../components/cart/CartSite';
import LoginSite from '../components/user/LoginSite';
import RegisterSite from '../components/user/RegisterSite';

class RouteApp extends Component{
    constructor(props){
        super(props);

        this.state = {
            isLogin: false,
            cart: []
        };

        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleAddToCart(product){
        this.setState({ cart: [...this.state.cart, product]})
    }

    handleLogin(email, password){
        let dataUser = [];
        const _this = this;

        axios
            .get('http://localhost:8080/src/data/userdata.json')
            .then(res =>{
                res.data.forEach(function(item){
                    if(item.email !== email) return;
                    if(item.password !== password) return;
                    _this.setState({ isLogin: true});
                })
            })
            .catch(err => console.log(err))
    }

    render(){
        const { handleAddToCart, handleLogin } = this;
        const { cart, isLogin } = this.state;

        return(
            <Router history={browserHistory}>
                <div id='body'>
                    <Route children={({location}) =>{
                        return(
                            <Header location={location} cart={cart}/>
                        );
                    }}
                    />
                    <Switch>
                        <Redirect from='/home' to='/'/>
                        <Route exact path='/' component={Home}/>
                        <Route path='/search' component={SearchSite}/>
                        <Route path='/cart' children={() =>{
                            return(
                                <CartSite
                                    isLogin={isLogin}
                                    cart={cart}
                                    handleLogin={handleLogin}
                                />
                            );
                        }}/>
                        <Route path='/login' children={() =>{
                            return(
                                <LoginSite
                                    isLogin={isLogin}
                                    handleLogin={handleLogin}
                                />
                            );
                        }}/>
                        <Route path='register' component={RegisterSite}/>
                        <Route path='/:category/:type/**' children={() =>{
                            return(
                                <ProductDetailSite handleAddToCart={handleAddToCart}/>
                            );
                        }}/>
                        <Route path='/:category' component={FilterSite}/>
                        <Redirect from='*' to='/'/>
                    </Switch>
                    <Route component={Footer}/>
                </div>
            </Router>
        );
    }
}

export default RouteApp;