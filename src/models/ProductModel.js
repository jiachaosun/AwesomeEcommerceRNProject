import {observable, computed} from "mobx";

export class ProductModel {

    id = null;
    title = null;
    subtitle = null;
    desc = null;
    icon = null;
    price = null;
    categoryBy = null;

    store = null;

    constructor(store, object) {
        this.store = store;
        this.id = object.id;
        this.title = object.title;
        this.subtitle = object.subtitle;
        this.desc = object.desc;
        this.icon = object.icon;
        this.price = object.price;
        this.categoryBy = object.categoryBy;
    }

    toJS() {
        return {
            id: this.id,
            title: this.title,
            subtitle: this.subtitle,
            desc: this.desc,
            icon: this.icon,
            price: this.price,
            categoryBy: this.categoryBy,
        }
    }

}