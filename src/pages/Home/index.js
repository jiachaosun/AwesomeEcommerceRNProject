import React, {Component} from "react";
import {View, Text, StyleSheet, ListView, Image, TouchableOpacity, PixelRatio} from "react-native";
import {observer} from "mobx-react/native";
import Swiper from "react-native-swiper";
import autobind from "autobind-decorator";
import {Actions} from "react-native-router-flux";

@observer
export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchMoreChannels();
    }

    @autobind
    clickTitle(row) {
        const {channelStore} = this.props;
        // row.title = 222
        Actions.ChannelDetail()
    }

    @autobind
    renderRow(row) {
        return <ChannelRow row={row} clickTitle={this.clickTitle}/>;
    }

    @autobind
    onEndReached() {
        console.log('onEndReached');
        this.fetchMoreChannels();
    }

    fetchMoreChannels() {
        const {channelStore} = this.props;
        if (!channelStore.isFetching)
            channelStore.fetchChannelsFromServer();
    }

    render() {
        // console.log(JSON.parse(JSON.stringify(process.env)).NODE_ENV)
        const {channelStore} = this.props;

        return <View style={styles.container}>
            <Swiper style={styles.wrapper} height={200}>
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

            <View style={{flex:1,paddingBottom:48}}>
                <ListView
                    dataSource={channelStore.dataSource}
                    renderRow={this.renderRow}
                    enableEmptySections={true}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={150}
                />
            </View>

        </View>;
    }
}

@observer
class ChannelRow extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {row} = this.props;
        return (
            <TouchableOpacity style={styles.rowStyles} onPress={this.props.clickTitle.bind(this,row)}>
                <View>
                    <Image style={{height:100,width:100}}
                           source={require('../../../imgs/hot-caramel-macchiato-20151022185811.jpg')}/>
                </View>
                <View style={{flex:1,marginLeft:15,paddingTop:10,marginRight:15}}>
                    <Text style={{fontSize:16,color:"#666"}}>{row.title}</Text>
                    <Text
                        style={{fontSize:12,color:"#919191"}}>{row.subtitle}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    image: {},
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
        flexDirection: 'row',
        paddingTop: 10,
        marginLeft: 15,
        marginRight: 15,
        paddingBottom: 10,
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#666666'
    }
});
