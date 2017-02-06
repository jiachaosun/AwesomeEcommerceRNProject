import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View} from "react-native";
import {Router, Scene, Modal} from "react-native-router-flux";
import PageTwo from "./PageTwo";
import CounterStore from "./store/CounterStore";
import {observer} from "mobx-react/native";
import {TabIcon, Error} from "./components";
import {Home,ChannelDetail} from "./pages";

const store = new CounterStore();

@observer
export default class Setup extends Component {
    render() {
        return (
            <Router store={store}>
                <Scene key="modal" component={Modal}>
                    <Scene key="root">
                        <Scene key="tabbar"
                               tabs={true}
                               tabBarStyle={styles.tabBarStyle}
                               tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}>
                            <Scene key="tab1" title="首页" icon={TabIcon} hideNavBar>
                                <Scene key="Home" component={Home} title="首页" initial={true}/>
                            </Scene>
                            <Scene key="tab2" title="商品" icon={TabIcon}>
                            </Scene>
                            <Scene key="tab3" title="订单" icon={TabIcon}>
                            </Scene>
                        </Scene>

                        <Scene key="ChannelDetail" component={ChannelDetail} title="资讯详情"/>
                    </Scene>
                    <Scene key="error" component={Error}/>
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