export const getCities = (state) => {
    return state.cities
}

export const getForecastByName = (state, name) => {
    return state.forecast[name]
}