import {
  GET_ROOMID_REQUES,
  GET_ROOM_REQUES,
} from "redux/types/RoomManagerType";

const localState = {
  room: [],
  roomID: [],
};

export const roomManagerReducer = (state = localState, action) => {
  switch (action.type) {
    case GET_ROOM_REQUES:
      state.room = action.room;
      return { ...state };

    case GET_ROOMID_REQUES:
      state.roomID = action.roomID;
      return { ...state };

    default:
      return { ...state };
  }
};
