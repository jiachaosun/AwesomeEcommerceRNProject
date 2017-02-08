import React, {Component} from "react";
import {View, Text, StyleSheet, ListView, Image, TouchableOpacity} from "react-native";
import {observer} from "mobx-react/native";
import autobind from "autobind-decorator";
import {Actions} from "react-native-router-flux";

@observer
export default class ProductList extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }

    componentDidMount() {
        this.fetchMoreProducts()
    }

    fetchMoreProducts() {
        const {store, cid} = this.props;
        const {productStore} = store;
        if (!productStore.isFetching)
            productStore.fetchProductsByCategoryFromServer(cid);
    }

    @autobind
    renderRow(row) {
        return (
            <TouchableOpacity style={styles.rowStyles} onPress={Actions.ChannelDetail}>
                <View>
                    <Image source={require('../../../imgs/100x100.png')}/>
                </View>
                <View>
                    <Text>{row.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        const {store} = this.props;
        const {productStore} = store;
        return <View style={styles.container}>

            <ListView
                dataSource={productStore.dataSource}
                renderRow={this.renderRow}
                enableEmptySections={true}
            />

        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop: 64
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
