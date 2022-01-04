import React from 'react'

const Rating = ({ rating }) => {

    const renderStar = (totalStar) => {
        totalStar = Math.floor( totalStar/2 )
        if(!totalStar){
            return 1
        }
        return totalStar
    }

    return (
        <div>
            <img 
                style={{width: '14px' , height: '14px'}}
                src="https://dictionary.cambridge.org/images/thumb/star_noun_001_16391.jpg?version=5.0.203" 
                alt="" 
            />
            {renderStar(rating)}
        </div>
    )
}

export default Rating
