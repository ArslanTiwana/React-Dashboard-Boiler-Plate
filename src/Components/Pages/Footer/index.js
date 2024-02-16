import React, { useState } from "react";
import "./footer.css";
import { Outlet, Link } from "react-router-dom";
import logo from "../../../assets/images/nav-logo.png";
import foldIcon from "../../../assets/images/menu_hambuger.png";
import { Button } from "antd";
const Footer = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const handleClose = () => setClick(false);
    return (
        <div className="footer">
            <div className="content-container">
                
            </div>
            <div className="footer-container">

            </div>
        </div>
    );
};

export default Footer;
