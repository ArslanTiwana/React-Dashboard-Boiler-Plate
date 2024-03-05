import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Breadcrumb, Button, Row, Col } from "antd";
import context from "../../Context/ContextState";
import LogsTable from "./LogsTable";

const { Meta } = Card;

const ViewLogs = () => {
  const [userId, setUserId] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const { sidebarToggle } = useContext(context);

  return (
    <div style={{width:sidebarToggle?"80%":'95%'}} className="content-div">
      <main id="main">
        <div className="pagetitle">
          <h1>Logs</h1>
          <nav>
            <Row>
              <Col md={18}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      Dashboard
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>Logs</Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>
          </nav>
        </div>
        <Card className="card">
          <Meta
            title={
              <LogsTable
                refresh={refresh}
                setRefresh={setRefresh}
                setUserId={setUserId}
              />
            }
          />
        </Card>
      </main>
    </div>
  );
};

export default ViewLogs;
