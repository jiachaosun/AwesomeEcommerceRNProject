import React, {Component} from "react";
import {View, Text} from "react-native";
import {observer} from "mobx-react/native";

@observer
export default class PageTwo extends Component {
    render() {

        const store = this.props.store;

        return (
            <View style={{margin: 128}}>
                <Text>This is PageTwo!</Text>
                <Text>total: {store.total}</Text>
            </View>
        )
    }
}