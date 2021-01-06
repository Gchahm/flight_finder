import React, {useState} from "react";

const FlightSearch = ({search}) => {
    const [originLocationCode, setOriginLocationCode] = useState('');
    const [destinationLocationCode, setDestinationLocationCode] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [adults, setAdults] = useState('');
    const handleOriginChange = (e) => setOriginLocationCode(e.target.value);
    const handleDestChange = (e) => setDestinationLocationCode(e.target.value);
    const handleDepartChange = (e) => setDepartureDate(e.target.value);
    const handleReturnChange = (e) => setReturnDate(e.target.value);
    const handleAdultsChange = (e) => setAdults(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        search();
    }


    return (
        <div className="card" onSubmit={handleSubmit}>
            <div className="card-body">
                <form className="form-inline">
                    <input type="text" className="form-control mr-2" onChange={handleOriginChange} value={originLocationCode}/>
                    <input type="text" className="form-control mr-2" onChange={handleDestChange} value={destinationLocationCode}/>
                    <input type="date" className="form-control mr-2" onChange={handleDepartChange} value={departureDate}/>
                    <input type="date" className="form-control mr-2" onChange={handleReturnChange} value={returnDate}/>
                    <input type="number" className="form-control mr-2" onChange={handleAdultsChange} value={adults}/>
                    <button className="btn btn-primary">Search</button>
                </form>
            </div>
        </div>
    )
}

export default FlightSearch
