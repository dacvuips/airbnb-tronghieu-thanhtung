import React, { useEffect, useState } from "react";
import { Table, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ModalLocalID from "./modal";
// import ModalAddAdmin from "./modalAddAdmin";
import {
  deleteLocalAction,
  getLocalAction,
  getLocalIDAction,
  getLocalRateAction,
} from "redux/actions/LocalManagaAction";
import ModalAddLocal from "./modalAddLocal";
import EditImage from "./editImage";
const { Search } = Input;
export default function LocalInfoManager(props) {
  const dispatch = useDispatch();

  const { local, localID } = useSelector((state) => state.LocalManagerReducer);

  const [localState, setlocalState] = useState([local]);

  useEffect(() => {
    if (local.length === 0) {
      dispatch(getLocalAction());
    }
    setlocalState({
      localState: local,
    });
  }, [local]);

  const [update, setupdate] = useState({
    update: null,
  });

  useEffect(() => {
    async function fechData() {
      dispatch(getLocalAction());
    }

    fechData();
  }, []);

  const handleSearch = async (e) => {
    console.log(e.target.value);
    dispatch(getLocalRateAction(e.target.value));
  };

  // const  = async (value) => {

  // };
  const columns = [
    {
      title: "Tên",
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
      title: "Địa điểm",
      dataIndex: "province",
    },
    {
      title: "Quốc gia",
      dataIndex: "country",
    },
    {
      title: "Tùy chọn",
      dataIndex: "_id",
      render: (text, user) => {
        return (
          <>
            <div
              data-toggle="modal"
              data-target="#exampleModalImage"
              className="btn btn-outline-success mr-2"
              onClick={() => {
                dispatch(getLocalIDAction(user._id));
                // setupdate({ update: null });
              }}
            >
              Sửa Ảnh
            </div>
            <div
              data-toggle="modal"
              data-target="#exampleModal"
              className="btn btn-outline-info mr-2"
              onClick={() => {
                dispatch(getLocalIDAction(user._id));
                setupdate({ update: true });
              }}
            >
              Sửa
            </div>
            <div
              className="btn btn-danger"
              onClick={() => {
                dispatch(deleteLocalAction(user._id));
              }}
            >
              Xóa
            </div>
          </>
        );
      },
    },
  ];

  const data = localState?.localState;
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <>
      <h1>Quản lý địa điểm</h1>
      <button
        data-toggle="modal"
        data-target="#exampleModal1"
        className="btn btn-warning mb-3"
      >
        Thêm địa điểm
      </button>
      <h3>Tìm địa điểm theo đánh giá từ 1-10</h3>
      <Search
        className="mb-3 w-100"
        placeholder="Nhập vào tài khoản hoặc họ tên người dùng"
        style={{ width: 200 }}
        onChange={handleSearch}
        // onSearch={onSearch}
      />
      <Table
        rowKey={"_id"}
        columns={columns}
        dataSource={data}
        onChange={onChange}
        scroll={{ x: "50%" }}
      />
      <ModalLocalID local={localID} update={update} />
      <ModalAddLocal />
      <EditImage local={localID} />
    </>
  );
}
