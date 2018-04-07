import React from 'react';
import { Button, Icon, Tab, Popup } from 'semantic-ui-react';

const propTypes = {
    dataDes: PT.string,
    proInfo: PT.object,
    canAddToCart: PT.bool,
    hasSelected: PT.bool,
    handleAddOnceToCart: PT.func
};

const Delivery = (props) =>(
    <Tab.Pane>
        Delivery: Shipping is available to residential address or other address in United Kingdom Mainland only.
        Payment: We accept card payments via MasterCard and Visa or PayPal.
    </Tab.Pane>
);

const ProductDeatail = (props) => {
    const panes = [
        {menuItem: 'Description', render: () => <Tab.Pane>{props.dataDes}</Tab.Pane>},
        {menuItem: 'Details', render:() => <Tab.Pane>No Details</Tab.Pane>},
        {menuItem: 'Share', render:() => <Tab.Pane>No Share</Tab.Pane>},
        {menuItem: 'Delivery', render:() => <Delivery/>},
    ];

    let {
        proInfo,
        hasSelected,
        canAddToCart,
        handleAddToCart,
        handleAddOnceToCart
    } = props;

    const btnAddToCart = (
        <Button
            as='button'
            disabled={!canAddToCart}
            className='add-to-cart'
            icon
            onClick={() =>{
                if(!hasSelected || !canAddToCart) return;
                handleAddToCart(proInfo);
                handleAddOnceToCart();
            }}
        >
            <Icon name='shopping bag'/>
            Add to shopping cart
        </Button>
    );

    return(
        <div className="product-detail">
            <span className='delivers'>Delivers in:<strong>1-4 working days</strong></span>
            <Popup
                trigger={btnAddToCart}
                content={hasSelected ?
                    'Successfully added to the shopping cart, but you can buy this product once.' :
                    'Color and Size must be selected.'}
                on='click'
                hideOnScroll
                inverted
            />
            <Button
                as='button'
                className='save-as-favourite'
                icon
            >
                <Icon name='empty heart'/>
                Save as favourite
            </Button>
            <Tab menu={{ attached: 'top'}} panes={panes}/>
        </div>

    );

};

ProductDeatail.propTypes = propTypes;

export default ProductDeatail;