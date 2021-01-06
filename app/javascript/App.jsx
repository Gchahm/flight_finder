import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import FlightsPage from "./components/flights/FlightsPage";

function App() {
    return (
        <div className="container">
            <Header/>
            <Switch>
                <Route exact path="/" component={FlightsPage}/>
                <Route path="/flights" component={FlightsPage}/>
            </Switch>
        </div>
    );
}

export default App;
