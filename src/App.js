import React, { Component } from 'react'
import { StyleSheet, View, TabBarIOS } from 'react-native'

// import logo from './logo.svg'
// import './App.css'
import Teams from './Teams'
import Matches from './Matches'
import Home from './Home'

class App extends Component{

    render() {
        return (
            <View style={styles.container}>
                <TabBarIOS>
                    <TabBarIOS.Item
                        // icon="home"
                        // selected={true}
                        title="Home">
                        <Home/>
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        // icon="matches"
                        title="Matches">
                        <Matches/>
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        // icon="teams"
                        selected={true}
                        title="Teams">
                        <Teams/>
                    </TabBarIOS.Item>
                </TabBarIOS>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
    },
})


export default App
