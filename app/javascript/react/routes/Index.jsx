import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../components/home/Home";
import Header from "../components/common/Header";

export default (
    <div className="container-fluid">
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
    </div>
);
