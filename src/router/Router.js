import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    browserHistory
} from 'react-router-dom';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Home from '../components/home/HomeContainer';
import FilterSite from '../components/main/FilterSite';
import SearchSite from '../components/main/SearchSite';
import ProductDetailSite from '../components/product/ProductDetailSite';
import CartSite from '../components/cart/CartSite';