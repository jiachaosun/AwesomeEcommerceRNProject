import CategoryStore from "./CategoryStore";
import ChannelStore from "./ChannelStore";
import ProductStore from "./ProductStore";
import {TransportLayer} from "../service";

let channelStore = new ChannelStore(TransportLayer);
let categoryStore = new CategoryStore(TransportLayer);
let productStore = new ProductStore(TransportLayer);

export let store = {
    channelStore,
    categoryStore,
    productStore,
};