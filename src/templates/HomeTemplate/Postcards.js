import React from 'react'
import postcardLeft from './../../assets/postcard-left.png'
import postcardRight from './../../assets/postcard-right.png'


const Postcards = () => {
    return (
        <div className='postcard'>
            <h1>Khám phá Trải nghiệm Airbnb</h1>
            <div className="row">
                <div className="col-md-6 col-12 mb-4 postcard-left">
                    <div className="postcard-img">
                        <img src={postcardLeft} alt="postcard-left" />
                    </div>
                    <div className="postcard-text">
                        <h1>Những điều nên trải nghiệm trong chuyến đi của bạn</h1>
                        <button className="postcard-text-btn">
                            Trải nghiệm
                        </button>
                    </div>
                </div>
                <div className="col-md-6 col-12 mb-4 postcard-left">
                    <div className="postcard-img">
                        <img src={postcardRight} alt="postcard-right" />
                    </div>
                    <div className="postcard-text">
                        <h1>Những điều nên trải nghiệm tại nhà</h1>
                        <button className="postcard-text-btn">
                            Trải nghiệm trực tuyến
                        </button>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Postcards
