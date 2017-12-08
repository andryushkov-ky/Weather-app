import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import {
    deleteCity,
    refreshCity
} from '../../actions'

const ListItem = (props) => {
    const {city} = props

    return (
        <div className="list-item">
            <Link
                to = {`/city/${props.name}`}
                className='list-item__info'
            >
                <img src={city.condition.icon} className='list-item__img'/>
                <div className="list-item__city">
                    <h3 className="list-item__title">{props.name}</h3>
                    <div className="list-item__data">
                        <span className="list-item__col">{city.temp_c}&#176;C</span>
                        <span className="list-item__col">{city.humidity}%</span>
                    </div>
                </div>

            </Link>
            <div className="list-item__buttons">
                <div className="list-item__btn list-item__btn--refresh" onClick={props.refreshCity.bind(this, props.name)}></div>
                <div className="list-item__btn list-item__btn--delete" onClick={props.deleteCity.bind(this, props.name)}></div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    deleteCity,
    refreshCity
}

export default connect(null, mapDispatchToProps)(ListItem)