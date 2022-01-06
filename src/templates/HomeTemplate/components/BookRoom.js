import { DatePicker } from 'antd'
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { actProdctDetail } from 'redux/actions/ProductDetail'
import api from './../../../utils/apiUtils'
import Rating from './Rating'

const BookRoom = () => {
    const { productDetail } = useSelector((state) => state.ProductDetailReducer)
    console.log(productDetail)
    const [dateCheckIn, setDateCheckIn] = useState('')
    const [dateCheckOut, setDateCheckOut] = useState('')
    const { id } = useParams()
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(actProdctDetail(id))
    }, [dispatch , id])

    const booking = () => {
        
        const info = {
            checkId: id,
            checkIn : dateCheckIn,
            checkOut: dateCheckOut
        }
        api.post('/api/rooms/booking', info)
        .then((result) => {
            console.log(result.data);
            alert("Chúc mừng bạn đặt phòng thành công");
        })
        .catch((error) => {
            alert(error.response);
        });
    }

    const onChangeCheckIn = (id , dateString) => {
        setDateCheckIn(dateString)
    }
    const onChangeCheckOut = (id , dateString) => {
        setDateCheckOut(dateString)
    }

    return (
        <div className='bookRoom'>
            <div className="bookRoom-title">
                <span>{productDetail?.price} VND / đêm</span>
                <div className="bookRoom-title-rating">
                    <Rating rating={productDetail?.locationId?.valueate} />
                    <span>({productDetail?.locationId?.valueate || 1} đánh giá)</span>
                </div>
            </div>
            <div className="bookRoom-date">
                <div className="bookRoom-date-check">
                    <div className="bookRoom-date-check-in">
                        <span>Nhận phòng</span>
                        <DatePicker onChange={onChangeCheckIn}/>    
                    </div>
                    <div className="bookRoom-date-check-out">
                        <span>Trả phòng</span>
                        <DatePicker onChange={onChangeCheckOut}/>
                    </div>
                </div>
                <div className="bookRoom-date-people">
                    {productDetail?.guests} Khách
                </div>
            </div>
            <button onClick={booking}>Dat Phong</button>
            <div className="bookRoom-price">
                
            </div>
        </div>
    )
}

export default BookRoom
