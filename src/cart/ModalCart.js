/**
 * Created by Lenovo on 9/6/2017.
 */

import React, {Component} from 'react';

import ShopCart from '../models/ShopCart';

import _ from 'lodash';

class ModalCart extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.checkout = this.checkout.bind(this);
    }

    componentDidMount() {
        this.setState({
            carts: this.props.carts
        });
    }

    removeCartItem(item) {

        _.remove(this.props.carts, {id: item.id});
        _.remove(ShopCart.carts, {id: item.id});
        this.forceUpdate();
    }

    checkout(){
        console.log(ShopCart.carts);
    }

    render() {


        let listCart = <tr>
            <td colSpan={5}>Cart is empty :(</td>
        </tr>;
        let total = 0;
        if (this.props.carts) {

            listCart = this.props.carts.map((item) => {
                total += item.price;
                let boundRemoveCart = this.removeCartItem.bind(this, item);
                return <tr key={item.id}>
                    <td>
                        <a className="btn btn-link text-danger" onClick={boundRemoveCart}>
                            <i className="glyphicon glyphicon-trash"></i>
                        </a>
                    </td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td className="text-right">{item.price}</td>
                </tr>
            });

        }

        return (
            <div className="modal fade" id="modal-cart" role="dialog">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">Your Shopping Cart</h4>
                        </div>
                        <div className="modal-body">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th className="text-right">Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                {listCart}
                                <tr>
                                    <td colSpan={4} className="text-right"><strong>Total</strong></td>
                                    <td className="text-right">Rp. {total}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.checkout}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalCart;