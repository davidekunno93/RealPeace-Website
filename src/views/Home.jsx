import { useState } from "react";
import { Carousel } from "../Carousel";
import { Carousel2 } from "../Carousel2";
import MultiLayerParallax from "../components/MultiLayerParallax";
import { Link } from "react-router-dom";

const Home = () => {
    const [img, setImg] = useState("https://i.imgur.com/WXW5tkC.png")

    const updateImg = (object) => {
        let arr = ["one", "two", "three", "four"]
        setImg(object.img_url);
        let activeElement = document.getElementById(object.id);
        activeElement.classList.remove("hover")
        activeElement.classList.add("hover-pressed")
        let x = arr.splice(arr.indexOf(object.id), 1)
        console.log(arr)
        for (let i = 0; i < arr.length; i++) {
            let ie = document.getElementById(arr[i])
            console.log(arr[i])
            console.log(ie)
            ie.classList.add("hover")
            ie.classList.remove("hover-pressed")
        }
    }

    return (
        <>
            <MultiLayerParallax />
            <div className="darkgreen-backy center-text">
                <h1 className="white-text mt-5">Real Peace </h1>
                <p className="center white-text wide70 large mb-5 roboto">Real Peace is a young adults' group using meditation and other mindful practices to reconnect with ourselves and each other. Discover new practices taught in our guided meditations, make new friends and socialize with like-minded individuals.</p>
                <Link to='/meetups'><button className="square-btn mb-4">Go to Events</button></Link>
            </div>
            <img src="https://i.imgur.com/VPTqo9d.png" alt="" className="wide100 mb-5" />

            {/* THE CAROUSEL */}
            {/* <div className="mt-3 black-back pad2-nobottom">
                <div className="carousel-div">
                    <Carousel />
                </div>
            </div>
            <img className="wide100" src="https://i.imgur.com/WkqrnQh.png" /> */}

            <div className="empty-3"></div>
            <div className="empty-3"></div>


            <div className="one-two-four flx-r wide90 m-auto">
                <div id="phone-head" className="respond-c2r1 flx-1 flx-c pad16 d-none">
                    <h1 className="m0 respond-t">Don't forget your mind!</h1>
                    <p className="respond-d m0 mt-2 roboto x-large">We all know exercise is important but what about our brains! Studies say <strong>22%</strong> of Americans go to the gym and only <strong>14%</strong> meditate. <strong>That means 86% are missing these benefits of mindfulness...</strong></p>
                </div>
                <div className="c1 flx-1 pad16">
                    <div className="v-helper"></div>
                    <div className="otf-img-div inline v-align">
                        <img src={img} alt="" className="otf-img" />
                        {/* <div className="img-ph seven">img-ph</div> */}
                    </div>
                </div>
                <div className="c2 flx-c flx-3 roboto">
                    <div id="desktop-head" className="c2r1 flx-1 flx-c pad16">
                        <h1 className="m0">Don't forget your mind!</h1>
                        <p className="m0 mt-2 roboto x-large">We all know exercise is important but what about our brains! Studies say <strong>22%</strong> of Americans go to the gym and only <strong>14%</strong> meditate. <strong>That means 86% are missing out on these benefits of mindfulness...</strong></p>
                    </div>
                    <div className="c2r2 flx-1 flx-r">
                        <div id="one" onClick={() => updateImg({ img_url: "https://i.imgur.com/WXW5tkC.png", id: "one" })} className="c2r2c1 flx-1 flx-c pad16 hover-pressed">
                            <h2 className="m0">Stress Handling</h2>
                            <p className="m0 mt-2 roboto">Mindfulness practice helps you breathe through your thoughts and emotions, and practice accepting and navigating them more constructively, instead of letting them overwhelm you.</p>
                        </div>
                        <div id="two" onClick={() => updateImg({ img_url: "https://i.imgur.com/aPP84xm.png", id: "two" })} className="c2r2c2 flx-1 flx-c pad16 hover">
                            <h2 className="m0">Cognitive thinking</h2>
                            <p className="m0 mt-2 roboto">Developing mental clarity helps you become a better problem solver. Breaking down objectives into steps helps you organize a clearer path to solutions.</p>
                        </div>
                    </div>
                    <div className="c2r3 flx-1 flx-r">
                        <div id="three" onClick={() => updateImg({ img_url: "https://i.imgur.com/ERhZyLj.png", id: "three" })} className="c2r3c1 flx-1 flx-c pad16 hover">
                            <h2 className="m0">Socializing</h2>
                            <p className="m0 mt-2 roboto">We all feel socially awkward sometimes. Learning to accept these feelings instead of dwelling on them is the fastest route to not having to feel awkward in the first place.</p>
                        </div>
                        <div id="four" onClick={() => updateImg({ img_url: "https://i.imgur.com/Q3rGzAD.png", id: "four" })} className="c2r3c2 flx-1 flx-c pad16 hover">
                            <h2 className="m0">Enjoying Life</h2>
                            <p className="m0 mt-2 roboto">For the high achievers and over-thinkers, you have to learn how to relax and appreciate the beauty of life. Mindfulness teaches us to accept and truly feel our emotions.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="empty-6"></div>


            <h1 className="center-text mt-10 roboto">Train your brain in 3 simple steps...</h1>
            <div className="values flx-r flx-wrap just-se">

                <div className="value flx-c my-5 mx-2">
                    <div className="v-img-div flx-r">
                        <div className="test mr-2">
                            <img className="v-img" src="https://i.imgur.com/TGvL5OA.png" />
                        </div>
                        <div className="test2 rel mx-2">
                            <img src="https://i.imgur.com/9OlLYWQ.png" alt="" className="v-img-title" />
                        </div>
                    </div>
                    <p className="v-text m0 large roboto">Find your inner <strong>peace</strong> and develop your practice of meditation with like-minded people</p>
                </div>
                <div className="value flx-c my-5 mx-2">
                    <div className="v-img-div flx-r">
                        <div className="test mr-2">
                            <img className="v-img" src="https://i.imgur.com/L2lwdvT.png" />
                        </div>
                        <div className="test2 rel mx-2">
                            <img src="https://i.imgur.com/36SxPwk.png" alt="" className="v-img-title" />
                        </div>
                    </div>
                    <p className="v-text m0 large roboto">Become more <strong>conscious</strong> of your goals and aspirations and learn about what you truly want for yourself</p>
                </div>

                <div className="value flx-c my-5 mx-2">
                    <div className="v-img-div flx-r">
                        <div className="test mr-2">
                            <img className="v-img" src="https://i.imgur.com/f4gfQvQ.png" />
                        </div>
                        <div className="test2 rel mx-2">
                            <img src="https://i.imgur.com/0N0NazO.png" alt="" className="v-img-title" />
                        </div>
                    </div>
                    <p className="v-text m0 large roboto">Make friends and <strong>bond</strong> with people who, just like you, want to develop their practice and learn about themselves</p>
                </div>


            </div>



            <div className="empty-6"></div>

            
            <img src="https://i.imgur.com/W1j3EhQ.png" alt="" className="nude-in" />
            
            <div className="bg-misfits">

                <h1 id="h1-respond" className="h1-respond center-text roboto mb-5">We love your support!</h1>
                <div className="">
                    <Carousel2 />
                </div>
                <div className="empty-3"></div>
            </div>
            <img src="https://i.imgur.com/Gdeh2y2.png" alt="" className="nude-out" />
            
            {/* <div className="page-container white-bg">

                <div className="boxes respond-c flx-r flx-wrap">

                    <div className="left flx-1 pad28">
                        <div className="container pad8">
                            <h2 className="title center-text">Schedule</h2>
                        </div>
                    </div>

                    <div className="right flx-1 pad28">
                        <div className="container pad8">
                            <h2 className="title center-text">Stand outs</h2>
                        </div>
                    </div>

                </div>
            </div> */}



            <div className="empty-6"></div>



            <h1 className="center-text">Want weekly updates?</h1>
            <div className="subscribe-box flx-r m-auto">
                <div className="subscribe-img flx-1">
                    <span className="v-helper"></span>
                    <img className="sub-img center v-align inline-block" src="https://i.imgur.com/wQ3lYHk.png" />
                </div>
                <div className="subscribe-text flx-2 flx-c pad28">
                    <p className="m0 mb-2">To get a heads up on our next session, and when new exciting events are added to the calendar...</p>
                    <p className="m0 large"><strong>We promise we won't spam you...</strong></p>
                    <input type="text" className="form-input2" placeholder="email@example.com" />
                    <Link to='/under-construction'><button className="square-btn center mt-4">Subscribe</button></Link>
                </div>
            </div>

        </>
    )
}
export default Home;