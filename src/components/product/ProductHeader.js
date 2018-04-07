import React from 'react';
import { Header } from 'semantic-ui-react';


const ProductHeader = (props) => {
    const { name, price:{ salePrice, marketPrice}} = props;

    let clsPrice = '', originValue, actualValue;
    if(!marketPrice){
        actualValue = '$' + salePrice;
        originValue = null,
            clsPrice = 'common';
    } else {
        actualValue = '$' + salePrice;
        originValue = '$' + marketPrice;
        clsPrice = 'discount';
    }
    return(
        <hgroup>
            <Header as='h2' content={name}/>
            <h3 className="product-price">
                <span className={clsPrice}>{actualValue}</span>
                <span>{originValue}</span>
            </h3>
        </hgroup>
    );
};
export default ProductHeader;