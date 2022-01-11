import {
  ConnectedTv,
  IosShare,
  FavoriteBorder,
  Home,
  GridGoldenratio,
  SupervisorAccount,
  Cancel,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  actCommentProductDetail,
  actProdctDetail,
} from "redux/actions/ProductDetail";
import BookRoom from "./components/BookRoom";
import Rating from "./components/Rating";
import ProductImg from "./../../assets/product.png";
import star from "./../../assets/star.png";
import moment from "moment";

const DetailProduct = () => {
  const { productDetail, comment } = useSelector(
    (state) => state.ProductDetailReducer
  );

  const [isShow, setIsShow] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const usd = "20000";
  const errorLocation = "Việt Nam";
  console.log(comment);
  useEffect(() => {
    dispatch(actProdctDetail(id));
    dispatch(actCommentProductDetail(id));
  }, [dispatch, id]);
  return (
    <div className="detailProduct">
      <div className="detailProduct-title">
        <div className="detailProduct-title-top">
          <ConnectedTv className="detailProduct-title-top-icon" />
          <span>TRẢI NGHIỆM TRỰC TUYẾN</span>
        </div>
        <span className="detailProduct-title-header">
          {productDetail?.name}
        </span>
        <div className="detailProduct-title-bottom">
          <div className="detailProduct-title-bottom-left">
            <div className="detailProduct-title-bottom-left-rating">
              <Rating rating={productDetail?.locationId?.valueate} />
              <span>({productDetail?.locationId?.valueate || 1} đánh giá)</span>
            </div>
            <div className="detailProduct-title-bottom-left-location detailProduct-title-bottom-left-icon">
              <span>
                {productDetail?.locationId?.province || errorLocation} ,{" "}
              </span>
              <span>{productDetail?.locationId?.country || errorLocation}</span>
            </div>
            <div className="detailProduct-title-bottom-left-right detailProduct-title-bottom-left-icon">
              <span>Một phần của Trải nghiệm trực tuyến Airbnb</span>
            </div>
          </div>
          <div className="detailProduct-title-bottom-right">
            <div className="detailProduct-title-bottom-right-share">
              <IosShare />
              <span>Chia sẻ</span>
            </div>
            <div className="detailProduct-title-bottom-right-save">
              <FavoriteBorder />
              <span>Lưu</span>
            </div>
          </div>
        </div>
      </div>
      <div className="detailProduct-img">
        <div className="item1">
          <img
            src={productDetail?.image || ProductImg}
            alt={productDetail?.name}
          />
        </div>
        <div className="item2">
          <img
            src={productDetail?.image || ProductImg}
            alt={productDetail?.name}
          />
        </div>
        <div className="item3">
          <img
            src={productDetail?.image || ProductImg}
            alt={productDetail?.name}
          />
        </div>
        <div className="item4">
          <img
            src={productDetail?.image || ProductImg}
            alt={productDetail?.name}
          />
        </div>
        <div className="item5">
          <img
            src={productDetail?.image || ProductImg}
            alt={productDetail?.name}
          />
        </div>
      </div>
      <div className="detailProduct-desc">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="detailProduct-desc-header">
              <div className="detailProduct-desc-header-info">
                <h4>Toàn bộ căn hộ {productDetail?.name}</h4>
                <span>{productDetail?.guests} khách</span>
                <span className="icon">
                  {productDetail?.bedRoom} phòng ngủ{" "}
                </span>
                <span className="icon">{productDetail?.bedRoom} giường </span>
                <span className="icon">{productDetail?.bath} phòng tắm</span>
              </div>
              <div className="detailProduct-desc-header-user">
                <img
                  src="https://a0.muscache.com/im/pictures/user/e6061ba2-2017-429c-8b62-f9b6fb09b288.jpg?im_w=240"
                  alt=""
                />
              </div>
            </div>
            <div className="detailProduct-desc-info">
              <div className="detailProduct-desc-info-item">
                <Home />
                <div className="detailProduct-desc-info-item-text">
                  <p>Toàn bộ nhà</p>
                  <span>Bạn sẽ có chung cư cao cấp cho riêng mình</span>
                </div>
              </div>
              <div className="detailProduct-desc-info-item">
                <GridGoldenratio />
                <div className="detailProduct-desc-info-item-text">
                  <p>Vệ sinh tăng cường</p>
                  <span>
                    Chủ nhà đã cam kết thực hiện quy trình vệ sinh tặng cường 5
                    bước của Airbnb
                  </span>
                </div>
              </div>
              <div className="detailProduct-desc-info-item">
                <SupervisorAccount />
                <div className="detailProduct-desc-info-item-text">
                  <p>Chủ nhà siêu cấp</p>
                  <span>
                    Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh
                    giá cao và là những người cam kết mang lại quãng thời gian ở
                    tuyệt vời cho khách
                  </span>
                </div>
              </div>
              <div className="detailProduct-desc-info-item">
                <Cancel />
                <div className="detailProduct-desc-info-item-text">
                  <p>Miễn phí hủy phòng trong 48 giờ</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <BookRoom />
          </div>
        </div>
      </div>
      <div className="evaluate">
        <div className="evaluate-rate">
          <img src={star} alt="" />
          <h3>4,64 · 198 đánh giá</h3>
        </div>
        <div className="evaluate-common">
          <div className="evaluate-common-left">
            <div>
              <div className="label">Mức độ sạch sẽ</div>
              <div className="slide">
                <div className="slide-wrapper">
                  <div className="slide-hollow"></div>
                  <div className="slide-slide"></div>
                </div>
                <span>4.4</span>
              </div>
            </div>
            <div>
              <div className="label">Mức độ sạch sẽ</div>
              <div className="slide">
                <div className="slide-wrapper">
                  <div className="slide-hollow"></div>
                  <div className="slide-slide"></div>
                </div>
                <span>4.4</span>
              </div>
            </div>
            <div>
              <div className="label">Mức độ sạch sẽ</div>
              <div className="slide">
                <div className="slide-wrapper">
                  <div className="slide-hollow"></div>
                  <div className="slide-slide"></div>
                </div>
                <span>4.4</span>
              </div>
            </div>
          </div>
          <div className="evaluate-common-right">
            <div>
              <div className="label">Mức độ sạch sẽ</div>
              <div className="slide">
                <div className="slide-wrapper">
                  <div className="slide-hollow"></div>
                  <div className="slide-slide"></div>
                </div>
                <span>4.4</span>
              </div>
            </div>
            <div>
              <div className="label">Mức độ sạch sẽ</div>
              <div className="slide">
                <div className="slide-wrapper">
                  <div className="slide-hollow"></div>
                  <div className="slide-slide"></div>
                </div>
                <span>4.4</span>
              </div>
            </div>
            <div>
              <div className="label">Mức độ sạch sẽ</div>
              <div className="slide">
                <div className="slide-wrapper">
                  <div className="slide-hollow"></div>
                  <div className="slide-slide"></div>
                </div>
                <span>4.4</span>
              </div>
            </div>
          </div>
        </div>
        <div className="comment">
          {comment?.slice(0, 4).map((item, index) => {
            return (
              <div key={index} className="comment-item">
                <div className="comment-header">
                  <img
                    src={item.userId?.avatar || "https://picsum.photos/50/50"}
                    alt=""
                  />
                  <div>
                    <h2>{item.userId?.name}</h2>
                    <p>{moment(item.userId?.birthday).format("DD/MM/YYYY")}</p>
                  </div>
                </div>
                <div>{item.content}</div>
              </div>
            );
          })}
          {isShow ? (
            <>
              {comment?.slice(4)?.map((item, index) => {
                return (
                  <div key={index} className="comment-item">
                    <div className="comment-header">
                      <img
                        src={
                          item.userId?.avatar || "https://picsum.photos/50/50"
                        }
                        alt=""
                      />
                      <div>
                        <h2>{item.userId?.name}</h2>
                        <p>
                          {moment(item.userId?.birthday).format("DD/MM/YYYY")}
                        </p>
                      </div>
                    </div>
                    <div>{item.content}</div>
                  </div>
                );
              })}
            </>
          ) : (
            <></>
          )}

          {comment?.length > 4 ? (
            <div className="btn-show">
              <div
                style={{
                  display: isShow ? "none" : "block",
                }}
                onClick={() => {
                  setIsShow(true);
                }}
              >
                Hiển thị tất cả {comment?.length - 4} đánh giá
              </div>
            </div>
          ) : (
            ""
          )}
          <div
            style={{
              display: isShow ? "block" : "none",
            }}
            className="btn-show"
          >
            <div
              onClick={() => {
                setIsShow(false);
              }}
            >
              Ẩn
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
