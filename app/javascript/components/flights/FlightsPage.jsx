import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import * as flightsAction from "../../redux/actions/flightActions";
import {getFlightsData, getFlightsDictionary} from "../../redux/selectors";
import FlightSearch from "./FlightsSeach";
import FlightSearchResultList from "./FlightsResultList";
const { useState } = React;


const FlightsPage = () => {
    const flights = useSelector(getFlightsData);
    const flightsDict = useSelector(getFlightsDictionary);
    const dispatch = useDispatch();
    const search = () => { dispatch(flightsAction.fetchFlights(null)); }
    return (
        <>
            <FlightSearch search={search}></FlightSearch>
            <FlightSearchResultList flights={flights}></FlightSearchResultList>
        </>
    )
}


export default FlightsPage;
