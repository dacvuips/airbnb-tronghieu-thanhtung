import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import productImg from '../../assets/product.png'
import { Pagination } from "antd";
import { actProduct } from '../../redux/actions/ListProduct'
import { useState } from 'react';
const queryString = require("query-string");

const ListProducts = (props) => {
    const { listProduct,length } = useSelector((state) => state.ProductReducer)
    const [currentPage,setCurrentPage] = useState(1);
    const dispatch = useDispatch()
    const usd = '20000'
    const pageSize = 24;

    const { id } = queryString.parse(props.location.search);


    useEffect(() => {
    if (!id) {
        dispatch(actProduct(0, 0, pageSize))
    }else {
        dispatch(actProduct(0, 0, pageSize, id))
    }
    }, [dispatch, id ]) 
    
    if (listProduct?.length > 0) {
        return (
            <div className='product'>
                <div className="row">
                    {
                        listProduct?.map((item) => (
                            <>
                                <Link  className="col-md-3 col-12  product-item" key={item._id} to={`/product-detail/${item._id}`}>
                                    <img 
                                    
                                        src={item.image || productImg} 
                                        alt={item.name}
                                    />
                                    <p>{item.name?.length > 30 ? item.name.slice(0,30) + '...' : item.name}</p>
                                    <div className="product-location">
                                        <span>{item.locationId?.name}</span>
                                        <span>{item.locationId?.province}</span>
                                    </div>
                                    <p>{item.price/usd}$/ đêm</p>
                                </Link>
                            </>
                    ))
                }
                </div>            
                <Pagination
                    onChange={(value) => {
                        setCurrentPage(value)
                        const skip = (value - 1) * pageSize
                        dispatch(actProduct(skip, pageSize, undefined, id))
                    }}
                    defaultPageSize={pageSize}
                    total={length}
                    current={currentPage}
                />
            </div>
        )
    } 
    return <>
    <h2 style={{
        textAlign: "center"
    }}>Hiện tại chưa có phòng tại vị trí này!</h2></>
}

export default ListProducts
