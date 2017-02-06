import React, {Component} from "react";
import {View, Text, StyleSheet, ListView, Image} from "react-native";
import {observer} from "mobx-react/native";
import Swiper from "react-native-swiper";
import Button from "react-native-button";

@observer
export default class ChannelDetail extends Component {

    render() {
        const store = this.props.store;
        return <View style={styles.container}>
            <Swiper style={styles.wrapper} height={150} showsPagination={false}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>

            <View style={{flex:1}}>
                <Text style={styles.welcome}>
                    Welcome to React Native Reactive!
                </Text>
                <Text>Counter: {store.counter}</Text>
                <Text>Total clicks: {store.total}</Text>
                <Button onPress={store.increase}>+</Button>
                <Button onPress={store.decrease}>-</Button>
                <Button onPress={()=>Actions.error("Error message")}>modal</Button>
            </View>

        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:64,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    rowStyles: {
        flexDirection: 'row'
    }
});
