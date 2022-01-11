import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Input } from "antd";
import {
  QrcodeOutlined,
} from "@ant-design/icons";
import { NavLink, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "redux/actions/Login";

function Login() {
  const dispatch = useDispatch()
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Không được để trống")
      .email("Email không hợp lệ"),
    password: Yup.string()
      .required("Không được để trống")
      .min(4, "Độ dài trên 4 ký tự"),
  });
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    dispatch(loginAction(values))
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
              <span>Đăng Nhập</span>
              <div className="login__header-qr">
                <p className="login__QR-text">Đăng nhập với mã QR</p>
                <QrcodeOutlined
                  style={{
                    fontSize: "28px",
                    color: "rgb(253, 73, 2)",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group mt-3">
                <Form.Item className="mb-1" label="Email" name="email">
                  <Input
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

              <div className="form-group">
                <Form.Item className="mb-1" label="Mật khẩu" name="password">
                  <Input.Password
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
              <button type="submit" className="btn btn-success w-100">
                Đăng nhập
              </button>
            </form>

            <div className="login__forgot">
              <div className="login__forgot-login">
                <Link to="# " className="login__forgot-text">
                  <span>Quên mật khẩu</span>
                </Link>
                <Link to="# " className="login__forgot-text">
                  <span>Đăng nhập với SMS</span>
                </Link>
              </div>
              <div className="login__Register">
                <span>Bạn mới biết đến chung tôi?</span>
                <NavLink to="/register" className="login__forgot-text">
                  <span> - Đăng ký -</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;