
// import React from 'react'

export const CarouselItem = ({ item }) => {
  return (
    <div className='carousel-item seethru respond-c'>
      <div></div>
      <img className='carousel-img' src={item.icon} />
      <div className="carousel-text white-text">
        <div className="c-title xx-large"><strong>{item.title}</strong></div>
        <div className="c-des">{item.description}</div>
        <div className="c-btns mt-4">
          <button className="square-btn3 medium">Learn More</button>
        </div>
      </div>
    </div>
  )
};
