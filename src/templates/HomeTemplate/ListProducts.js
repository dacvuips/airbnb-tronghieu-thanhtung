import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import productImg from '../../assets/product.png'
import { actProduct } from '../../redux/actions/Product'

const ListProducts = () => {
    const { listProduct } = useSelector((state) => state.ProductReducer)
    console.log(listProduct)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actProduct())
    }, [dispatch])
    return (
        <div className='product'>
            <div className="row">
                {
                    listProduct?.map((item, index) => (
                        <Link className="col-2 product-item" key={index} to={`/product-detail/${item.id}`}>
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
                ))
                }
            </div>            
        </div>
    )
}

export default ListProducts
