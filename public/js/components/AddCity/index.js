import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import request from 'superagent'

import Form from './form.js'

import {
    addCity
} from '../../actions'

class AddCity extends Component {
    constructor (props) {
        super (props);

        this.state = {
        };

        this.submit = this.submit.bind(this)
    }

    submit ({city}) {
        this.props.addCity(city);
    }

    render () {
        return (
            <div className="add-city">
                <Form onSubmit={this.submit} />
            </div>
        )
    }
}


const mapDispatchToProps = {
    addCity
}

export default connect(null, mapDispatchToProps)(AddCity)