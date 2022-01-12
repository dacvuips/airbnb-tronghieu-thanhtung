import { DatePicker , Space } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { actProdctDetail } from "redux/actions/ProductDetail";
import api from "../../../utils/apiUtils"
import Rating from "./Rating";

const BookRoom = () => {
  const { productDetail } = useSelector((state) => state.ProductDetailReducer);
  const { userLogin } = useSelector((state) => state.LoginReducer);
  const [dateCheckIn, setDateCheckIn] = useState({
    dateString: "",
  });
  const [dateCheckOut, setDateCheckOut] = useState({
    dateString: "",
  });
  const [totalDay, setTotalDay] = useState(0);
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const usd = 20000;
  const fee = Number("10");

  const { RangePicker } = DatePicker;



  const calcDay = (day1,day2) => {
    var date1 = new Date(day1);
    var date2 = new Date(day2);
      
    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();
      
    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      
    //To display the final no. of days (result)
    return Difference_In_Days
}


  useEffect(() => {
    dispatch(actProdctDetail(id));
  }, [dispatch, id]);

  const booking = () => { // 
    if (userLogin) {
      if (dateCheckIn?.dateString && dateCheckOut?.dateString) {
        const info = {
          "roomId" : "6166562edc423b001dd9c0cf", 
          "checkIn": "2021-05-11T17:00:00.000+00:00", 
          "checkOut": "2021-05-15T17:00:00.000+00:00"
      };
        api
          .post("/api/rooms/booking", info)
          .then((result) => {
            console.log(result);
            alert("Chúc mừng bạn đặt phòng thành công");
          })
          .catch((error) => {
            alert(error.response.data);
          });
      }
    } else {
      alert("Vui lòng đăng nhập!");
      history.push("/login");
    }
  };

  const onChangeCheckIn = (value, dateString) => {
    setDateCheckIn({
      dateString: dateString,
    });
  };
  const onChangeCheckOut = (value, dateString) => {
    setTotalDay(calcDay(dateCheckIn?.dateString,dateString))
    setDateCheckOut({
      dateString: dateString,
    });
  };

  return (
    <>
      <div className="bookRoom">
        <div className="bookRoom-title">
          <div className="bookRoom-title-price">
            <span className="bookRoom-title-price-item">
              {productDetail?.price / usd}$
            </span>
            <span> / đêm</span>
          </div>

          <div className="bookRoom-title-rating">
            <Rating rating={productDetail?.locationId?.valueate} />
            <span>({productDetail?.locationId?.valueate || 1} đánh giá)</span>
          </div>
        </div>
        <div className="bookRoom-date">
          <div className="bookRoom-date-check">
            <div className="bookRoom-date-check-in">
              <div className="bookRoom-date-check-in-item">
                <span>Nhận phòng</span>
                <DatePicker
                  className="bookRoom-date-check-in-date"
                  onChange={onChangeCheckIn}
                />
              </div>
            </div>
            <div className="bookRoom-date-check-out">
              <div className="bookRoom-date-check-in-item">
                <span>Trả phòng</span>
                <DatePicker
                  className="bookRoom-date-check-in-date"
                  onChange={onChangeCheckOut}
                />
              </div>
            </div>
          </div>
          <div className="bookRoom-date-people">
            <span>Khách</span>
            <span>{productDetail?.guests} Khách</span>
          </div>
        </div>
        <button onClick={booking}>Đặt phòng</button>
        <p>Bạn vẫn chưa bị trừ tiền</p>
        {dateCheckIn?.dateString && dateCheckOut?.dateString ? (
          <div className="bookRoom-price">
            <span>
              {productDetail?.price / usd}$ * {totalDay || 0} đêm
            </span>
            <span>{(productDetail?.price / usd) * totalDay || ""}$</span>
          </div> // sao a oi 
        ) : (
          ""
        )}
        <div className="bookRoom-fee">
          <span>Phí dịch vụ</span>
          <span>{fee}$</span>
        </div>
        <div className="bookRoom-total">
          <span>Tổng</span>
          <span>{(productDetail?.price / usd) * totalDay + fee}$</span>
        </div>
      </div>

      <div className="bookRoom-mobile">
        <div className="bookRoom-mobile-top">
          <Space direction="vertical" size={12}  style={{style: 'block'}}>
            <RangePicker 
                  onChange={(value,a) => {
                    setDateCheckOut({
                      dateString: a[1],
                    });
                    setDateCheckIn({
                      dateString: a[0],
                    });
                    
    setTotalDay(calcDay(a[0],a[1]));
                  }}
                  />
          </Space>
          <div className="bookRoom-mobile-top-price">
            <span>
              {productDetail?.price / usd}$ * {totalDay || 0} đêm
            </span>
          </div>
        </div>
        <button onClick={booking}>Đặt phòng</button>
      </div>
    </>
  );
};

export default BookRoom;
