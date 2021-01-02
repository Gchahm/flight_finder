import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/home/Home";
import Header from "./components/common/Header";
import CoursesPage from "./components/courses/CoursesPage";
import CoursesPageFunction from "./components/courses/CoursesPageFunction";

function App() {
    return (
        <div className="container-fluid">
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/courses" component={CoursesPage}/>
                <Route path="/courses2" component={CoursesPageFunction}/>
            </Switch>
        </div>
    );
}

export default App;
