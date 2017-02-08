import {observable, computed} from "mobx";

export class CategoryModel {

    id = null;
    title = null;
    subtitle = null;
    desc = null;
    icon = null;

    store = null;

    constructor(store, object) {
        this.store = store;
        this.id = object.id;
        this.title = object.title;
        this.subtitle = object.subtitle;
        this.desc = object.desc;
        this.icon = object.icon;
    }

    toJS() {
        return {
            id: this.id,
            title: this.title,
            subtitle: this.subtitle,
            desc: this.desc,
            icon: this.icon
        }
    }

}