import React, { useState } from 'react';
import { Container } from 'reactstrap';
import context from './ContextState';

const State = (props) => {
    const [sidebarToggle, setSidebarToggle] = useState(true);
    const [userDetails,setUserDetails]=useState({userType:'plates'})
    return (
        <context.Provider value={{ sidebarToggle, setSidebarToggle,setUserDetails,userDetails }}>
            <Container fluid>
                {props.children}
            </Container>
        </context.Provider>
    );
};

export default State;
