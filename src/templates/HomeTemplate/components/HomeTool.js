import { Search } from '@mui/icons-material'
import React from 'react'

const HomeTool = () => {
    return (
        <div className='hometool'>
            <div className="hometool-left hometool-line">
                <span className='hometool-text'>Địa điểm</span>
                <input type="text" placeholder='Bạn sắp đi đâu?'/>
            </div>
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
                <spa className='hometool-text'n>Khách</spa>
                <span>Thêm Khách</span>
                <Search /> 
            </div>
        </div>
    )
}

export default HomeTool

