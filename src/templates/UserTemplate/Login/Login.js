import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Input } from "antd";
import {
  QrcodeOutlined,
  // EyeOutlined,
  FacebookOutlined,
  AppleOutlined,
  GooglePlusOutlined,
} from "@ant-design/icons";
import { NavLink, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "redux/actions/Login";

function Login(props) {
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
    dispatch(loginAction(values,props.history))
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <>
    {/* <HeaderLogin /> */}
    <div className="login">
      <div className="login__container">
        <div className="col login__content mx-auto p-4">
          <div className="login__header">
            <span>Đăng Nhập</span>
            <p className="login__QR-text">Đăng nhập với mã QR</p>
            <QrcodeOutlined
              style={{
                fontSize: "65px",
                color: "rgb(253, 73, 2)",
                cursor: "pointer",
              }}
            />
          </div>
          {/* {renderNoti()} */}
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

          <div className="login__forgot-container">
            <Link to="# " className="login__forgot-text">
              <span>Quên mật khẩu</span>
            </Link>
            <Link to="# " className="login__forgot-text">
              <span>Đăng nhập với SMS</span>
            </Link>
          </div>
          <div className="login__text-or">
            <div className="login__text-through"></div>
            <span>Hoặc</span>
            <div className="login__text-through"></div>
          </div>
          <div className="row d-flex login__social-container">
            <div className="login__social-FB">
              <FacebookOutlined
                style={{
                  fontSize: "35px",
                  color: "#fff",
                  cursor: "pointer",
                }}
              />
              <p>Facebook</p>
            </div>
            <div className="login__social-FB">
              <GooglePlusOutlined
                style={{
                  fontSize: "35px",
                  color: "#fff",
                  cursor: "pointer",
                  paddingLeft: "5px",
                }}
              />
              <p>Google</p>
            </div>
            <div
              className="login__social-FB"
              style={{
                backgroundColor: "#000",
              }}
            >
              <AppleOutlined
                style={{
                  fontSize: "35px",
                  color: "#fff",
                  cursor: "pointer",
                  backgroundColor: "#000",
                }}
              />
              <p>Apple</p>
            </div>
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
    {/* <Footer /> */}
  </>
  );
}

export default Login;