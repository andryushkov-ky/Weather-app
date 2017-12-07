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
                className = 'list-item__info'
            >
                {props.name}
            </Link>
            <div className="list-item__buttons">
                <div className="list-item__refresh" onClick={props.refreshCity.bind(this, props.name)}>Перезагрузить</div>
                <div className="list-item__delete" onClick={props.deleteCity.bind(this, props.name)}>Удалить</div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    deleteCity,
    refreshCity
}

export default connect(null, mapDispatchToProps)(ListItem)