/**
 * Created by Lenovo on 9/5/2017.
 */
import React, {Component} from 'react';

import ShopCart from '../models/ShopCart';

class Cart extends Component {

    constructor(props){
        super(props);
        console.log(props);
        this.state = {};
    }

    componentWillMount(){
        this.setState({
            cart: ShopCart.carts
        });
    }

    render(){
        return (
         <div className="pull-right">
             <a className="btn btn-default" role="button">
                 <i className="glyphicon glyphicon-shopping-cart"></i> &nbsp;
                 <span className="badge">{this.state.cart.length}</span>
             </a>
         </div>
        );
    }
}

export default Cart;