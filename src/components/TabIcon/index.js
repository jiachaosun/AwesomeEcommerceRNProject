import React, {PropTypes, Component} from "react";
import {Text, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const propTypes = {
    selected: PropTypes.bool,
    title: PropTypes.string,
};

class TabIcon extends Component {
    render() {
        return (
            <View>
                <View style={{justifyContent:'center',alignItems:'center',marginBottom:5}}>
                    <Icon name="rocket" size={20} color="#900"/>
                </View>
                <Text style={{ color: this.props.selected ? '#6F4E37' : '#666666' }}>
                    {this.props.title}
                </Text>
            </View>
        )
    }
}

TabIcon.propTypes = propTypes;

export default TabIcon;