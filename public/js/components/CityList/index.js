import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import R from 'ramda'

import {
    getCities
} from '../../selectors'

import ListItem from '../ListItem'

const CityList = (props) => {
    const {cities} = props;

    return (
        <div className="city-list">
            {
                !!Object.keys(cities).length &&
                Object.keys(cities).map((name, index) => <ListItem city={cities[name]} name={name} key={index}/>)
            }
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    cities: getCities(state)
})

export default connect(mapStateToProps, null)(CityList)