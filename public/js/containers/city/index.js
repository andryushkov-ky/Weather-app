import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import moment from 'moment'

import {
    fetchCityForecast
} from '../../actions'

import {
    getForecastByName
} from '../../selectors'

import ForecastItem from '../../components/ForecastItem'

class City extends Component {
    constructor (props) {
        super(props)
    }

    componentDidMount () {
        this.props.fetchCityForecast(this.props.params.name)
    }

    renderForecast (forecast) {
        return (
            <div className="forecast">
                {
                    forecast.forecastday.map((day, index) => {
                        return <ForecastItem key={index} data={day} />
                    })
                }
            </div>
        )
    }

    render () {
        const {current, forecast, location} = this.props.forecast || {current:'', forecast:'', location:''}

        return (
            <div className="city">
                <div className="city__back-wrap">
                    <Link to="/">
                        <button className="city__back">Main</button>
                    </Link>
                </div>
                { current && forecast && location &&
                <div>
                    <div className="city__header">
                        <h1 className="city__row city__row--title">{location.name}, {location.region}</h1>
                        <div className="city__row city__row--date">{moment(current.last_updated_epoch*1000).format('LLLL')}</div>
                        <div className="city__row city__row--desc">{current.condition.text}</div>
                    </div>
                    <div className="city__main">
                        <div className="city__left">
                            <img src={current.condition.icon} alt="" className="city__img"/>
                            <div className="city__deg">{current.temp_c}&#176;C</div>
                        </div>
                        <div className="city__right">
                            <div className="city__col">
                                <span className="city__col-name">Humidity:</span>
                                <span className="city__col-data">{current.humidity}</span>
                            </div>
                            <div className="city__col">
                                <span className="city__col-name">Wind:</span>
                                <span className="city__col-data">{current.wind_kph} kph {current.wind_degree}&#176;</span>
                            </div>
                            <div className="city__col">
                                <span className="city__col-name">Feels like:</span>
                                <span className="city__col-data">{current.feelslike_c}&#176;C</span>
                            </div>
                        </div>
                    </div>
                    {this.renderForecast(forecast)}
                </div>
                }
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