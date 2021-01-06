import React from "react";
import moment from "moment";
import humanizeDuration from 'humanize-duration';
import Segment from "./Segment";

const Itinerary = ({id, itinerary, title}) => {
    const {duration, segments} = itinerary;
    const accordionId = 'itinerary-accordion-' + id;
    const headingId = 'itinerary-heading-' + id;
    const collapseId = 'itinerary-collapse-' + id;
    const humanizedDuration = humanizeDuration(moment.duration(duration).asMilliseconds());
    const stops = segments.length;

    return (
        <div className="accordion" id={accordionId}>
            <div id={headingId}>
                <h2 className="mb-0">
                    <div className="btn btn-block text-left" type="button" data-toggle="collapse"
                            data-target={'#' + collapseId} aria-expanded="true" aria-controls={collapseId}>
                        <div className="row">
                            <div className="col-4">
                                <h5>{title}</h5>
                            </div>
                            <div className="col-4 text-center">
                                {humanizedDuration}
                            </div>
                            <div className="col-4 text-right">
                                {stops} Stops
                            </div>
                        </div>

                    </div>
                </h2>
            </div>
            <div id={collapseId} className="collapse row" aria-labelledby="headingOne"
                 data-parent={'#' + accordionId}>
                {segments.map((segment, i) =>
                    <div key={i} className="col text-center">
                        <Segment segment={segment}></Segment>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Itinerary

