import React from "react";
import FlightSearchResultItem from "./FlightsResultItem";

const FlightSearchResultList = ({flights}) => {
    return (
        flights.map((flight, i) => <FlightSearchResultItem key={i} flight={flight}></FlightSearchResultItem>)
    )
}

export default FlightSearchResultList
