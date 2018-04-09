import React from 'react';
import { Header } from 'semantic-ui-react';


class ProductCount extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="product-count">
                <Header as='h4'>
                    Count:{" "}
                    <span>Select Count</span>
                </Header>
            </div>
        );
    }
}

export default ProductCount;