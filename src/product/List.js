/**
 * Created by Lenovo on 9/4/2017.
 */
import React, {Component} from 'react';
import Product from '../models/Product';

import ShopCart from '../models/ShopCart';
import Cart from "../cart/Cart";

class List extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    addToCart(item) {
        ShopCart.addToCart(item);
        console.log(ShopCart.carts.length);

        this.setState({
            cart: ShopCart.carts
        });
    }

    render() {
        const product = new Product();
        const products = product.products();
        const items = products.map((item) => {
            let boundAddToCart = this.addToCart.bind(this, item);

            return <div className="col-sm-6 col-md-4" key={item.id}>
                <div className="thumbnail">
                    <img src="" alt="Logo Product"/>
                    <div className="caption">
                        <h3>{item.name}</h3>
                        <p>...</p>

                        <button className="btn btn-primary" onClick={boundAddToCart}>
                            <i className="glyphicon glyphicon-shopping-cart"></i>
                        </button>


                    </div>
                </div>
            </div>
        });
        return (
            <div className="row">
                <div className="col-md-12">
                    <Cart carts={this.state.cart}/>
                </div>
                <div className="col-md-12">
                    <div className="row">{items}</div>
                </div>
            </div>


        );
    }
}

export default List;