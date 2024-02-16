import React, { useState } from "react";
import "./header.css";
import { Outlet, Link } from "react-router-dom";
import logo from "../../../assets/images/nav-logo.png";
import foldIcon from "../../../assets/images/menu_hambuger.png";
import { Button } from "antd";
const Header = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const handleClose = () => setClick(false);
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo" onClick={handleClose}>
                    <div className="icon-div">
                        <img height={50} src={logo} />
                    </div>
                </Link>

                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={handleClose}>
                            Find Agents
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={handleClose}>
                        Find Properties
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={handleClose}>
                        About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={handleClose}>
                        Contact Us
                        </Link>
                    </li>
                    <li className="nav-button">
                        <Button onClick={handleClose}>
                        Login
                        </Button>
                    </li>
                    <li className="nav-button nav-signup-button">
                        <Button onClick={handleClose}>
                        Sign Up
                        </Button>
                    </li>

                </ul>
                {/* <div className="nav-icon" onClick={handleClick}>
                    <img height={38} src={foldIcon} />
                </div> */}
            </div>
        </nav>
    );
};

export default Header;
