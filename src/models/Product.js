/**
 * Created by Lenovo on 9/4/2017.
 */
import moment from 'moment/moment';

class Product {


    constructor(name, type, price){
        this.id = moment().format('YmdHis') + Math.random();
        this.name = name;
        this.type = type;
        this.price = price;
    }



    products(){
        let product1 = new Product('Asus', 'Laptop', 14000);
        let product2 = new Product('Lenovo', 'Laptop', 12000);
        let product3 = new Product('Macbook', 'Laptop', 18000);
        let product4 = new Product('Macbook', 'Laptop', 18000);
        let product5 = new Product('Macbook', 'Laptop', 18000);
        let product6 = new Product('Macbook', 'Laptop', 18000);

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