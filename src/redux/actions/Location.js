import * as ActionType from "../constants/Location";
import api from "../../util/apiUtils";

export const actLocation = () => {
  return (dispatch) => {
    dispatch(actLocationRequest());
    api
      .get("/api/locations")
      .then((result) => {
        dispatch(actLocationSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actLocationFailed(error));
      });
  };
};

const actLocationRequest = () => {
  return {
    type: ActionType.LOCATION_REQUEST,
  };
};

const actLocationSuccess = (data) => {
  return {
    type: ActionType.LOCATION_SUCCESS,
    payload: data,
  };
};

const actLocationFailed = (error) => {
  return {
    type: ActionType.LOCATION_FAILED,
    payload: error,
  };
};
