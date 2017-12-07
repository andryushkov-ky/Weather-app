import R from 'ramda'

import {
    FETCH_FORECAST_SUCCESS
} from '../actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_FORECAST_SUCCESS:
            const newValues = {[payload.location.name]: payload};

            return R.merge(state, newValues)
        default:
            return state
    }
}