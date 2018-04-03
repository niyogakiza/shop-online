import React from 'react';
import { Route } from 'react-router-dom';
import HeaderToolWrapper from 'HeaderToolWrapper';
import HeaderBrand from './HeaderBrand';
import HeaderNavigation from '../nav/HeaderMenu';
import HeaderDivider from './HeaderDivider';
import 'assets/style/header.scss';

const Header = (props) =>{
    let { location: {pathname}, cart} = props;

    return(
        <header>
            <HeaderToolWrapper cart={cart}/>
            <HeaderBrand/>
            <Route component={HeaderNavigation}/>
            {pathname !== '/' ? <Route component={HeaderDivider}/> :''}
        </header>
    )
};



const propTypes = {
    cart: PT.arrayOf(PT.object)
};

Header.propTypes = propTypes;
export default Header;