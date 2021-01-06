import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    const activeStyle = {color: '#F15B2A'}
    const blogHeader = { lineHeight: 1, borderBottom: '1px solid #e5e5e5'}
    return (
                <>
                    <header style={blogHeader} className="py-3">
                        <div className="row flex-nowrap justify-content-between align-items-center">
                            <div className="col-4 pt-1">
                            </div>
                            <div className="col-4 text-center">
                                <NavLink className="p-2 text-muted" to="/" activeStyle={activeStyle} exact>Flight Search</NavLink>
                            </div>
                            <div className="col-4 d-flex justify-content-end align-items-center">
                            </div>
                        </div>
                    </header>
                </>
    )
}

export default Header;
