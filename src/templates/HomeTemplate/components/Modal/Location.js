import React, { useEffect , useState } from 'react'
import {ChevronRight} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import api from 'utils/apiUtils'

const Location = ({valueSearch , isPlace}) => {
    const [location, setLocation] = useState([])

    useEffect(() => {
        async function fetchData () {
            api.get("/api/locations")
            .then((result) => {
                setLocation(result.data)
            })
            .catch((error) => {
                console.log(error)
            })
        }
        fetchData()
    }, [])

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
                        {
                            location?.map((item , index) => (
                                <div key={index}>
                                    <Link to={`/products?id=${item._id}&img=${item.image}`}>Tìm kiếm linh hoạt</Link>
                                </div>
                            ))
                        }
                        <ChevronRight className='icon'/>
                    </button> 
                </div>
            }
        </>
    )
}

export default Location
