import {action, reaction, observable, observe, computed, autorun} from "mobx";

// @observable
export class ChannelModel {

    id = null;
    @observable title = null;
    @observable subtitle = null;
    desc = null;
    icon = null;
    content = null;
    mainImgs = null;

    store = null;

    constructor(store, object) {
        this.store = store;
        this.id = object.id;
        this.title = object.title;
        this.subtitle = object.subtitle;
        this.desc = object.desc;
        this.icon = object.icon;
        this.content = object.content;
        this.mainImgs = object.mainImgs;
    }

    setTitle(title) {
        this.title = title;
    }

    toJS() {
        return {
            id: this.id,
            title: this.title,
            subtitle: this.subtitle,
            desc: this.desc,
            icon: this.icon,
            content: this.content,
            mainImgs: this.mainImgs
        }
    }

    static fromJS(store, object) {
        return new ChannelModel(store, object.id, object.title, object.subtitle, object.desc, object.icon, object.content, object.mainImgs)
    }

}