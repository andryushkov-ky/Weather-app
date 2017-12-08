import React, {Component} from 'react'
import moment from 'moment'

const ForecastItem = (props) => {
    const {data} = props
    return (
        <div className="forecast__item">
            <div className="forecast__day">{moment(data.date_epoch * 1000).format("ddd")}</div>
            <img src={data.day.condition.icon} className="forecast__img"/>
            <div className="forecast__deg">
                <div className="forecast__temp forecast__temp--max">{data.day.maxtemp_c}&#176;</div>
                <div className="forecast__temp forecast__temp--min">{data.day.mintemp_c}&#176;</div>
            </div>
        </div>
    )
}

export default ForecastItem