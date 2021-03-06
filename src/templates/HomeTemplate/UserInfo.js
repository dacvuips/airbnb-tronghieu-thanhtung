import { DatePicker } from "antd";

import { Radio } from "antd";
import React, { useState, useEffect } from "react";
import api from "utils/apiUtils";
import {
  AccountCircle,
  Check,
  LocalPolice,
  StarBorder,
} from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { Input, Space } from "antd";
import moment from "moment";
const UserManager = () => {
  const history = useHistory();
  const [srcImg,setSrcImg] = useState("")
  const handleChangeFile = async (e) => {
    const { name, files } = e.target;
    const file = files[0];
    if (file?.type.includes("image")) {
      const reader = new FileReader();
      await reader.readAsDataURL(file);
      const formData = new FormData();
      await formData.append("avatar", file);

     
      api.post("/api/users/upload-avatar", formData).then(() => {

        const localTemp = {...JSON.parse(localStorage.getItem("USER_LOGIN"))}
        api.get(`/api/users/${localTemp.user._id}`).then((result) => {
          const avtar =result.data.avatar
          localTemp.user.avatar = avtar
          setSrcImg(avtar)
          localStorage.setItem("USER_LOGIN", JSON.stringify(localTemp))
        }).catch((error) => {
            console.log(error)
        })
      });
    }
  };

  const [infoUserEdit, setInfoUserEdit] = useState({});

  const userLogin = JSON.parse(localStorage.getItem("USER_LOGIN"));

  useEffect(() => {
    if (userLogin) {
      setSrcImg(userLogin.user.avatar || "")
      setInfoUserEdit(userLogin.user);
    }
  }, [userLogin]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: infoUserEdit.name,
      phone: infoUserEdit.phone,
      email: infoUserEdit.email,
      birthday: moment(infoUserEdit.birthday),
      gender: infoUserEdit.gender,
      address: infoUserEdit.address,
    },

    onSubmit: (values) => {
      const valuesNew = { ...values };
      valuesNew.birthday = moment(valuesNew.birthday).format(
        "DD/MM/YYYY hh:mm:ss"
      );
      valuesNew.type = infoUserEdit.type;
      api
        .put(`/api/users/${infoUserEdit?._id}`, valuesNew)
        .then(() => {
          console.log("success");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  if (!userLogin) {
    history.push("/login");
  }

  return (
    <div className="profile">
      <div className="row">
        <div className="col-md-5 col-12">
          <div className="profile-left">
            <div className="profile-left-img">
              
              {!srcImg ? <AccountCircle className="profile-left-img-icon" style={{ fontSize: "175px" }} />: 
              <>
              <img src={srcImg} alt="srcImg"/>
              </>}
              <label for="upload-photo">Cập nhật ảnh</label>
              <input onChange={handleChangeFile} type="file" name="photo" id="upload-photo" />
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
        <div className="col-md-6 col-12">
          <div className="profile-right">
            <div className="profile-right-title">
              <h3>Xin chào, tôi là {userLogin?.user.name}</h3>
              <p>Bắt đầu tham gia 2021</p>
              <p className="profile-right-title-active">Chỉnh sửa hồ sơ</p>
              <form>
                <div className="user-info">
                  <div className="user-info-item">
                    <label>Tên</label>
                    <Input
                      name="name"
                      value={formik.values.name}
                      placeholder="Basic usage"
                      style={{ width: 200 }}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div className="text-danger">{formik.errors.name}</div>
                    ) : null}
                  </div>
                  <div className="user-info-item">
                    <label>Số điện thoại</label>
                    <Input
                      name="phone"
                      value={formik.values.phone}
                      placeholder="Basic usage"
                      style={{ width: 200 }}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                      <div className="text-danger">{formik.errors.phone}</div>
                    ) : null}
                  </div>
                  <div className="user-info-item">
                    <label>Email</label>
                    <Input
                      name="email"
                      value={formik.values.email}
                      placeholder="Basic usage"
                      style={{ width: 200 }}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-danger">{formik.errors.email}</div>
                    ) : null}
                  </div>
                  <div className="user-info-item">
                    <label>Ngày sinh</label>
                    <DatePicker
                      value={formik.values.birthday || new Date()}
                      disabled
                    />

                    {formik.touched.birthday && formik.errors.birthday ? (
                      <div className="text-danger">
                        {formik.errors.birthday}
                      </div>
                    ) : null}
                  </div>
                  <div className="user-info-item">
                    <label>Giớii tính</label>
                    <Radio.Group
                      onChange={formik.handleChange}
                      name="gender"
                      value={formik.values.gender}
                    >
                      <Radio value={true}>Nam</Radio>
                      <Radio value={false}>Nữ</Radio>
                    </Radio.Group>
                  </div>
                  <div className="user-info-item">
                    <label>Địa chỉ</label>
                    <Input
                      value={formik.values.address}
                      placeholder="Basic usage"
                      style={{ width: 200 }}
                    />
                    {formik.touched.address && formik.errors.address ? (
                      <div className="text-danger">{formik.errors.address}</div>
                    ) : null}
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
