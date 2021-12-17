import { Search } from '@mui/icons-material'
import React from 'react'

const HomeTool = () => {
    return (
        <div className='hometool'>
            <div className="hometool-left">
                <p>Địa điểm</p>
                <input type="text" placeholder='Bạn sắp đi đâu?'/>
            </div>
            <div className="hometool-mid">
                <div className="hometool-mid-to">
                    <p>Nhận phòng</p>
                    <p>Thêm ngày</p>
                </div>
                <div className="hometool-mid-from">
                    <p>Trả phòng</p>
                    <p>Thêm ngày</p>
                </div>
            </div>
            <div className="hometool-right">
                <span>Khách</span>
                <span>Thêm Khách</span>
                <Search /> 
            </div>
        </div>
    )
}

export default HomeTool

