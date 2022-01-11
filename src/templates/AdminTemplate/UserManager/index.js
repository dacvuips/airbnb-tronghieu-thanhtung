import React, { useEffect, useState } from "react";
import { Table, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteUserManagerAction,
  getUserIDAction,
  getUserManagerAction,
} from "redux/actions/UserManagerAction";

import ModalID from "./modal";
import ModalAddAdmin from "./modalAddAdmin";
const { Search } = Input;
export default function UserManager(props) {
  const { userData, userID } = useSelector((state) => state.UserManagerReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fechData() {
      dispatch(getUserManagerAction());
    }
    fechData();
  }, []);

  const [update, setupdate] = useState({
    update: null,
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: 50,
    },

    {
      title: "Avatar",
      width: 50,

      dataIndex: "avatar",
      defaultSortOrder: "descend",
      render: (text, user) => {
        return (
          <>
            <img
              src={
                user.avatar
                  ? user.avatar
                  : "https://carnbrae.com.au/wp-content/uploads/2021/05/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
              }
              alt="hình ảnh"
              style={{ width: "50px", height: "50px" }}
            />
          </>
        );
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      width: 50,

      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
      title: "Email",
      dataIndex: "email",
      width: 100,
    },
    {
      title: "Action",
      dataIndex: "_id",

      render: (text, user) => {
        return (
          <>
            <div
              data-toggle="modal"
              data-target="#exampleModal"
              className="btn btn-outline-warning mr-2"
              onClick={() => {
                dispatch(getUserIDAction(user._id));
                setupdate({ update: null });
              }}
            >
              Chi tiết
            </div>
            <div
              data-toggle="modal"
              data-target="#exampleModal"
              className="btn btn-outline-info mr-2"
              onClick={() => {
                dispatch(getUserIDAction(user._id));
                setupdate({ update: true });
              }}
            >
              Sửa
            </div>
            <div
              className="btn btn-danger"
              onClick={() => {
                dispatch(deleteUserManagerAction(user._id));
                console.log(user._id);
              }}
            >
              Xóa
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
      <h1>Quản lý người dùng</h1>
      <button
        data-toggle="modal"
        data-target="#exampleModal1"
        className="btn btn-warning mb-3"
      >
        Thêm Quản Trị Viên
      </button>
      <Search
        className="mb-3 w-100"
        placeholder="Nhập vào tài khoản hoặc họ tên người dùng"
        style={{ width: 200 }}
      />
      <Table
        rowKey={"_id"}
        columns={columns}
        dataSource={data}
        onChange={onChange}
        scroll={{ x: "100%" }}
      />
      <ModalID user={userID} update={update} />
      <ModalAddAdmin />
    </>
  );
}
