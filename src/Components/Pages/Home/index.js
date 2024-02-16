import React from "react";
import "./home.css";
import homeimg from "../../../assets/images/homeimg.png";
import { Button, Card, Col, Input, Rate, Row, Select } from "antd";
import { Option } from "antd/es/mentions";

const Home = () => {
    const cardStyle = {
        position: 'absolute',
        bottom: 0,
        marginTop: 200,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80%', // Adjust the width of the card as needed
        backgroundColor: 'white', // Adjust the background color of the card
        padding: '16px', // Adjust padding as needed
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: Add a box shadow
    };

    return (
        <div>
            <div style={{ position: 'relative' }}>
                <img className="img" src={homeimg} alt="Home Image" />
                <p className="home-heading-text">Find Properties</p>
                <p className="home-subheading-text">Discover the Perfect Agent or Properties for Your Needs</p>
                <p>-</p>
                <Card style={cardStyle}>
                    <Row gutter={16}>
                        <Col span={6}>
                            <Select placeholder="City" className="dropdown-style">
                                <Option value="option1">Lahore</Option>
                                <Option value="option2">Karachi</Option>
                                <Option value="option3">Multan</Option>
                            </Select>
                        </Col>
                        <Col span={6}>
                            <Select placeholder="Area" className="dropdown-style">
                                <Option value="option1">Gulburg</Option>
                                <Option value="option2">Model Town</Option>
                                <Option value="option3">DHA</Option>
                            </Select>
                        </Col>
                        <Col span={6}>
                            <Select placeholder="Rating" className="dropdown-style">
                                <Option value="option1"><Rate defaultValue={5} disabled/></Option>
                                <Option value="option2"><Rate defaultValue={4} disabled/></Option>
                                <Option value="option3"><Rate defaultValue={3} disabled/></Option>
                                <Option value="option3"><Rate defaultValue={2} disabled/></Option>
                                <Option value="option3"><Rate defaultValue={1} disabled/></Option>
                                <Option value="option3"><Rate defaultValue={0} disabled/></Option>

                            </Select>
                        </Col>
                        <Col span={6}>
                            <Button className="dropdown-style">
                                Search
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </div>
            <div style={{ height: 500 }}>

            </div>
        </div>
    );
};

export default Home;
