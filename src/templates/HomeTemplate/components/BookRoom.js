import { DatePicker } from 'antd'
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { actProdctDetail } from 'redux/actions/ProductDetail'
import api from './../../../utils/apiUtils'
import Rating from './Rating'
import moment from 'moment'

const BookRoom = () => {
    const { productDetail } = useSelector((state) => state.ProductDetailReducer)
    const { userLogin } = useSelector((state) => state.LoginReducer)
    const [dateCheckIn, setDateCheckIn] = useState({dateString: moment (new Date()).format('YYYY-MM-DD')})
    const [dateCheckOut, setDateCheckOut] = useState({dateString: moment (new Date()).format('YYYY-MM-DD')})
    const [totalDay, setTotalDay] = useState(0)
    const { id } = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const usd = 20000
    const fee = Number('10')

    useEffect(() => {
        dispatch(actProdctDetail(id))
    }, [dispatch , id])

    const booking = () => {  
        const info = {
            checkId: id,
            checkIn : dateCheckIn.dateString,
            checkOut: dateCheckOut.dateString
        }
        api.post('/api/rooms/booking', info)
        .then((result) => {
            console.log(result);
            alert("Chúc mừng bạn đặt phòng thành công");
        })
        .catch((error) => {
            alert(error.response.data);
        });
    }

    const onChangeCheckIn = (value,dateString) => {
        setDateCheckIn({
            dateString: dateString,
        })
    }
    const onChangeCheckOut = (value,dateString) => {
        console.log(dateCheckIn)
        const dateStart = dateCheckIn?.dateString?.split('-')[2]
        const dateEnd = dateString.split('-')[2]
        const totalDayTemp = dateEnd - dateStart
            setDateCheckOut({
                dateString: dateString,
            })
            setTotalDay(totalDayTemp)
       
    }


    return (
        <div className='bookRoom'>
            <div className="bookRoom-title">
                <div className='bookRoom-title-price'>
                    <span className='bookRoom-title-price-item'>{productDetail?.price/usd}$</span>
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
                            <DatePicker className='bookRoom-date-check-in-date' onChange={onChangeCheckIn}/>    
                        </div>
                    </div>
                    <div className="bookRoom-date-check-out">
                        <div className="bookRoom-date-check-in-item">
                            <span>Trả phòng</span>
                            <DatePicker className='bookRoom-date-check-in-date' onChange={onChangeCheckOut}/>
                        </div>
                    </div>
                </div>
                <div className="bookRoom-date-people">
                    <span>Khách</span>
                    <span>
                        {productDetail?.guests} Khách
                    </span>
                </div>
            </div>
            <button onClick={booking}>Đặt phòng</button>
            <p>Bạn vẫn chưa bị trừ tiền</p>
            {dateCheckIn?.dateString && dateCheckOut?.dateString ? 
            (
                <div className="bookRoom-price">
                <span>
                    {productDetail?.price / usd}$ * {totalDay || 0} đêm
                </span>
                <span>{(productDetail?.price / usd) * totalDay || ""}$</span>
                </div>
            ) : (
                "" 
            )}
            <div className="bookRoom-fee">
                <span>Phí dịch vụ</span>
                <span>{fee}$</span>
            </div>
            <div className="bookRoom-total">
                <span>Tổng</span>
                <span>{(productDetail?.price/usd)*totalDay + fee}$</span>
            </div>
        </div>
    )
}

export default BookRoom
