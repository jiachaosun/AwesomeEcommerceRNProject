import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View} from "react-native";
import {Router, Scene} from "react-native-router-flux";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import CounterStore from "./store/CounterStore";
import {observer} from "mobx-react/native";
import {TabIcon} from "./components";

const store = new CounterStore();

@observer
export default class Setup extends Component {
    render() {
        return (
            <Router store={store}>
                <Scene key="root">
                    <Scene key="tabbar"
                           tabs={true}
                           tabBarStyle={styles.tabBarStyle}
                           tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}>
                        <Scene key="tab1" title="Tab #1" icon={TabIcon}>
                            <Scene key="pageOne_1" component={PageOne} title="PageOne" initial={true}/>
                            <Scene key="pageTwo_1" component={PageTwo} title="PageTwo"/>
                        </Scene>
                        <Scene key="tab2" title="Tab #2" icon={TabIcon}>
                            <Scene key="pageOne_2" component={PageOne} title="PageOne" initial={true}/>
                            <Scene key="pageTwo_2" component={PageTwo} title="PageTwo"/>
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarStyle: {
        backgroundColor: '#eee',
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#ddd',
    },
});