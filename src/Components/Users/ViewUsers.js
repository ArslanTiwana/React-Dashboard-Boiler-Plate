import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Breadcrumb, Button, Row, Col } from "antd";
import UsersTable from "./UsersTable";
import UserForm from "./UserForm";
import context from "../../Context/ContextState";

const { Meta } = Card;

const ViewUsers =() => {
  const [userForm, setUserForm] = useState(false);
  const [userId, setUserId] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const { sidebarToggle,isMobile } = useContext(context);

  return (
    <div style={{width:sidebarToggle?"80%":isMobile?'90%':'95%'}} className="content-div">
      {userForm ? (
        <UserForm
          setUserForm={setUserForm}
          refresh={refresh}
          setRefresh={setRefresh}
          userId={userId}
          setUserId={setUserId}
        />
      ) : null}{" "}
      <main id={"main"}>
        <div className="pagetitle">
          <h1>Users</h1>
          <div>
    </div>
          <nav>
            <Row>
              <Col md={18}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      Dashboard
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>Users</Breadcrumb.Item>
                </Breadcrumb>
              </Col>
              <Col md={6} style={{ textAlign: 'right', marginRight: 0 }}>
                <Button
                  type="primary"
                  size="medium"
                  onClick={() => setUserForm(true)}
                >
                  Add New User
                </Button>
              </Col>
            </Row>
          </nav>
        </div>
        <Card className="card">
          <Meta
            title={
              <UsersTable
                refresh={refresh}
                setRefresh={setRefresh}
                setUserForm={setUserForm}
                setUserId={setUserId}
              />
            }
          />
        </Card>
      </main>
    </div>
  );
}

export default React.memo(ViewUsers);
