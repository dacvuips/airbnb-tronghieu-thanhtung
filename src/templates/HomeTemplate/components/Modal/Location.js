import React from 'react'
import {ChevronRight} from '@mui/icons-material'

const Location = (props) => { 
    const {isPlace} = props;
    return (
        <div style={{display: isPlace? "block" : "none"}} className='location'>
            <p>MỌI LÚC, MỌI NƠI</p>
            <button>
                <span>Tìm kiếm linh hoạt</span>
                <ChevronRight className='icon'/>
            </button>
        </div>
    )
}

export default Location
