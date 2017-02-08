import CategoryStore from "./CategoryStore";
import ChannelStore from "./ChannelStore";
import {TransportLayer} from "../service";

let channelStore = new ChannelStore(TransportLayer);
let categoryStore = new CategoryStore(TransportLayer);

export let store = {
    channelStore,
    categoryStore
};