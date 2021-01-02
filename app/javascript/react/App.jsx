import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/home/Home";
import Header from "./components/common/Header";
import CoursesPage from "./components/courses/CoursesPage";

function App() {
    return (
        <div className="container-fluid">
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/courses" component={CoursesPage}/>
            </Switch>
        </div>
    );
}

export default App;
