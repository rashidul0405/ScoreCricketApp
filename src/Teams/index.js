import React, {Component} from 'react'
import {Text} from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

class Teams extends Component {

    static navigationOptions = {
        title: 'Teams (11)',
        tabBarLabel: 'Teams',
        tabBarIcon: ({tintColor, focused}) => (
            <Icons
                name={focused ? 'ios-people' : 'ios-people-outline'}
                size={26}
                style={{color: tintColor}}
            />
        )

    }

    render() {
        return (
            <Text>
                Teams
            </Text>
        )
    }
}

export default Teams