import React from 'react'
import {ChevronRight} from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Location = ({valueSearch , isPlace , location}) => {

    let listSearch = location ? [...location] : []
    if (valueSearch && location) {
        listSearch = location.filter((item) => {
            return item.province.trim().toLowerCase().includes(valueSearch.trim().toLowerCase());
        })
    }

    return (
        <>
            {
                valueSearch ?
                <div style={{display: isPlace? "block" : "none"}} className='location' >
                    {
                        listSearch.map((item) => (
                            <Link className='location-search' key={item.id} to={`/product-detail/${item.id}`}>
                                <span>{item.name} , </span>
                                <span>{item.province} , </span>
                                <span>{item.country}</span>
                            </Link>
                        ))
                    }
                </div>
                : 
                <div style={{display: isPlace? "block" : "none"}} className='location'>
                    <p>MỌI LÚC, MỌI NƠI</p>
                    <button>
                        <Link  to='/products'>Tìm kiếm linh hoạt</Link>
                        <ChevronRight className='icon'/>
                    </button> 
                </div>
            }
        </>
    )
}

export default Location
