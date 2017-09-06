/**
 * Created by Lenovo on 9/4/2017.
 */
import moment from 'moment/moment';


class Product {


    constructor(name, type, price) {
        this.id = this.guid();
        this.name = name;
        this.type = type;
        this.price = price;
    }

    guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }


    products() {
        let product1 = new Product('Asus', 'Laptop', 14000);
        let product2 = new Product('Lenovo', 'Laptop', 12000);
        let product3 = new Product('Macbook Pro 13 inch', 'Laptop', 18000);
        let product4 = new Product('Macbook Pro 13 inch Retina Display', 'Laptop', 18000);
        let product5 = new Product('Macbook Pro 15 inch Retina Display ', 'Laptop', 18000);
        let product6 = new Product('Macbook Air 13 inch', 'Laptop', 18000);

        let list = [];
        list.push(product1);
        list.push(product2);
        list.push(product3);
        list.push(product4);
        list.push(product5);
        list.push(product6);

        return list;
    }

}

export default Product;