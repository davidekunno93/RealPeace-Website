
const Meetups = () => {

    return (
        <>
        <div className="page-container">
        <div className="empty-2"></div>
            {/* <h1 className="center-text">Meetup Events</h1> */}
            <img src="https://i.imgur.com/7FloCu0.png" alt="" className="page-title" />
            <div className="block1 pad28">
                <div className="respond-c container flx-r">
                    <div className="img-con">
                        <img className="mu-img center" src="https://i.imgur.com/lSmJ1ya.jpg" />
                    </div>
                    <div className="mu-text flx-1 center-text flx-c">
                        <h2 className="title">Meditation Mondays</h2>
                        <p className="flx-3 large">Every Monday we organize a blissfull meditation session directed by Derek Ellison. We start with 20 minutes of focused meditation to clear your mind, and we end with 30 minutes of visualization to help us make mindful strides towards the most successful version of our lives.</p>
                        <div className="button-row flx-1">
                            <button className="square-btn">Join a session</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block2 pad28">
                <div className="respond-c container flx-r">
                    <div className="img-con">
                    <img className="mu-img center" src="/images/headspace-walking.svg" />
                    </div>
                    <div className="mu-text flx-1 center-text flx-c">
                        <h2 className="title">Walking Meditations</h2>
                        <p className="flx-3 large">Walking meditations adds a surprisingly freeing context to the practice of meditation. Moving while meditating adds exercise to the activity and natural scenary that creates a unique opportunity for meditators to practice and develop mindful appreciation during these walks. It's not all mindful meditation though! We have fun, we chat, we share information and have a great time socializing within a group of like-minded individuals.</p>
                        <div className="button-row flx-1">
                            <button className="square-btn">Join a session</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block3 pad28">
                <div className="respond-c container flx-r">
                    <div className="img-con">
                    <img className="mu-img center" src="/images/party-image.jpg" />
                    </div>
                    <div className="mu-text flx-1 center-text flx-c">
                        <h2 className="title">Friday Socials</h2>
                        <p className="flx-3">Description of Friday Socials goes here... </p>
                        <div className="button-row flx-1">
                            <button className="square-btn">Join a session</button>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </>
    )
}
export default Meetups;