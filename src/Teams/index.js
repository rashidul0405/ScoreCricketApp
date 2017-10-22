import React, {Component} from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Icons from 'react-native-vector-icons/Ionicons'

import TeamList from './TeamList'

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
        const Nav = StackNavigator({
            List: {
                screen: TeamList,
                navigationOptions: {
                    title: 'Teams List'
                }
            }
        })
        return (
            <Nav/>
        )
    }
}



export default Teams