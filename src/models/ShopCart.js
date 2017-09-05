/**
 * Created by Lenovo on 9/5/2017.
 */
import _ from 'lodash';

class ShopCart {

    static carts = [];

    constructor() {
        this.carts = [];
    }

    static addToCart(item) {

        const foundItem = _.find(this.carts, {id: item.id});
        if (!foundItem) this.carts.push(item);
        console.log(this.carts);
    }

    static cart() {
        return this.carts;
    }
}

export default ShopCart;