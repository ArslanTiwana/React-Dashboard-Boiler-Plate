import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Tooltip, Button, Tag } from "antd";
import {
  CloseOutlined,
  CheckOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Input, Spinner } from "reactstrap";
import { Apis } from "../Apis";
import swal from "sweetalert";

const UserTable = ({ refresh, setRefresh, userForm, setUserId }) => {
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
            console.log(err.data.message);
            setLoading(false);
          });
      }
    });
  };

  const deleteUser = (id, action) => {
    swal({
      title: "Are you sure?",
      text: "This user will be deleting and this action cannot be undone.",
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
            console.log(err.data.message);
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
          console.log(res.data.data)
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
        console.log(err.data.message);
        setLoading(false);
      });
  }, [refresh]);

  useEffect(() => {
    if (data.length !== 0) {
      const result = data.filter((d) => d.userName?.includes(search));
      setFilteredData(result);
    }
  }, [data, search]);

  const columns = [
    {
      id: 1,
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
      reorder: true,
      width:"50px"

    },
    {
      id: 2,
      name: "UserName",
      selector: (row) => row.userName,
      sortable: true,
      reorder: true,
    },
    {
      id: 5,
      name: "User Type",
      selector: (row) => row.userType,
      cell: (row) => (
        <Tag className="text-capitalize" color={"volcano"}>
          {row.userType}
        </Tag>
      ),
    },
    {
      id: 6,
      name: "Status",
      selector: (row) => row.status,
      cell: (row) => (
        <Tag
          className="text-capitalize"
          color={row.status === "active" ? "cyan" : "red"}
        >
          {row.status}
        </Tag>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="text-right d-flex justify-content-end">
          <Tooltip title="Edit" style={{ marginRight: 5 }}>
            <Button
              type="primary"
              style={{ marginRight: 5 }}
              className="mr-5"
              icon={<EditOutlined />}
              onClick={() => {
                userForm(true);
                console.log(row.id)
                setUserId(()=>row.id);
              }}
              size="small"
            />
          </Tooltip>
          {row.status == "active" ? (
            <Tooltip title="Deactivate User">
              <Button
                danger
                icon={<CloseOutlined />}
                style={{ marginRight: 5 }}
                className="mr-5"
                onClick={() => changeUserStatus(row.id, "inactive")}
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
                onClick={() => changeUserStatus(row.id, "active")}
                size="small"
              />
            </Tooltip>
          )}
          <Tooltip title="Delete">
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => deleteUser(row.id)}
              size="small"
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <div>
      {!loading ? (
        <DataTable
          columns={columns}
          data={filteredData}
          defaultSortFieldId={1}
          pagination
          fixedHeader
          fixedHeaderScrollHeight="500px"
          highlightOnHover
          subHeader
          subHeaderComponent={
            <Input
              type="text"
              placeholder="Search Here"
              className="w-25 form-control"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          }
          subHeaderAlign="left"
        />
      ) : (
        <>
          <br></br>
          <br></br>
          <br></br>
          <div className="text-center">
            <Spinner size="m" color="success" style={{ textAlign: "center" }} />
          </div>
          <br></br>
          <br></br>
          <br></br>
        </>
      )}
    </div>
  );
};

export default UserTable;
