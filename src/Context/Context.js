import React, { useState } from 'react';
import { Container } from 'reactstrap';
import context from './ContextState';
import { Grid } from 'antd';

const State = (props) => {
    const [sidebarToggle, setSidebarToggle] = useState(true);
    const [userDetails,setUserDetails]=useState({userType:'admin'})
    const [isMobile,setIsMobile]=useState(false)


    const toggleSidebar = () => {
        setSidebarToggle((prev) => !prev);
      };
    return (
        <context.Provider value={{ sidebarToggle, setSidebarToggle,setUserDetails,userDetails,toggleSidebar,isMobile,setIsMobile }}>
            <Container fluid>
                {props.children}
            </Container>
        </context.Provider>
    );
};

export default State;
