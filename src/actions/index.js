// TODO: add and export your own actions
import cities from '../reducers/allcities'

export const setCities=()=>{
    // simulate an API CALL
    return {
        type: 'SET_CITIES',
        payload: cities
    }
}

export const setActiveCity = (city) => {
    return {
        type: 'SET_ACTIVE_CITY',
        payload: city
    }
}
