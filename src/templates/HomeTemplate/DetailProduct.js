import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { actProdctDetail } from 'redux/actions/ProductDetail'



const DetailProduct = () => {
    const { listProduct } = useSelector((state) => state.productDetailReducer)
    console.log(listProduct)
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actProdctDetail(id))
    }, [dispatch , id])
    return (
        <div>
            DetailProduct
        </div>
    )
}

export default DetailProduct
