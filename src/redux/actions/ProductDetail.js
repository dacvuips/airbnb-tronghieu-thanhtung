import * as ActionType from "./../constants/ProductDetail";
import api from "../../util/apiUtils";

export const actProdctDetail = (id) => {
  return (dispatch) => {
    dispatch(actProdctDetailRequest());
    api
      .get(`/api/rooms/${id}`)
      .then((result) => {
        dispatch(actProdctDetailSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actProdctDetailFailed(error));
      });
  };
};

const actProdctDetailRequest = () => {
  return {
    type: ActionType.PRODUCTDETAIL_REQUEST,
  };
};

const actProdctDetailSuccess = (data) => {
  return {
    type: ActionType.PRODUCTDETAIL_SUCCESS,
    payload: data,
  };
};

const actProdctDetailFailed = (error) => {
  return {
    type: ActionType.PRODUCTDETAIL_FAILED,
    payload: error,
  };
};

export const actCommentProductDetail = (id) => {
  return (dispatch) => {
    dispatch(actCommentProductDetailRequest());
    api
      .get(`/api/reviews/byRoom?roomId=${id}`)
      .then((result) => {
        dispatch(actCommentProductDetailSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actCommentProductDetailFailed(error));
      });
  };
};

const actCommentProductDetailRequest = () => {
  return {
    type: ActionType.COMMENT_PRODUCT_DETAIL_REQUEST,
  };
};

const actCommentProductDetailSuccess = (data) => {
  return {
    type: ActionType.COMMENT_PRODUCT_DETAIL_SUCCESS,
    payload: data,
  };
};

const actCommentProductDetailFailed = (error) => {
  return {
    type: ActionType.COMMENT_PRODUCT_DETAIL_FAILED,
    payload: error,
  };
};
