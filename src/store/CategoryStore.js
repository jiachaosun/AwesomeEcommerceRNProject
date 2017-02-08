import {action, reaction, observable, observe, computed, autorun} from "mobx";
import autobind from "autobind-decorator";
import {ListView} from "react-native";
import {CategoryModel} from "../models/CategoryModel";

@autobind
export default class CategoryStore {

    @observable categories = [];
    transportLayer;
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    page = 0;
    isFetching = false;

    @computed get dataSource() {
        return this.ds.cloneWithRows(this.categories.slice());
    }

    constructor(transportLayer) {
        this.transportLayer = transportLayer;
    }

    fetchcategoriesFromServer() {
        this.isFetching = true;
        this.transportLayer.fetchCategories(this.page)
            .then(json => {
                json.map(category => {
                    this.categories.push(
                        new CategoryModel(this, category)
                    );
                    this.page++;
                    this.isFetching = false;
                });
            })
    }

}