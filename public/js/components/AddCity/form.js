import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { renderInputField } from './renderFields'

import {
    required,
    maxLength50,
    language
} from './validate'


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render () {
        return (
            <form className="add-city__form" onSubmit={ this.props.handleSubmit }>
                <Field
                    name="city"
                    id="city"
                    component={renderInputField}
                    type="text"
                    className="add-city__input"
                    validate={[required, language, maxLength50]}/>

                <button disabled={this.props.submitting} type="submit" className="add-city__btn">Add location</button>

            </form>
        )
    }
}

Form = reduxForm({
    form: 'addCity',
    initialValues: {

    }
})(Form)


export default Form;