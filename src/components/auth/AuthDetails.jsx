import { onAuthStateChanged, signOut } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import auth from "../../firebase";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";



const AuthDetails = () => {
    const { authUser, setAuthUser } = useContext(DataContext);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        })
    }, [])

    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("Sign Out successful")
            })
            .catch((error => console.log(error)))
    }
    const showUserDetails = () => {
        console.log(authUser)
    }

    return (
        <>{authUser ? <div onClick={() => showUserDetails()}>`Hi {authUser.email}` <button onClick={() => userSignOut()}>Logout</button></div>
            :
            <div className="narrow-invisible rightnav flx-r just-se black-text">
                <Link onClick={() => closeNavBar()} to="/login" className="black-link nav-btn mt-2h small"><button className="mx-2 right-btn">LOGIN</button></Link>
                <Link onClick={() => closeNavBar()} to="/register" className="black-link nav-btn small"><button className="mx-2 inline v-align mt-2h right-btn"><p className="m0 v-align inline mr-2">SIGN UP</p><img className="v-align signin-arrow-img" src="https://i.imgur.com/uYb4KCt.png" /></button></Link>
            </div>
            
        }</>
    )
}
export default AuthDetails;