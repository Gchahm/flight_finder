import { createSelector } from 'reselect';

export const getFlights = state => state.flights.searchResult;

export const getFlightsMeta = createSelector(
    [getFlights], flights => flights.meta
);

export const getFlightsData = createSelector(
    [getFlights], flights => flights.data
);

export const getFlightsDictionary = createSelector(
    [getFlights], flights => flights.dictionaries
);
