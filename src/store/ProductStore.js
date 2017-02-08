import {action, reaction, observable, observe, computed, autorun} from "mobx";
import autobind from "autobind-decorator";
import {ListView} from "react-native";
import {ProductModel} from "../models/ProductModel";

@autobind
export default class ProductStore {

    @observable products = [];
    transportLayer;
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    page = 0;
    isFetching = false;

    @computed get dataSource() {
        return this.ds.cloneWithRows(this.products.slice());
    }

    constructor(transportLayer) {
        this.transportLayer = transportLayer;
    }

    fetchProductsByCategoryFromServer(category) {
        this.isFetching = true;
        this.transportLayer.fetchProductsByCategory(this.page, category)
            .then(json => {
                json.map(product => {
                    this.products.push(
                        new ProductModel(this, product)
                    );
                    this.page++;
                    this.isFetching = false;
                });
            })
    }

    reset(){
        this.products = [];
        this.page = 0;
        this.isFetching = false;
    }

}