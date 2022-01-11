import {
  GET_CARDID_REQUES,
  GET_CARDROOM_REQUES,
  GET_CARD_REQUES,
} from "redux/types/CardManagerType";

const init = {
  card: "",
  cardID: "",
  cardRoom: [],
};

const CardReducer = (state = init, action) => {
  switch (action.type) {
    case GET_CARD_REQUES:
      state.card = action.card;
      return { ...state };
    case GET_CARDID_REQUES:
      state.cardID = action.cardID;
      return { ...state };
    case GET_CARDROOM_REQUES:
      state.cardRoom = action.cardRoom;
      return { ...state };
    default:
      return { ...state };
  }
};

export { CardReducer };
