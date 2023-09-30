import React, { useState } from 'react'
import { CarouselItem } from './CarouselItem';

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "WELCOME TO REAL PEACE",
      description: "Real Peace is a young adults' group using meditation and other mindful practices to reconnect with ourselves and each other. Make new friends, discover new practices, and develop yourself through powerful techniques taught on our meditation guides.",
      icon: "https://i.imgur.com/6Ow1k8K.png"
    },
    {
      title: "MEDITATION MEETUPS",
      description: "Desc goes here...",
      icon: "/src/media/undraw_mindfulness.svg"
    },
    {
      title: "FRIDAY SOCIALS",
      description: "Desc goes here...",
      icon: "/images/party-image.jpg"
    }
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1
    }
    setActiveIndex(newIndex);
    console.log(newIndex)
    console.log(activeIndex)
  }

  return (
    <>
      <div className='carousel bg-starrynight'>
        <div className="inner" style={{ transform: `translate(-${activeIndex * 100}%)` }}>
          {items.map((item) => {
            return <CarouselItem item={item} />
          })}
        </div>

      </div>
      <div className="btn-bg">
        <div className="carousel-btns flx-r just-ce">

          <button onClick={() => updateIndex(activeIndex - 1)} className='arrow-left seethru'>
            <span className="material-symbols-outlined white-text large">
              arrow_back_ios
            </span>
          </button>

          <div className="indicators">
            {items.map((item, index) => {
              return <button className={`${activeIndex === index ? null : "dot-option"} seethru`} onClick={() => updateIndex(index)}><span className="material-symbols-outlined white-text large">
                {activeIndex === index ? "radio_button_checked" : "radio_button_unchecked"}
              </span></button>
            })}
          </div>

          <button onClick={() => updateIndex(activeIndex + 1)} className='arrow-right seethru'>
            <span className="material-symbols-outlined white-text large">
              arrow_forward_ios
            </span>
          </button>

        </div>
      </div>
    </>
  )
};

