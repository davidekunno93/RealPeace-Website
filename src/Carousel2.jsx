import React, { useState } from 'react'
import { Carousel2Item } from './Carousel2Item';

export const Carousel2 = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        {
            title: "Listen to the Podcast",
            description: "Real Peace podcast on YouTube tackles the challenge of developing mental clarity giving useful exercises to increase mindfulness",
            img: "https://i.imgur.com/732ZgNR.png",
            link: "/under-construction"
        },
        {
            title: "Check out the Merch",
            description: "Browse some of our merchandise. We sell shirts, hats, bags and jewellry",
            img: "https://i.imgur.com/iGkKDTB.png",
            link: "/under-construction"
        },
        {
            title: "Make a Donation",
            description: "Make a donation to the organization",
            img: "https://i.imgur.com/a17ri3Y.png",
            link: "/under-construction"
        }
    ];

    const updateIndex = (newIndex) => {
        if (newIndex === items.length) {
            newIndex = 0
        } else if (newIndex === -1) {
            newIndex = items.length - 1
        }
        setActiveIndex(newIndex)
    };

    return (
        <>
            <div className="carousel-rectangle wide80 m-auto rel">
                <div className="carousel2-btns flx-r just-ce abs z-20">
                    <button onClick={() => updateIndex(activeIndex - 1)} className='arrow-left seethru'>
                        <span className="material-symbols-outlined xx-large color-black">
                            arrow_back_ios
                            {/* arrow_circle_left */}
                        </span>
                    </button>

                    <div className="indicators mt-3 flx-r just-se">
                        {items.map((item, index) => {
                            // return <button className={`${activeIndex === index ? null : "dot-option"} seethru`} onClick={() => updateIndex(index)}><span className="material-symbols-outlined large">
                            //     {activeIndex === index ? "radio_button_checked" : "radio_button_unchecked"}
                            // </span></button>
                            return <img key={index} src={activeIndex === index ? "https://i.imgur.com/X6zwuT5.png" : "https://i.imgur.com/flQLMEs.png"} className={`${activeIndex === index ? null : "dot-option"} dot-img mx-3`} onClick={() => updateIndex(index)} />
                                
                            
                        })}
                    </div>

                    <button onClick={() => updateIndex(activeIndex + 1)} className='arrow-right seethru'>
                        <span className="material-symbols-outlined xx-large color-black">
                            arrow_forward_ios
                            {/* arrow_circle_right */}
                        </span>
                    </button>

                </div>
                <div className="inner" style={{ transform: `translate(-${activeIndex * 100}%)` }}>


                    {items.map((item, i) => {
                        return <Carousel2Item key={i} item={item} />
                    })}

                </div>
            </div>
        </>
    )
}