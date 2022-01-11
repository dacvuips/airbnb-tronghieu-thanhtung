import {
  GET_CARDROOM_REQUES,
  GET_CARD_REQUES,
} from "redux/types/CardManagerType";
import api from "../../util/apiUtils";

const getCardAction = () => {
  return async (dispatch) => {
    api
      .get(`/api/tickets`)
      .then((result) => {
        dispatch({
          type: GET_CARD_REQUES,
          card: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
const getCardIdAction = (id) => {
  return async (dispatch) => {
    api
      .get(`/api/tickets/${id}`)
      .then((result) => {
        dispatch({
          type: GET_CARDROOM_REQUES,
          cardRoom: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const cardIdDeleteAction = (id) => {
  return async (dispatch) => {
    api
      .delete(`/api/tickets/${id}`)
      .then((result) => {
        alert("Xóa thành công");
      })
      .catch((err) => {
        alert("Xóa không thành công");
        console.log(err);
      });
  };
};

export { getCardAction, getCardIdAction, cardIdDeleteAction };
