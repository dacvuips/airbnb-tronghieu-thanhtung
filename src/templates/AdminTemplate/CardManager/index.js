import React, { useEffect, useState } from "react";
// import { Table, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import CardModal from "./modal";
import { getCardAction } from "redux/actions/CardAction";
// import Card from "./Card";

// const { Search } = Input;
export default function CardManager(props) {
  const { card } = useSelector((state) => state.CardReducer);

  const dispatch = useDispatch();
  const [state, setState] = useState({
    state: "",
  });

  useEffect(() => {
    dispatch(getCardAction());
  }, []);

  // useEffect(() => {
  //   async function fechData() {
  //     dispatch(getCardAction());
  //   }

  //   fechData();

  //   setState(card);
  // }, []);

  //  useEffect(() => {
  //     if (card.length === 0) {
  //       dispatch(getCardAction());
  //     }

  //     setState(card);
  //   }, [card]);

  const renderTable = () => {
    return card?.map((value, index) => {
      return (
        <tr key={index + 1}>
          <th scope="row">{index + 1}</th>
          <td>{value.roomId?.name}</td>

          <td>{value.userId?.name}</td>

          <td>
            <div
              data-toggle="modal"
              data-target="#CardModal"
              className="btn btn-outline-success mr-2"
              onClick={() => {
                setState({ state: value });
              }}
            >
              Chi tiết
            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <h1>Quản lý Vé</h1>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên phòng</th>

            <th scope="col">Tên người đặt</th>

            <th scope="col">Tùy chọn</th>
          </tr>
        </thead>
        <tbody>{card.length && renderTable()}</tbody>
      </table>
      <CardModal dataCard={state?.state} />
    </>
  );
}
