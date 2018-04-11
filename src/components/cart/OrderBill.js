import React from 'react';
import { List, Divider } from 'semantic-ui-react';


//const propTypes = { orderValue: PT.number };

const OrderBill = (props) =>(
    <List className='order-bill'>
        <List.Item as='li'>
            <span>Order Value:</span>
            <span>£{props.orderValue.toFixed(2)}</span>
        </List.Item>
        <List.Item as='li'>
            <span>Delivery</span>
            <span>£20.00</span>
        </List.Item>
        <List.Item  as='li'>
            <Divider/>
        </List.Item>
        <List.Item as='li'>
            <span>Total</span>
            <span>£{(props.orderValue+10).toFixed(2)}</span>
        </List.Item>
        <List.Item as='li'>
            30 days withdrawal.
        </List.Item>
    </List>
);
//OrderBill.propTypes = propTypes;

export default OrderBill;