import React, { useState } from "react";

import { Tabs } from "antd";

import { useDispatch } from "react-redux";
import { getCardIdAction } from "redux/actions/CardAction";
import ShowRoom from "./ShowRoom";

const { TabPane } = Tabs;

export default function CardModal(props) {
  const [state, setState] = useState({
    tabPosition: "left",
  });

  const changeTabPosition = (e) => {
    setState({ tabPosition: e.target.value });
  };

  const dataCard = props.dataCard;

  const dispatch = useDispatch();
  // const local = props.local;
  // const update = props.update.update;

  // const validationSchema = Yup.object({
  //   name: Yup.string().required("Không được để trống"),
  //   province: Yup.string().required("Không được để trống"),
  //   country: Yup.string().required("Không được để trống"),
  //   valueate: Yup.string().required("Không được để trống"),
  // });

  // const initialValues = {
  //   name: local.name,
  //   province: local.province,

  //   country: local.country,
  //   valueate: local.valueate,
  // };

  // const onSubmit = (values) => {
  //   console.log(values);
  //   console.log(values);
  //   dispatch(UpdateLocalAction(local._id, values));
  // };
  // const formik = useFormik({
  //   enableReinitialize: true,
  //   initialValues,
  //   onSubmit,
  //   validationSchema,
  // });

  const handleTabs = () => {
    return dataCard?.userId?.tickets?.map((value, index) => {
      return (
        <TabPane tab={`Vé ${index + 1}`} key={value}>
          <div className="row">
            <ShowRoom id={value} />
          </div>
        </TabPane>
      );
    });
  };
  const { tabPosition } = state;
  return (
    <>
      <div
        className="modal fade"
        id="CardModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className=" modal-xl modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {dataCard?.userId?.name}
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
              <Tabs
                tabPosition={tabPosition}
                onTabClick={(tab) => {
                  dispatch(getCardIdAction(tab));
                }}
              >
                {handleTabs()}
              </Tabs>
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
