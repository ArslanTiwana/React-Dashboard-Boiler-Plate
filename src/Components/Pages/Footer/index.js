import React, { useState } from "react";
import "./footer.css";
import { Outlet, Link } from "react-router-dom";
import logo from "../../../assets/images/nav-logo.png";
import foldIcon from "../../../assets/images/menu_hambuger.png";
import { Button, Col, Row, Space } from "antd";
import mobileimg from '../../../assets/images/app.png'
import background from '../../../assets/images/background.png'
import appstore from '../../../assets/images/apple_btn.png'
import googlestore from '../../../assets/images/google_btn.png'
import footerlogo from '../../../assets/images/footer_logo.png'
import facebook from '../../../assets/images/Facebook.png'
import instagram from '../../../assets/images/Instagram.png'
import linkdln from '../../../assets/images/Linkedin.png'
import twitter from '../../../assets/images/twitter.png'
import arrow from '../../../assets/images/arrow.png'

const Footer = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const handleClose = () => setClick(false);
    return (
        <div className="footer">
            <div className="content-container">
                <Row >
                    <Col span={12} className="image-col">
                        {/* Background image */}
                        <img
                            src={background}
                            className="background-img"
                        />
                        <img
                            src={mobileimg}
                            alt="Overlay"
                            style={{
                                position: 'absolute',
                                top: '250px',
                                left: '420px',
                                transform: 'translate(-50%, -50%)',
                                width: '300px',
                                height: 'auto',
                            }}
                        />
                    </Col>
                    <Col span={12} className="text-col">
                        <div className="text-div">
                            <p className="normal-text">Download Our Mobile App</p>
                            <p className="heading-text">You Can Find All Things You Need In Our App</p>
                            <p className="normal-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <p ><a href="https://www.apple.com/app-store/"> <img src={appstore} className="apple_btn" /></a><a href="https://play.google.com/store/apps"><img src={googlestore} className="google_btn" /></a></p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="footer-container">
                <Row>
                    <Col span={8} className="footer-left">
                        <div className="left-container">
                            <img src={footerlogo} width={300}></img>
                            <p className="footer-normal-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <p className="footer-heading-text">Get Connected</p>
                        </div>
                    </Col>
                    <Col span={8} className="footer-middle">
                        <div className="middle-container">
                            <p className="footer-heading-text">Company</p>
                            <p><Link to='/' className="footer-link">About Us</Link></p>
                            <p><Link to='/' className="footer-link">Contact Us</Link></p>
                            <p><Link to='/' className="footer-link">Privacy Policy</Link></p>
                            <p><Link to='/' className="footer-link">Terms of Use</Link></p>
                        </div>
                    </Col>
                    <Col span={8} className="footer-middle">
                        <div className="right-container">
                            <p className="footer-heading-text">Head Office</p>
                            <p className="footer-normal-text">Office address, demo road I10-3, Islamabad</p>
                            <p className="footer-normal-text"><p>+923154678960</p>
                                <p>Monday to Sunday 9am to 6pm</p></p>
                            <p className="footer-normal-text">name@company.com</p>
                        </div>
                    </Col>
                </Row>
                <Row className="row">
                    <Col span={20} >
                        <Row justify="left" className="ml-2">
                            <Col>
                                <Button className="circular-button">
                                    <img src={facebook} />
                                </Button>
                            </Col>
                            <Col>
                                <Button className="circular-button">
                                    <img src={instagram} />
                                </Button>
                            </Col>
                            <Col>
                                <Button className="circular-button">
                                    <img src={linkdln} />
                                </Button>
                            </Col>
                            <Col>
                                <Button className="circular-button">
                                    <img src={twitter} />
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={4} >
                        <Space>
                            <span className="footer-normal-text">Top</span>
                            <Button className="circular-button ml-2" ><img src={arrow} /></Button>
                        </Space>
                    </Col>
                </Row>
                <Row className="row-3" >
                    <p className="footer-normal-text" style={{marginLeft:600}}>@copyright 2007 - 2023 domainname.com. All Rights Reserved</p>
                </Row>
            </div>
        </div>
    );
};

export default Footer;
