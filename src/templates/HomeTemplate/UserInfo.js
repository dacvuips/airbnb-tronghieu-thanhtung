import { DatePicker, } from 'antd';

import { Radio } from 'antd';
import React, { useState,useEffect } from "react";
import api from "utils/apiUtils";
import * as Yup from "yup"
import {
  AccountCircle,
  Check,
  LocalPolice,
  StarBorder,
} from "@mui/icons-material";
import {useFormik} from "formik"
import { Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import moment from "moment"
const UserManager = (props) => {
  const handleChangeFile = async (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (file?.type.includes("image")) {
      const reader = new FileReader();
      await reader.readAsDataURL(file);
      const formData = new FormData();
      await formData.append("avatar", file);
      console.log(formData.get("avatar"));
      api.post("/api/users/upload-avatar", formData).then(() => {
        console.log("success");
      });
    }
  };

  const [infoUserEdit,setInfoUserEdit] = useState({})
  


  const userLogin = JSON.parse(localStorage.getItem("USER_LOGIN"))

  useEffect(() => {
      if (userLogin) {
        console.log(userLogin)
        setInfoUserEdit(userLogin.user)
      }
        
  }, [])


  
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
      .length(9, "10 số điện thoại"),
    birthday: Yup.string().required("Không được để trống"),
    address: Yup.string().required("Không được để trống"),
  });



  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: infoUserEdit.name,
      phone: infoUserEdit.phone,
      email: infoUserEdit.email,
      birthday: moment(infoUserEdit.birthday) ,
      gender: infoUserEdit.gender,
      address: infoUserEdit.address,

    },
    validationSchema,

    onSubmit: (values) => {
        const valuesNew = {...values}
        valuesNew.birthday = moment(valuesNew.birthday).format("DD/MM/YYYY hh:mm:ss")
        valuesNew.type = infoUserEdit.type
        console.log("run")
      api.put(`/api/users/${infoUserEdit?._id}`, valuesNew).then(() => {
          console.log("success")
      }).catch((err ) => {
        console.log(err)
      })
    
    },
  });




  

  

  return (
    <div className="profile">
      <div className="row">
        <div className="col-4">
          <div className="profile-left">
            <div className="profile-left-img">
              <AccountCircle style={{ fontSize: "175px" }} />
              <p>Cập nhật ảnh</p>
            </div>
            <div className="profile-left-policy">
              <LocalPolice style={{ marginBottom: "10px" }} />
              <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
                Xác minh danh tính
              </p>
              <p style={{ marginBottom: "10px" }}>
                Xác thực danh tính của bạn với huy hiệu xác minh danh tính
              </p>
              <button>Nhận huy hiệu</button>
            </div>
            <div className="profile-left-active">
              <h5>Đã xác nhận</h5>
              <div className="profile-left-active-check">
                <Check style={{ fontSize: "20px", marginRight: "10px" }} />
                <p>Địa chỉ email</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="profile-right">
            <div className="profile-right-title">
              <h3>Xin chào, tôi là Tùng</h3>
              <p>Bắt đầu tham gia 2021</p>
              <p className="profile-right-title-active">Chỉnh sửa hồ sơ</p>
          <form onSubmit={formik.handleSubmit}>
          <div className="user-info">
                <div className="">
                  <label>Tên</label>
                  <Input name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} placeholder="Basic usage" style={{ width: 180 }} />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-danger">{formik.errors.name}</div>
                  ) : null}
                </div>
                <div className="">
                  <label>Số điện thoại</label>
                  <Input name="phone" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} placeholder="Basic usage" style={{ width: 180 }} />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div className="text-danger">{formik.errors.phone}</div>
                  ) : null}
                </div>
                <div className="">
                  <label>Email</label>
                  <Input name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} placeholder="Basic usage" style={{ width: 180 }} />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="">
                  <label>Ngày sinh</label>
                  <DatePicker  value={formik.values.birthday || new Date()} onChange={(e) => {
                      formik.setFieldValue("birthday",e)
                  }} />

{formik.touched.birthday && formik.errors.birthday ? (
                    <div className="text-danger">{formik.errors.birthday}</div>
                  ) : null}
                </div>
                <div className="">
                  <label>Giói tính</label>
                  <Radio.Group onChange={formik.handleChange} name="gender" value={formik.values.gender}>
      <Radio value={true}>Nam</Radio>
      <Radio value={false}>Nữ</Radio>
    </Radio.Group>
                </div>
                <div className="">
                  <label>Địa chỉ</label>
                  <Input value={formik.values.address} placeholder="Basic usage" style={{ width: 180 }} />
                  {formik.touched.address && formik.errors.address ? (
                    <div className="text-danger">{formik.errors.address}</div>
                  ) : null}
                </div>
         
                <div>
                    <button type="submit">Cập nhật</button>
                </div>
              </div>
          </form>
            </div>
            <div className="profile-right-rating">
              <StarBorder style={{ marginRight: "10px" }} />
              <span>0 đánh giá</span>
            </div>
            <p className="profile-right-ratingUser">Đánh giá của bạn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManager;
