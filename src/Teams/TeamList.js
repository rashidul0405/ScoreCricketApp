import React, { Component } from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { addTeam } from '../actions'


class TeamList extends Component{
    
    _renderItem = ({index, item}) => {
        return (
            <Text style={styles.item} key={index}>{item}</Text>
        )
    }

    _keyExtractor = (item, index) => index

    render(){

        return (
            <FlatList
                data={this.props.teams}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        )
    }
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        borderBottomWidth: 1,
        borderColor: 'green'
    },
})

const mapStateToPros = ( state ) => ({
    teams: state.teams
})

export default connect(
    mapStateToPros,
    { addTeam }
)(TeamList)