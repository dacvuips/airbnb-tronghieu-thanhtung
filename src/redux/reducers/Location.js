import * as ActionType  from '../constants/Location'

const initialState = {
    error : null,
    listLocation : null
}

const LocationReducer = (state = initialState , action ) => {
    switch (action.type) {
        case ActionType.LOCATION_REQUEST:
            state.error = null
            state.listLocation = null
            return {...state}
        case ActionType.LOCATION_SUCCESS: 
            state.error = null
            state.listLocation = action.payload;
            return {...state}
        case ActionType.LOCATION_FAILED:
            state.error = action.payload
            state.listLocation = null
            return {...state}
        default:
            return {...state}
    }
}

export default LocationReducer