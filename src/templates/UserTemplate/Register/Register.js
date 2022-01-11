import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Form, Input } from "antd";
import * as Yup from "yup";
import { registerAction } from "./../../../redux/actions/Register";

function Register(props) {

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
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: true,
    address: "",
  };

  const onSubmit = (values) => {
    dispatch(registerAction(values, props.history));
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <div className="login">
        <div className="login__container">
          <div className="col login__content mx-auto p-4">
            <div className="login__header">
              <span>Đăng Ký</span>
            </div>
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
                    <div className="text-danger">{formik.errors.password}</div>
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
                  <Input
                    className="form-control"
                    placeholder="Vui lòng nhập số điện thoại"
                    type="date"
                    name="birthday"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.birthday && formik.errors.birthday ? (
                    <div className="text-danger">{formik.errors.birthday}</div>
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
                  />
                  {formik.touched.address && formik.errors.address ? (
                    <div className="text-danger">{formik.errors.address}</div>
                  ) : null}
                </Form.Item>
              </div>
              <button type="submit" className="btn btn-success w-100">
                Đăng Ký
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;