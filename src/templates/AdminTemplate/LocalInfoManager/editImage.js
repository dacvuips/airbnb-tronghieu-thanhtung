import { useFormik } from "formik";

import React, { useState } from "react";
import { Form, Input } from "antd";

// import { useDispatch } from "react-redux";

export default function EditImage(props) {
  const [img, setimg] = useState("");
  // const dispatch = useDispatch();

  const local = props.local;

  const initialValues = {
    image: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    // dispatch(updateUserAction(local._id, values));
  };
  const handleChangeFile = (e) => {
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/jpg" ||
      file.type === "image/gif"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setimg(e.target.result);
      };
    }
    formik.setFieldValue("image", file);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit,
  });

  return (
    <>
      <div
        className="modal fade"
        id="exampleModalImage"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Sửa Ảnh
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span
                  aria-hidden="true"
                  onClick={() => {
                    setimg("");
                  }}
                >
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group mt-3">
                  <img
                    className=" mb-3"
                    src={local.image}
                    style={{ width: "100%", height: "100%" }}
                    alt="Ảnh"
                  />
                  <img
                    className=" mb-3"
                    src={
                      img
                        ? img
                        : "https://phutungnhapkhauchinhhang.com/wp-content/uploads/2020/06/default-thumbnail.jpg"
                    }
                    style={{ width: "120px", height: "120px" }}
                    alt="Ảnh"
                  />
                  <Form.Item className="mb-1" label="Chọn Ảnh khác">
                    <Input
                      className="form-control"
                      placeholder="Vui lòng nhập tên địa điểm"
                      type="file"
                      name="image"
                      onChange={handleChangeFile}
                      accept="image/jpeg, image/png, image/gif, image/jpg"
                    />
                  </Form.Item>
                </div>

                <button type="submit" className="btn btn-success pr-auto">
                  Lưu
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => {
                  setimg("");
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
