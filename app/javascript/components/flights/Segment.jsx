import React from "react";
import moment from "moment";
import humanizeDuration from "humanize-duration";

const Segment = ({segment}) => {
    const {departure, arrival, duration} = segment;
    const deptAt = moment.utc(departure.at).format('DD/MM HH:mm');
    const arriveAt = moment.utc(arrival.at).format('DD/MM HH:mm');
    const humanizedDuration = humanizeDuration(moment.duration(duration).asMilliseconds());


    return (
        <div className="row">
            <div className="col-12 text-center">
                {humanizedDuration}
            </div>
            <div className="col-6 font-weight-bold text-center">
                {departure.iataCode} <br/>
                {arrival.iataCode}
            </div>
            <div className="col-6 text-left">
                {deptAt} <br/>
                {arriveAt}
            </div>
        </div>
    )
}

export default Segment

