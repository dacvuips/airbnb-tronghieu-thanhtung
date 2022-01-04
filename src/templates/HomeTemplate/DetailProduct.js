import { ConnectedTv , IosShare , FavoriteBorder, Home, GridGoldenratio, SupervisorAccount, Cancel } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { actProdctDetail } from 'redux/actions/ProductDetail'
import BookRoom from './components/BookRoom'
import Rating from './components/Rating'



const DetailProduct = () => {
    const { productDetail } = useSelector((state) => state.ProductDetailReducer)
    console.log(productDetail)
    const { id } = useParams()  
    const dispatch = useDispatch()
    const errorLocation = 'Việt Nam'

    useEffect(() => {
        dispatch(actProdctDetail(id))
    }, [dispatch , id])
    return (
        <div className='detailProduct'>
            <div className="detailProduct-title">
                <div className='detailProduct-title-top'>
                    <ConnectedTv className='detailProduct-title-top-icon'/>
                    <span>TRẢI NGHIỆM TRỰC TUYẾN</span>
                </div>
                <span className='detailProduct-title-header'>{productDetail?.name}</span>
                <div className="detailProduct-title-bottom">
                    <div className="detailProduct-title-bottom-left">
                        <div className="detailProduct-title-bottom-left-rating">
                            <Rating rating={productDetail?.locationId?.valueate} />
                            <span>({productDetail?.locationId?.valueate || 1} đánh giá)</span>
                        </div>
                        <div className="detailProduct-title-bottom-left-location detailProduct-title-bottom-left-icon">
                            <span>{productDetail?.locationId?.province || errorLocation} , </span>
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
                    <img  src={productDetail?.image} alt={productDetail?.name} />
                </div>
                <div className="item2">
                    <img  src={productDetail?.image} alt={productDetail?.name} />
                </div>
                <div className="item3">
                    <img  src={productDetail?.image} alt={productDetail?.name} />
                </div>
                <div className="item4">
                    <img  src={productDetail?.image} alt={productDetail?.name} />
                </div>
                <div className="item5">
                    <img  src={productDetail?.image} alt={productDetail?.name} />
                </div>
            </div>
            <div className="detailProduct-desc">
                <div className="row">
                    <div className="col-8">
                        <div className="detailProduct-desc-header">
                            <div className="detailProduct-desc-header-info">
                                <h4>Toàn bộ căn hộ {productDetail?.name}</h4>
                                <span>{productDetail?.guests} khách</span>
                                <span className='icon'>{productDetail?.bedRoom} phòng ngủ </span>
                                <span className='icon'>{productDetail?.bedRoom} giường </span>
                                <span className='icon'>{productDetail?.bath} phòng tắm</span>
                            </div>
                            <div className="detailProduct-desc-header-user">
                                <img src="https://a0.muscache.com/im/pictures/user/e6061ba2-2017-429c-8b62-f9b6fb09b288.jpg?im_w=240" alt="" />
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
                                    <span>Chủ nhà đã cam kết thực hiện quy trình vệ sinh tặng cường 5 bước của Airbnb</span>
                                </div>
                            </div>
                            <div className="detailProduct-desc-info-item">
                                <SupervisorAccount />
                                <div className="detailProduct-desc-info-item-text">
                                    <p>Chủ nhà siêu cấp</p>
                                    <span>Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách</span>
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
                    <div className="col-4">
                        <BookRoom />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct
