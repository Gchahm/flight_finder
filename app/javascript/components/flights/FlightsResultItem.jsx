import React from "react";
import Itinerary from "./Itinerary";
import Price from "./Price";

const FlightSearchResultItem = ({flight}) => {
    const itineraryId = (id) => flight.id + '-' + id
    const itneraryTitle = (id) => id === 0 ? 'Departure' : 'Return'

    return (
        <div className="mx-3">
            <div className="row">
                <div className="col-10">
                    <div className="row my-2">
                        {flight.itineraries.map((itinerary, i) =>
                            <div key={i}  className="col-12 itinerary-box">
                                <Itinerary id={itineraryId(i)} itinerary={itinerary} title={itneraryTitle(i)}></Itinerary>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-2 my-2 itinerary-box d-flex">
                    <Price price={flight.price}></Price>
                </div>
            </div>
        </div>
    )
}

export default FlightSearchResultItem
