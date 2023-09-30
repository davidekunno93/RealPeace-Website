import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const NavigationBar = () => {
    const [isNarrow, setIsNarrow] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 960) {
                setIsNarrow(true);
            } else {
                setIsNarrow(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [isNarrow]);

    const showNavBar = () => {
        let nav = document.getElementById('responsive-nav')
        nav.classList.toggle('respond')
    }

    const closeNavBar = () => {
        let nav = document.getElementById('responsive-nav')
        nav.classList.remove('respond')
    }


    return (
        <>
            <div className="navbar flx-r flx-wrap gainslite-bg">
                <>
                    <div className="leftnav flx-r flx-wrap black-text">
                        <Link to="/"><img className="rp-icon mt-1 mx-6" src="https://i.imgur.com/95C2yeC.png" /></Link>
                    </div>
                    <div onClick={() => showNavBar()} className="narrow-nav rightnav flx-1 just-se black-text mt-3h right-text mr-4h">
                        <img className="hamburger" src="https://i.imgur.com/S5G7mam.png" />
                    </div>

                    <div id="responsive-nav" className="wide-nav responsive-nav leftnav flx-4 flx-r flx-wrap black-text">
                        <img onClick={() => closeNavBar()} className="close-btn" src="https://i.imgur.com/xoq0OUz.png" />
                        <img className="rn-icon mt-1 mx-2 narrow-visible" src="https://i.imgur.com/95C2yeC.png" />
                        <Link onClick={() => closeNavBar()} to="/" className="mt-3hh black-link small"><button className="wide100-respond left-text-respond nav-btn2">HOME</button></Link>
                        <Link onClick={() => closeNavBar()} to="/meetups" className="mt-3hh black-link small"><button className="wide100-respond left-text-respond nav-btn2">MEETUPS</button></Link>
                        <Link onClick={() => closeNavBar()} to="/under-construction" className="mt-3hh black-link small"><button className="wide100-respond left-text-respond nav-btn2">CALENDAR</button></Link>
                        <Link onClick={() => closeNavBar()} to="/under-construction" className="mt-3hh black-link small"><button className="wide100-respond left-text-respond nav-btn2">DONATIONS</button></Link>
                        <Link onClick={() => closeNavBar()} to="/under-construction" className="mt-3hh black-link small"><button className="wide100-respond left-text-respond nav-btn2">ABOUT US</button></Link>
                        <Link onClick={() => closeNavBar()} to="/login" className="mt-3hh black-link small"><button className="wide100-respond left-text-respond narrow-visible nav-btn2">LOGIN</button></Link>
                        <Link onClick={() => closeNavBar()} to="/register" className="mt-3hh black-link small"><button className="wide100-respond left-text-respond narrow-visible nav-btn2"><p className="m0 v-align inline mr-2">SIGN UP</p><img className="v-align signin-arrow-img" src="https://i.imgur.com/uYb4KCt.png" /></button></Link>
                    </div>
                    <div className="narrow-invisible rightnav flx-r just-se black-text">
                        <Link onClick={() => closeNavBar()} to="/login" className="black-link nav-btn mt-2h small"><button className="mx-2 right-btn">LOGIN</button></Link>
                        <Link onClick={() => closeNavBar()} to="/register" className="black-link nav-btn small"><button className="mx-2 inline v-align mt-2h right-btn"><p className="m0 v-align inline mr-2">SIGN UP</p><img className="v-align signin-arrow-img" src="https://i.imgur.com/uYb4KCt.png" /></button></Link>
                    </div>
                </>
            </div>
        </>
    )
}
export default NavigationBar;