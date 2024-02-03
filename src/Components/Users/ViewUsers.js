import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Breadcrumb,
  BreadcrumbItem,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";
import context from "../../Context/ContextState";
import UsersTable from "./UsersTable";
import Register from "./Register";

const ViewUsers = () => {
  const [registerUserModal, userForm] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);
  const [userId, setUserId] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const { sidebarToggle } = useContext(context);

  return (
    <div>
      {registerUserModal ? (
        <Register
          userForm={userForm}
          refresh={refresh}
          setRefresh={setRefresh}
          userId={userId}
          setUserId={setUserId}

        />
      ) : null}{" "}
      <main id={sidebarToggle ? "main" : "main2"}>
        <div className="pagetitle">
          <h1>Users</h1>
          <nav>
            <Row>
              <Col md="9">
                <Breadcrumb>
                  <BreadcrumbItem>
                    <Link to="/">Dashboard</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>Users</BreadcrumbItem>
                </Breadcrumb>
              </Col>
              <Col md="3">
                <Button
                  color="success"
                  style={{ marginLeft: 120 }}
                  size="sm"
                  onClick={() => userForm(true)}
                >
                  Add New User
                </Button>
              </Col>
            </Row>
          </nav>
        </div>
        <Container className="card">
          <CardBody>
            <UsersTable
              refresh={refresh}
              setRefresh={setRefresh}
              userForm={userForm}
              setUserId={setUserId}
            />
          </CardBody>
        </Container>
      </main>
    </div>
  );
};

export default ViewUsers;
