import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import AddRoom from "./addRoom";
// import ModalLocalID from "./modal";
// import ModalAddAdmin from "./modalAddAdmin";

import {
  deleteRoomAction,
  getRoomAction,
  getRoomIDAction,
} from "redux/actions/RoomManagerAction";
import ModalRoomID from "./modal";
import EditImageRoom from "./editImage";
// import ModalAddLocal from "./modalAddLocal";
// import EditImage from "./editImage";

export default function RoomInfoManager(props) {
  const dispatch = useDispatch();

  const { room, roomID } = useSelector((state) => state.roomManagerReducer);

  const [update, setupdate] = useState({
    update: null,
  });

  useEffect(() => {
    async function fechData() {
      dispatch(getRoomAction());
    }

    fechData();
  }, []);

  // const  = async (value) => {

  // };
  const columns = [
    {
      title: "Tên phòng",
      dataIndex: "name",
    },

    {
      title: "Ảnh",

      dataIndex: "image",

      render: (text, user) => {
        return (
          <>
            <img
              src={
                user.image
                  ? user.image
                  : "https://phutungnhapkhauchinhhang.com/wp-content/uploads/2020/06/default-thumbnail.jpg"
              }
              alt="hình ảnh"
              style={{ width: "50px", height: "50px" }}
            />
            <button
              style={{
                fontSize: "10px",
                borderColor: "none",
              }}
              data-toggle="modal"
              data-target="#EditImageRoom"
              className=" mt-2 "
              onClick={() => {
                dispatch(getRoomIDAction(user._id));
                setupdate({ update: null });
              }}
            >
              Sửa ảnh
            </button>
          </>
        );
      },
    },

    {
      title: "Giá",
      dataIndex: "price",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
    },
    {
      title: "Tùy chọn",
      dataIndex: "_id",

      // dataIndex: "name",

      render: (text, user) => {
        return (
          <>
            <div
              data-toggle="modal"
              data-target="#exampleModalRoom1"
              className="btn btn-outline-success mr-2"
              onClick={() => {
                dispatch(getRoomIDAction(user._id));
                setupdate({ update: null });
              }}
            >
              Chi tiết
            </div>
            <div
              data-toggle="modal"
              data-target="#exampleModalRoom1"
              className="btn btn-outline-info mr-2"
              onClick={() => {
                dispatch(getRoomIDAction(user._id));
                setupdate({ update: true });
              }}
            >
              Sửa
            </div>
            <div
              className="btn btn-danger"
              onClick={() => {
                dispatch(deleteRoomAction(user._id));
              }}
            >
              Xóa
            </div>
          </>
        );
      },
    },
  ];

  const data = room;
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <>
      <h1>Quản lý Phòng</h1>
      <button
        data-toggle="modal"
        data-target="#AddRoom"
        className="btn btn-warning mb-3"
      >
        Thêm địa điểm
      </button>
      <Table
        rowKey={"_id"}
        columns={columns}
        dataSource={data}
        onChange={onChange}
        scroll={{ x: "50%" }}
      />
      <ModalRoomID room={roomID} update={update} />
      <AddRoom />
      <EditImageRoom image={roomID} />
      {/* <ModalAddRoom />
      <EditRoom local={localID} /> */}
    </>
  );
}
