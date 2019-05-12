import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import Product from './ShopCart/Product'
import Shopping from './ShopCart/Shopping'

class ShopCart extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div>
            <Switch>
                <Route path='/shopcart' exact component={Shopping} />
                <Route path='/shopcart/shopping' component={Shopping} />
                <Route path='/shopcart/product' component={Product} />
            </Switch>
           

           
        </div>;
    }
}

export default connect()(ShopCart);