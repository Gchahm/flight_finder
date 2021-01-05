import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    const activeStyle = {color: '#F15B2A'}

    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>{" | "}
            <NavLink to="/courses" activeStyle={activeStyle} exact>Courses</NavLink>{" | "}
            <NavLink to="/courses2" activeStyle={activeStyle} exact>Courses 2</NavLink>{" | "}
        </nav>
    )
}

export default Header;
