import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import productImg from '../../assets/product.png'
import { Pagination } from "antd";
import { actProduct } from '../../redux/actions/ListProduct'
import { useState } from 'react';

const ListProducts = () => {
    const { listProduct,length } = useSelector((state) => state.ProductReducer)
    const [currentPage,setCurrentPage] = useState(1);
    const dispatch = useDispatch()
    const pageSize = 24;

    useEffect(() => {
        dispatch(actProduct(0, 0, pageSize))
    }, [dispatch]) 
    
    if (listProduct) {
        return (
            <div className='product'>
                <div className="row">
                    {
                        listProduct?.map((item) => (
                            <>
                                <Link  className="col-2 product-item" key={item._id} to={`/product-detail/${item._id}`}>
                                    <img 
                                    
                                        src={item.image || productImg} 
                                        alt={item.name}
                                    />
                                    <p>{item.name?.length > 30 ? item.name.slice(0,30) + '...' : item.name}</p>
                                    <div className="product-location">
                                        <span>{item.locationId?.name}</span>
                                        <span>{item.locationId?.province}</span>
                                    </div>
                                    <p>{item.price} VND / đêm</p>
                                </Link>
                            </>
                    ))
                }
                </div>            
                <Pagination
                    onChange={(value) => {
                        setCurrentPage(value)
                        const skip = (value - 1) * pageSize
                        dispatch(actProduct(skip, pageSize))
                    }}
                    defaultPageSize={pageSize}
                    total={length}
                    current={currentPage}
                />
            </div>
        )
    } 
    return <></>
}

export default ListProducts
