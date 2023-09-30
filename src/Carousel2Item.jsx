import { Link } from "react-router-dom"

export const Carousel2Item = ({ item }) => {

    return (
        <>
            <div className="carousel2-item">
                <div className="flx-r just-sb flx-wrap wide100">
                    <div className="flx-c carousel2-text">
                        <div className="indicators flx-1"> &nbsp; </div>
                        <h1 className="carousel2-title flx-2 m0">{item.title}</h1>
                        <p className="flx-2 roboto">{item.description}</p>
                        <Link to={item.link}><button className="respond-center square-btn100">Learn More</button></Link>
                    </div>
                    <div className="carousel-box">
                        <img className="carousel2-img" src={item.img} />
                    </div>
                </div>
            </div>
        </>
    )
}