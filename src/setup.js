import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View} from "react-native";
import {Router, Scene} from "react-native-router-flux";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import CounterStore from "./store/CounterStore";
import {observer} from 'mobx-react/native';

const store = new CounterStore();

@observer
export default class Setup extends Component {
    render() {
        return (
            <Router store={store}>
                <Scene key="root">
                    <Scene key="pageOne" component={PageOne} title="PageOne" initial={true}/>
                    <Scene key="pageTwo" component={PageTwo} title="PageTwo"/>
                </Scene>
            </Router>
        )
    }
}