import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteUserManagerAction,
  getUserManagerAction,
} from "redux/actions/UserManagerAction";

export default function UserManager(props) {
  const { userData } = useSelector((state) => state.UserManagerReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fechData() {
      dispatch(getUserManagerAction());
    }
    fechData();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },

    {
      title: "Age",

      dataIndex: "birthday",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",

      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Action",
      dataIndex: "_id",
      render: (text, user) => {
        return (
          <>
            <div className="btn btn-outline-info mr-2">Edit</div>
            <div
              className="btn btn-danger"
              onClick={() => {
                dispatch(deleteUserManagerAction(user._id));
                console.log(user._id);
              }}
            >
              Delete
            </div>
          </>
        );
      },
    },
  ];

  const data = userData;
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <>
      Quản lý người dùng
      <Table
        rowKey={"_id"}
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
    </>
  );
}
