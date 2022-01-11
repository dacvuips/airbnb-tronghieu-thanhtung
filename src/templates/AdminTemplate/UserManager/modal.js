import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { Form, Input } from "antd";
import moment from "moment";
import { DatePicker } from "antd";
import { updateUserAction } from "redux/actions/UserManagerAction";
import { useDispatch } from "react-redux";

export default function ModalID(props) {
  const dispatch = useDispatch();
  const user = props.user;
  const update = props.update.update;

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
    phone: Yup.string()
      .required("Không được để trống")
      .length(10, "10 số điện thoại"),
    birthday: Yup.string().required("Không được để trống"),
    address: Yup.string().required("Không được để trống"),
  });

  const initialValues = {
    name: user.name,
    email: user.email,

    phone: user.phone,
    birthday: user.birthday,
    gender: true,
    address: user.address,
    type: "CLIENT",
  };

  const onSubmit = (values) => {
    console.log(values);
    dispatch(updateUserAction(user._id, values));
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
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
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
                      value={formik.values.name}
                    />

                    {formik.touched.name && formik.errors.name ? (
                      <div className="text-danger">{formik.errors.name}</div>
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
                      value={formik.values.email}
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
                      value={formik.values.phone}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                      <div className="text-danger">{formik.errors.phone}</div>
                    ) : null}
                  </Form.Item>

                  <Form.Item className="mb-1" label="Ngày sinh">
                    <DatePicker
                      format="YYYY/MM/DD"
                      name="birthday"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={moment(formik?.values?.birthday, "YYYY/MM/DD")}
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
                {update ? (
                  <button type="submit" className="btn btn-success pr-auto">
                    Cập Nhật
                  </button>
                ) : null}
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
