import * as actionTypes from "../actions/actionTypes";

const searchResult = require('../../util/flight_search_result.json');

const INITIAL_DATA = {
    searchResult
}

export default function flightsReducer(state = INITIAL_DATA, action) {
    switch (action.type) {
        case actionTypes.FETCH_FLIGHTS:
            return {...state, searchResult};
        default:
            return state;
    }
}
