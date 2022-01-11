import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { Form, Input, Switch } from "antd";

import { useDispatch } from "react-redux";
import { UpdateRoomAction } from "redux/actions/RoomManagerAction";

export default function ModalRoomID(props) {
  const dispatch = useDispatch();
  const room = props.room;
  const update = props.update.update;

  const [img, setimg] = useState("");

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
  const validationSchema = Yup.object({
    name: Yup.string().required("Không được để trống"),
    guests: Yup.string().required("Không được để trống"),
    bedRoom: Yup.string().required("Không được để trống"),
    bath: Yup.string().required("Không được để trống"),
    description: Yup.string().required("Không được để trống"),
    price: Yup.string().required("Không được để trống"),
  });
  const initialValues = {
    name: room.name,
    guests: room.guests,
    bedRoom: room.bedRoom,
    bath: room.bath,
    description: room.description,
    price: room.price,
    elevator: room.elevator,
    hotTub: room.hotTub,
    pool: room.pool,
    indoorFireplace: room.indoorFireplace,
    dryer: room.dryer,
    gym: room.gym,
    kitchen: room.kitchen,
    wifi: room.wifi,
    heating: room.heating,
    cableTV: room.cableTV,
    locationId: room.locationId,
    __v: 0,
    image: room.image,
  };

  const onSubmit = (values) => {
    console.log(values);

    dispatch(UpdateRoomAction(room._id, values));
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
        id="exampleModalRoom1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Chi tiết phòng
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
                  <img
                    className=" mb-3"
                    src={
                      room.image
                        ? room.image
                        : "https://phutungnhapkhauchinhhang.com/wp-content/uploads/2020/06/default-thumbnail.jpg"
                    }
                    style={{ width: "100%", height: "100%" }}
                    alt="Ảnh"
                  />
                  {/* <img
                    className=" mb-3"
                    src={
                      img
                        ? img
                        : "https://phutungnhapkhauchinhhang.com/wp-content/uploads/2020/06/default-thumbnail.jpg"
                    }
                    style={{ width: "80px", height: "80px" }}
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
                  </Form.Item> */}
                </div>
                <div className="form-group mt-3">
                  <Form.Item className="mb-1" label="Tên phòng">
                    <Input
                      className="form-control"
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
                  <Form.Item className="mb-1" label="Mô tả">
                    <Input
                      className="form-control"
                      type="text"
                      name="description"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.description}
                    />
                    {formik.touched.description && formik.errors.description ? (
                      <div className="text-danger">
                        {formik.errors.description}
                      </div>
                    ) : null}
                  </Form.Item>
                </div>
                <div className="form-group mt-3">
                  <Form.Item className="mb-1" label="Số khách">
                    <Input
                      className="form-control"
                      type="number"
                      name="guests"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.guests}
                    />
                    {formik.touched.guests && formik.errors.guests ? (
                      <div className="text-danger">{formik.errors.guests}</div>
                    ) : null}
                  </Form.Item>
                </div>

                <div className="form-group mt-3">
                  <Form.Item className="mb-1" label="Số giường">
                    <Input
                      className="form-control"
                      type="text"
                      name="bedRoom"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.bedRoom}
                    />
                    {formik.touched.bedRoom && formik.errors.bedRoom ? (
                      <div className="text-danger">{formik.errors.bedRoom}</div>
                    ) : null}
                  </Form.Item>
                </div>
                <div className="form-group mt-3">
                  <Form.Item className="mb-1" label="Số phòng tắm">
                    <Input
                      className="form-control"
                      type="number"
                      name="bath"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.bath}
                    />
                    {formik.touched.bath && formik.errors.bath ? (
                      <div className="text-danger">{formik.errors.bath}</div>
                    ) : null}
                  </Form.Item>
                </div>
                <div className="form-group mt-3">
                  <Form.Item className="mb-1" label="Giá phòng">
                    <Input
                      className="form-control"
                      type="number"
                      name="price"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.price}
                    />
                    {formik.touched.price && formik.errors.price ? (
                      <div className="text-danger">{formik.errors.price}</div>
                    ) : null}
                  </Form.Item>
                </div>

                <div className="row">
                  <div className="col">
                    <Form.Item label="Thang máy" valuePropName="checked">
                      <Switch
                        name="elevator"
                        onChange={(value) => {
                          formik.setFieldValue("elevator", value);
                        }}
                        checked={formik.values.elevator}
                      />
                    </Form.Item>
                  </div>
                  <div className="col">
                    <Form.Item label="Bồn nước nóng" valuePropName="checked">
                      <Switch
                        name="hotTub"
                        onChange={(value) => {
                          formik.setFieldValue("hotTub", value);
                        }}
                        checked={formik.values.hotTub}
                      />
                    </Form.Item>
                  </div>
                  <div className="col">
                    <Form.Item label="Hồ bơi" valuePropName="checked">
                      <Switch
                        name="pool"
                        onChange={(value) => {
                          formik.setFieldValue("pool", value);
                        }}
                        checked={formik.values.pool}
                      />
                    </Form.Item>
                  </div>
                  <div className="col">
                    <Form.Item label="Lò sưởi" valuePropName="checked">
                      <Switch
                        name="indoorFireplace"
                        onChange={(value) => {
                          formik.setFieldValue("indoorFireplace", value);
                        }}
                        checked={formik.values.indoorFireplace}
                      />
                    </Form.Item>
                  </div>
                  <div className="col">
                    <Form.Item label="Máy sáy" valuePropName="checked">
                      <Switch
                        name="dryer"
                        onChange={(value) => {
                          formik.setFieldValue("dryer", value);
                        }}
                        checked={formik.values.dryer}
                      />
                    </Form.Item>
                  </div>
                  <div className="col">
                    <Form.Item label="Phòng Gym" valuePropName="checked">
                      <Switch
                        name="gym"
                        onChange={(value) => {
                          formik.setFieldValue("gym", value);
                        }}
                        checked={formik.values.gym}
                      />
                    </Form.Item>
                  </div>
                  <div className="col">
                    <Form.Item label="Phòng ăn" valuePropName="checked">
                      <Switch
                        name="kitchen"
                        onChange={(value) => {
                          formik.setFieldValue("kitchen", value);
                        }}
                        checked={formik.values.kitchen}
                      />
                    </Form.Item>
                  </div>
                  <div className="col">
                    <Form.Item label="Wifi" valuePropName="checked">
                      <Switch
                        name="wifi"
                        onChange={(value) => {
                          formik.setFieldValue("wifi", value);
                        }}
                        checked={formik.values.wifi}
                      />
                    </Form.Item>
                  </div>
                  <div className="col">
                    <Form.Item label="Sưởi" valuePropName="checked">
                      <Switch
                        name="heating"
                        onChange={(value) => {
                          formik.setFieldValue("heating", value);
                        }}
                        checked={formik.values.heating}
                      />
                    </Form.Item>
                  </div>
                  <div className="col">
                    <Form.Item label="Truyền hình cáp" valuePropName="checked">
                      <Switch
                        name="cableTV"
                        onChange={(value) => {
                          formik.setFieldValue("cableTV", value);
                        }}
                        checked={formik.values.cableTV}
                      />
                    </Form.Item>
                  </div>
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
