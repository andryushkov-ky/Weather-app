import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { renderInputField } from './renderFields'

import {
    required,
    maxLength50
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
                    className="form__input-text"
                    validate={[required, maxLength50]}/>

                <div className="form__btn-wrap">
                    <button disabled={this.props.submitting} type="submit" className="form__btn">Добавить город</button>
                </div>
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