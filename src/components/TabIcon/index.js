import React, {PropTypes, Component} from "react";
import {Text} from "react-native";

const propTypes = {
    selected: PropTypes.bool,
    title: PropTypes.string,
};

class TabIcon extends Component {
    render() {
        return (
            <Text style={{ color: this.props.selected ? 'red' : 'black' }}>
                {this.props.title}
            </Text>
        )
    }
}

TabIcon.propTypes = propTypes;

export default TabIcon;