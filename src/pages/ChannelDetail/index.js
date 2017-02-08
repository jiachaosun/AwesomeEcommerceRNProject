import React, {Component} from "react";
import {View, Text, StyleSheet, ListView, Image} from "react-native";
import {observer} from "mobx-react/native";
import Swiper from "react-native-swiper";
import Button from "react-native-button";

@observer
export default class ChannelDetail extends Component {

    render() {
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
            </View>

        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:64,
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
