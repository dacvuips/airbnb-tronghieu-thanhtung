import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { Form, Input } from "antd";

import { addAdminAction } from "redux/actions/UserManagerAction";
import { useDispatch } from "react-redux";

export default function ModalAddAdmin(props) {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Không được để trống")
      .min(5, "Độ dài trên 5 ký tự ")
      .max(30, "Tên quá dài, dưới 30 ký tự "),
    email: Yup.string()
      .required("Không được để trống")
      .matches(
        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        "Email không hợp lệ"
      ),
    password: Yup.string()
      .required("Không được để trống")
      .min(4, "Độ dài trên 4 ký tự")
      .max(10, "Mật khẩu quá dài, dưới 10 ký tự "),
    phone: Yup.string()
      .required("Không được để trống")
      .length(9, "10 số điện thoại"),
    birthday: Yup.string().required("Không được để trống"),
    address: Yup.string().required("Không được để trống"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: true,
    type: "ADMIN",
    address: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    dispatch(addAdminAction(values));
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal1"
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Người dùng
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group mt-3">
                  <Form.Item className="mb-1" label="Tài khoản">
                    <Input
                      className="form-control"
                      placeholder="Vui lòng nhập tài khoản"
                      type="text"
                      name="name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.name && formik.errors.name ? (
                      <div className="text-danger">{formik.errors.name}</div>
                    ) : null}
                  </Form.Item>
                </div>

                <div className="form-group">
                  <Form.Item label="Mật khẩu">
                    <Input.Password
                      className="form-control"
                      name="password"
                      type="password"
                      placeholder="Vui lòng nhập mật khẩu"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className="text-danger">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </Form.Item>
                </div>

                <div className="form-group mt-3">
                  <Form.Item className="mb-1" label="Email">
                    <Input
                      className="form-control"
                      placeholder="Vui lòng nhập Email"
                      type="text"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-danger">{formik.errors.email}</div>
                    ) : null}
                  </Form.Item>
                </div>
                <div className="form-group mt-3">
                  <Form.Item className="mb-1" label="Số điện thoại">
                    <Input
                      className="form-control"
                      placeholder="Vui lòng nhập số điện thoại"
                      type="number"
                      name="phone"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                      <div className="text-danger">{formik.errors.phone}</div>
                    ) : null}
                  </Form.Item>

                  <Form.Item className="mb-1" label="Ngày sinh">
                    <input
                      type="date"
                      name="birthday"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.birthday && formik.errors.birthday ? (
                      <div className="text-danger">
                        {formik.errors.birthday}
                      </div>
                    ) : null}
                  </Form.Item>
                </div>
                <div className="form-group mt-3">
                  <Form.Item className="mb-1" label="Địa chỉ">
                    <Input
                      className="form-control"
                      placeholder="Vui lòng nhập địa chỉ"
                      type="text"
                      name="address"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.address}
                    />

                    {formik.touched.address && formik.errors.address ? (
                      <div className="text-danger">{formik.errors.address}</div>
                    ) : null}
                  </Form.Item>
                </div>
                {
                  <button type="submit" className="btn btn-success pr-auto">
                    Tạo
                  </button>
                }
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
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
