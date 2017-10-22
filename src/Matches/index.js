import React, { Component } from 'react'
import { Text } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

class Matches extends Component{

    static navigationOptions = {
        title: 'Previous Matches',
        tabBarLabel: 'Matches',
        tabBarIcon: ({ tintColor, focused }) => (
            <Icons
                name={ focused ? 'ios-paper' : 'ios-paper-outline' }
                size={26}
                style={{ color: tintColor }}
            />
        )

    }

    render(){
        return (
            <Text>
                Matches
            </Text>
        )
    }
}

export default Matches