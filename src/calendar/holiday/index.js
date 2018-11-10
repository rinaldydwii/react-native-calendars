import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import PropTypes from 'prop-types';

import styleConstructor from './style';
import {parseDate} from '../../interface';

class Holiday extends Component {
    static propTypes = {
        date: PropTypes.string,
        marking: PropTypes.any,
        theme: PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.style = styleConstructor(this.props.theme);
    }
    
    render() {
        const containerStyle = [this.style.holidayItemView];
        const textDateStyle = [this.style.holidayDateText];
        const textDescStyle = [this.style.holidayDescText];
        let { marking, date } = this.props;
        if (marking) {
            if (marking.holiday !== 'undefined') {
                if (marking.holiday) {
                    return (
                        <View style={containerStyle}>
                            <Text style={textDateStyle}>{date}</Text>
                            <Text style={textDescStyle}>{marking.holidayMessages}</Text>
                        </View>
                    );
                }
            }
        }
        return null;
    }
}

export default Holiday;