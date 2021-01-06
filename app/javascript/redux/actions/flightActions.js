import * as actionTypes from "./actionTypes";


export function fetchFlights(course) {
    return { type: actionTypes.FETCH_FLIGHTS, course}
}
