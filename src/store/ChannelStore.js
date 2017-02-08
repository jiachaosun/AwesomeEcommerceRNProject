import {action, reaction, observable, observe, computed, autorun} from "mobx";
import autobind from "autobind-decorator";
import {ListView} from "react-native";
import {ChannelModel} from "../models/ChannelModel";

@autobind
export default class ChannelStore {

    @observable channels = [];
    transportLayer;
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    page = 0;
    isFetching = false;

    @computed get dataSource() {
        return this.ds.cloneWithRows(this.channels.slice());
    }

    constructor(transportLayer) {
        this.transportLayer = transportLayer;
    }

    fetchChannelsFromServer() {
        this.isFetching = true;
        this.transportLayer.fetchChannels(this.page)
            .then(json => {
                json.map(channel => {
                    this.channels.push(
                        new ChannelModel(this, channel)
                    );
                    this.page++;
                    this.isFetching = false;
                });
            })
    }

    // @action toggleTitle(id) {
    //     this.channels.forEach((channel, index) => {
    //         if (id === channel.id) {
    //             channel.setTitle(123);
    //         }
    //     });
    // }

}