import React, { Component } from 'react'
import { StyleSheet, View,  Text } from 'react-native'

// import logo from './logo.svg'
// import './App.css'

class App extends Component{

    render() {
        return (
            <View style={styles.container}>
                <Text>Hey Legend</Text>
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
