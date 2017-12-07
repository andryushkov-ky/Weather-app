import React, {Component} from 'react'
import {connect} from 'react-redux'

import {
    fetchCityForecast
} from '../../actions'

import {
    getForecastByName
} from '../../selectors'

class City extends Component {
    constructor (props) {
        super(props)
    }

    componentDidMount () {
        this.props.fetchCityForecast(this.props.params.name)
    }

    render () {
        const {current, forecast, location} = this.props.forecast || {current:'', forecast:'', location:''}

        return (
            <div>
                <h1>City</h1>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    forecast: getForecastByName(state, ownProps.params.name)
})

const mapDispatchToProps = {
    fetchCityForecast
}

export default connect(mapStateToProps, mapDispatchToProps)(City)