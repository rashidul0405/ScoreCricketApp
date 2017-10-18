import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, TabBarIOS } from 'react-native'
import PropTypes from 'prop-types'

import { switchTab } from './actions'

// import logo from './logo.svg'
// import './App.css'
import Teams from './Teams'
import Matches from './Matches'
import Home from './Home'

class App extends Component{

    static propTypes = {
        tab: PropTypes.string.isRequired,
        onTabSelect: PropTypes.func.isRequired
    }

    render() {
        const { tab, onTabSelect } = this.props

        return (
            <View style={styles.container}>
                <TabBarIOS>
                    <TabBarIOS.Item
                        // icon="home"
                        selected={tab === 'home'}
                        onPress={() => onTabSelect('home')}
                        title="Home">
                        <Home/>
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        // icon="matches"
                        selected={tab === 'matches'}
                        onPress={() => onTabSelect('matches')}
                        title="Matches">
                        <Matches/>
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        // icon="teams"
                        selected={tab === 'teams'}
                        onPress={() => onTabSelect('teams')}
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

const mapStateToProps = (state) => ({
    tab: state.navigation.tab
})

export default connect(
    mapStateToProps,
    { onTabSelect: switchTab }
)(App)
