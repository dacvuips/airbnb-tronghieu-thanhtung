import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { Form, Input } from "antd";

import { useDispatch } from "react-redux";
import { UpdateLocalAction } from "redux/actions/LocalManagaAction";

export default function ModalLocalID(props) {
  const dispatch = useDispatch();
  const local = props.local;
  const update = props.update.update;

  const validationSchema = Yup.object({
    name: Yup.string().required("Không được để trống"),
    province: Yup.string().required("Không được để trống"),
    country: Yup.string().required("Không được để trống"),
    valueate: Yup.string().required("Không được để trống"),
  });

  const initialValues = {
    name: local.name,
    province: local.province,

    country: local.country,
    valueate: local.valueate,
  };

  const onSubmit = (values) => {
    console.log(values);
    console.log(values);
    dispatch(UpdateLocalAction(local._id, values));
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
                Địa điểm
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
                  <Form.Item className="mb-1" label="Tên địa điểm">
                    <Input
                      className="form-control"
                      placeholder="Vui lòng nhập tên địa điểm"
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
                  <Form.Item className="mb-1" label="Tỉnh thành">
                    <Input
                      className="form-control"
                      placeholder="Vui lòng nhập tỉnh thành"
                      type="text"
                      name="province"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.province}
                    />
                    {formik.touched.province && formik.errors.province ? (
                      <div className="text-danger">
                        {formik.errors.province}
                      </div>
                    ) : null}
                  </Form.Item>
                </div>
                <div className="form-group mt-3">
                  <Form.Item className="mb-1" label="Quốc gia">
                    <Input
                      className="form-control"
                      placeholder="Vui lòng nhập quốc gia"
                      type="text"
                      name="country"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.country}
                    />
                    {formik.touched.country && formik.errors.country ? (
                      <div className="text-danger">{formik.errors.country}</div>
                    ) : null}
                  </Form.Item>
                </div>
                <div className="form-group mt-3">
                  <Form.Item className="mb-1" label="Đánh giá">
                    <Input
                      className="form-control"
                      placeholder="Vui lòng nhập đánh giá"
                      type="number"
                      name="valueate"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.valueate}
                    />

                    {formik.touched.valueate && formik.errors.valueate ? (
                      <div className="text-danger">
                        {formik.errors.valueate}
                      </div>
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
