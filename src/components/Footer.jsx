import { Link } from "react-router-dom";
import { PenFooter } from "./PenFooter";

const Footer = () => {

    return (
        <>
            <div className="bottom-space">

            </div>
            {/* <div className="bg-transition"></div> */}
            {/* <img src="https://i.imgur.com/qHysoKS.png" alt="" className="bg-transition" /> */}
            <img src="https://i.imgur.com/pHJIiE1.png" alt="" className="bg-transition" />
            <div className="footer roboto">
                <div className="footer-inner wide90 flx-r m-auto">
                    <div className="c1 flx-2 flx-c pl-4">
                        {/* <p className="xx-large mb-5"><strong>Real Peace</strong></p> */}
                        <img src="https://i.imgur.com/svPNDUp.png" alt="" className="footer-title1" />
                        <div className="respond-c1r2 flx-r">
                            <div className="c1r2c1 flx-1">
                                <Link className="white-link"><p className=" white-text">About Us</p></Link>
                                <Link className="white-link"><p className=" white-text">Contact Us</p></Link>
                            </div>
                            <div className="c1r2c2 flx-2">
                                <Link className="white-link"><p className=" white-text">Donations</p></Link>
                                <Link className="white-link"><p className=" white-text">Merchandise</p></Link>
                                <Link className="white-link"><p className=" white-text">Podcast</p></Link>
                            </div>
                        </div>
                    </div>
                    <div className="c2 flx-1">
                        {/* <p className="xx-large roboto mb-5"><strong>Social</strong></p> */}
                        <img src="https://i.imgur.com/uzA0r26.png" alt="" className="footer-title2" />
                        <div className="socials flx-c just-ce">
                        <Link className="white-link-wimg"><div className="social-link">
                                <img src="https://i.imgur.com/F8VYDeB.png" alt="" className="social-media-icon v-align" />
                                <p className="ml-2 inline white-text">Instagram</p>
                            </div></Link>
                            <Link className="white-link-wimg"><div className="social-link">
                                <img src="https://i.imgur.com/OuXn2wd.png" alt="" className="social-media-icon v-align" />
                                <p className="ml-2 inline white-text">Facebook</p>
                            </div></Link>
                            <Link className="white-link-wimg"><div className="social-link">
                                <img src="https://i.imgur.com/vd3aTWR.png" alt="" className="social-media-icon v-align" />
                                <p className="ml-2 inline white-text">YouTube</p>
                            </div></Link>
                        </div>
                    </div>
                </div>
                <div className="empty-2"></div>
            </div>

        </>
    )
}
export default Footer;