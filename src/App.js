import React  from 'react'
import { StyleSheet, View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'


// import logo from './logo.svg'
// import './App.css'
import Teams from './Teams'
import Matches from './Matches'
import Home from './Home'

const App = () => {

    const MainNav = TabNavigator({
        Home: {
            screen: Home,
        },
        Matches: {
            screen: Matches,
        },
        Teams: {
            screen: Teams,
        }
    })

    return (
        <View style={styles.container}>
            <MainNav />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },
})

export default App