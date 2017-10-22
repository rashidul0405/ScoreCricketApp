import React, { Component } from 'react'
import { Text } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

class Home extends Component{

    static navigationOptions = {
        title: 'Welcome',
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
            <Icons
                name={ focused ? 'ios-tennisball' : 'ios-tennisball-outline' }
                size={26}
                style={{ color: tintColor }}
            />
        )

    }

    render(){
        return (
            <Text>
                Home
            </Text>
        )
    }
}

export default Home