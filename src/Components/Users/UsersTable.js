import React, { useState, useEffect } from "react";
import { Table, Input, Button, Tag, Tooltip, Spin } from "antd";
import {
  CloseOutlined,
  CheckOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Spinner } from "reactstrap";
import { Apis } from "../Apis";
import swal from "sweetalert";

const UserTable = ({ refresh, setRefresh, setUserForm, setUserId }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const [search, setSearch] = useState("");

  const changeUserStatus = (id, action) => {
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willChangeStatus) => {
      if (willChangeStatus) {
        Apis()
          .updateUser(id, { status: action })
          .then((res) => {
            if (
              (res.data.code === 200 || res.data.code === 201) &&
              res.data.message.includes("Successfull")
            ) {
              swal({
                title: res.data.message,
                icon: "success",
                buttons: "OK",
              });
              setRefresh(!refresh);
            } else {
              swal({
                title: res.data.message,
                icon: "error",
                buttons: "OK",
              });
            }
          })
          .catch((err) => {
            setLoading(false);
          });
      }
    });
  };

  const deleteUser = (id, action) => {
    swal({
      title: "Are you sure?",
      text: "This user will be deleted and this action cannot be undone.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        Apis()
          .deleteUser(id)
          .then((res) => {
            if (
              (res.data.code === 200 || res.data.code === 201) &&
              res.data.message.includes("Successfull")
            ) {
              swal({
                title: res.data.message,
                icon: "success",
                buttons: "OK",
              });
              setRefresh(!refresh);
            } else {
              swal({
                title: res.data.message,
                icon: "error",
                buttons: "OK",
              });
            }
          })
          .catch((err) => {
            setLoading(false);
          });
      }
    });
  };

  useEffect(() => {
    setLoading(true);
    Apis()
      .getUsers()
      .then((res) => {
        if (res.data.code === 200) {
          setData(res.data.data);
          setLoading(false);
        } else {
          swal({
            title: res.data.message,
            icon: "error",
            buttons: "OK",
          });
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [refresh]);

  useEffect(() => {
    if (data.length !== 0) {
      const result = data.filter((d) => d.userName?.includes(search));
      setFilteredData(result);
    }
  }, [data, search]);

  const handleEditUser = (id) => {
    setUserForm(true);
    setUserId(id);
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
      width: 50,
    },
    {
      title: "UserName",
      dataIndex: "userName",
      key: "userName",
      sorter: (a, b) => a.userName.localeCompare(b.userName),
    },
    {
      title: "User Type",
      dataIndex: "userType",
      key: "userType",
      render: (userType) => (
        <Tag className="text-capitalize" color={"volcano"}>
          {userType}
        </Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag
          className="text-capitalize"
          color={status === "active" ? "cyan" : "red"}
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "action",
      render: (id, record) => (
        //justify-content-end
        <div className="text-right d-flex ">
          <Tooltip title="Edit" style={{ marginRight: 5 }}>
            <Button
              type="primary"
              style={{ marginRight: 5 }}
              className="mr-5"
              icon={<EditOutlined />}
              onClick={() => handleEditUser(id)}
              size="small"
            />
          </Tooltip>
          {record.status === "active" ? (
            <Tooltip title="Deactivate User">
              <Button
                danger
                icon={<CloseOutlined />}
                style={{ marginRight: 5 }}
                className="mr-5"
                onClick={() => changeUserStatus(id, "inactive")}
                size="small"
              />
            </Tooltip>
          ) : (
            <Tooltip title="Activate User">
              <Button
                type="primary"
                icon={<CheckOutlined />}
                style={{ marginRight: 5 }}
                className="mr-2"
                onClick={() => changeUserStatus(id, "active")}
                size="small"
              />
            </Tooltip>
          )}
          <Tooltip title="Delete">
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => deleteUser(id)}
              size="small"
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Spin spinning={loading}>

        <Table
          columns={columns}
          dataSource={filteredData}
          pagination={{ pageSize: 10 }}
          scroll={{ x: "max-content" }}
          onChange={(pagination, filters, sorter) => {
            console.log(pagination, filters, sorter);
          }}
          title={() => (
            <Input
              type="text"
              placeholder="Search Here"
              className="w-25 form-control"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          )}
        />
</Spin>
    </div>
  );
};

export default UserTable;
