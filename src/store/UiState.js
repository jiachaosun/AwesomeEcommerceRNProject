import {observable, computed, asStructure} from 'mobx';

class UiState {
    @observable language = "en_US";
    @observable pendingRequestCount = 0;

    constructor() {

    }

    @computed get appIsInSync() {
        return this.pendingRequestCount === 0
    }
}

singleton = new UiState();
export default singleton;