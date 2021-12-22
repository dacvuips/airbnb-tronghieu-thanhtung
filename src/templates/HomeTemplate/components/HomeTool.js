import { Search } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import api from 'utils/apiUtils'
import Location from './Modal/Location'


const HomeTool = () => {
    const [location, setLocation] = useState([])
    const [isPlace,setIsPlace] = useState(false);
    const [valueSearch , setValueSearch] = useState('')

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

    useEffect(() => {
        window.addEventListener("click",() => {
            if(isPlace) {
                setIsPlace(false);
            }
        })
    }, [isPlace])

    return (
        <div className='hometool'>
            <div className="hometool-left hometool-line" onClick={(e) => {
                e.stopPropagation();
                setIsPlace(true);
            }}>
                <span className='hometool-text'>Địa điểm</span>
                <input 
                    type="text" 
                    placeholder='Bạn sắp đi đâu?'
                    onChange={(e) => setValueSearch(e.target.value)} 
                />
            </div>
            <Location isPlace={isPlace} valueSearch={valueSearch} location={location}/>
            <div className="hometool-mid hometool-line">
                <div className="hometool-mid-to hometool-line">
                    <span className='hometool-text hometool-mid-to-text'>Nhận phòng</span>
                    <span>Thêm ngày</span>
                </div>
                <div className="hometool-mid-from">
                    <span className='hometool-text hometool-mid-from-text'>Trả phòng</span>
                    <span>Thêm ngày</span>
                </div>
            </div>
            <div className="hometool-right hometool-line">
                <div className="hometool-right-text">
                    <span className='hometool-text'n>Khách</span>
                    <span>Thêm Khách</span>
                </div>
                <div className="hometool-right-icon">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default HomeTool

