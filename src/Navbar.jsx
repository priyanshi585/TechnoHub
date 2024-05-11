import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid  nav-bg" >
                <div className="row">
                    <div className="col-10 mx-auto">

                        <nav className="navbar navbar-expand-lg navbar-light bg-light">

                            <div className="container-fluid">
                                <NavLink className="navbar-brand" href="#">TechnoHub</NavLink>

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                                        <li className="nav-item">
                                            <NavLink to="/" activeClassName="menu_active" className="nav-link active" aria-current="page" href="#">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/service" activeClassName="menu_active" className="nav-link" href="#">Service</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/about" activeClassName="menu_active" className="nav-link" href="#">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/contact" activeClassName="menu_active" className="nav-link" href="#">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;