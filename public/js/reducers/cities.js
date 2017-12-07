import R from 'ramda'

import {
    ADD_CITY_SUCCESS,
    DELETE_CITY
} from '../actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_CITY_SUCCESS:
            const newValues = {[payload.location.name]: payload.current};

            return R.merge(state, newValues)
        case DELETE_CITY :
            return R.dissoc(payload, state)
        default:
            return state
    }
}