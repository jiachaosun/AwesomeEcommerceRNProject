import React, {Component} from "react";
import {View, Text, StyleSheet, ListView, Image, TouchableOpacity, Dimensions} from "react-native";
import {observer} from "mobx-react/native";
import autobind from "autobind-decorator";
import {Actions} from "react-native-router-flux";
const {height, width} = Dimensions.get('window');

@observer
export default class Categories extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
            ])
        };
    }

    @autobind
    renderRow(row) {
        return (
            <TouchableOpacity style={styles.row} onPress={Actions.ChannelDetail}>
                <View>
                    <Image style={{width:171,height:147}} source={require('../../../imgs/category-1.png')}/>
                </View>
                <View>
                    <Text>{row}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        const store = this.props.store;
        return <View style={styles.container}>

            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.list}
                pageSize={2}
                style={{paddingTop:20}}
            />

        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 48,
    },
    list: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    row: {
        justifyContent: 'center',
        margin: 3,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#CCC'
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
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    rowStyles: {
        flexDirection: 'row'
    }
});
