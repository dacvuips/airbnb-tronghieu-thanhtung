import { Search } from '@mui/icons-material'
import React, { useRef,useEffect } from 'react'
import { useState } from 'react'
import Location from './Modal/Location'


const HomeTool = () => {

    const [isPlace,setIsPlace] = useState(false);
    useEffect(() => {
        window.addEventListener("click",() => {
            if(isPlace) {
                setIsPlace(false);
            }
        })
    }, [])
    return (
        <div className='hometool'>
            <div className="hometool-left hometool-line" onClick={(e) => {
                e.stopPropagation();
                setIsPlace(true);
            }}>
                <span className='hometool-text'>Địa điểm</span>
                <input type="text" placeholder='Bạn sắp đi đâu?'/>
            </div>
            <Location isPlace={isPlace}/>
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

