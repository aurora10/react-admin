import {Order_Item} from "./order_item";

export class Order {


    id: number;
    first_name:string;
    last_name:string;
    email: string;
    total: number;
    order_items: Order_Item[];

    constructor(id = 0, first_name = '', last_name = '', email = '', total =0, order_items = []) {
            this.id = id;
            this.first_name = first_name;
            this.last_name = last_name;
            this.email = email;
            this.total = total;
            this.order_items = order_items
    }
}