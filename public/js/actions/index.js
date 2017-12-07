import {
    ADD_CITY_START,
    ADD_CITY_SUCCESS,
    ADD_CITY_FAILURE,
    FETCH_FORECAST_START,
    FETCH_FORECAST_SUCCESS,
    FETCH_FORECAST_FAILURE,
    DELETE_CITY
} from '../actionTypes'

import {
    addCity as addCityApi,
    fetchCityForecast as fetchCityForecastApi
} from '../api'

export const addCity = (city) => async dispatch => {
    dispatch({type: ADD_CITY_START})

    try {
        const data = await addCityApi(city)

        dispatch({
            type: ADD_CITY_SUCCESS,
            payload: data
        })
    } catch (err) {

        dispatch({
            type: ADD_CITY_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const fetchCityForecast = (city) => async dispatch => {
    dispatch({type: FETCH_FORECAST_START})

    try {
        const data = await fetchCityForecastApi(city)

        dispatch({
            type: FETCH_FORECAST_SUCCESS,
            payload: data
        })
    } catch (err) {

        dispatch({
            type: FETCH_FORECAST_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const deleteCity = (city) => async dispatch => {
    dispatch({
        type: DELETE_CITY,
        payload: city
    })
}

// REFRESH the same actions as ADD
export const refreshCity = addCity;