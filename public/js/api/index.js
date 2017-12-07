import request from 'superagent'

const token = '7184a632c6d143c38b354118170712';

export const addCity = city => {
    return new Promise((resolve, reject) => {
        request
            .get(`http://api.apixu.com/v1/current.json`)
            .query({ key: token })
            .query({ q: city })
            .query({ lang: 'ru' })
            .then(({body}) => {
                resolve(body)
            })
            .catch(({message}) => {
                reject(message)
            })
    })
}

export const fetchCityForecast = city => {
    return new Promise((resolve, reject) => {
        request
            .get(`http://api.apixu.com/v1/forecast.json`)
            .query({ key: token })
            .query({ q: city })
            .query({ lang: 'ru' })
            .query({ days: '7' })
            .then(({body}) => {
                resolve(body)
            })
            .catch(({message}) => {
                reject(message)
            })
    })
}