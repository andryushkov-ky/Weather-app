import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import {
    ADD_CITY_SUCCESS
} from '../actionTypes';

import cities from './cities'
import forecast from './forecast'

export default combineReducers({
    routing: routerReducer,
    cities,
    forecast,
    form: formReducer.plugin({
        addCity: (state, action) => {
            switch(action.type) {
                case ADD_CITY_SUCCESS:
                    return undefined;
                default:
                    return state;
            }
        }
    }),
})