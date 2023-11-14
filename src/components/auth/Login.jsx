import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataProvider";

const Login = () => {
    const { authUser, setAuthUser } = useContext(DataContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const toRegisterPage = () => {
        navigate('/register')
    }
    const showPassword = () => {
        let pw = document.getElementById('password')
        let checkbox = document.getElementById('show-password')
        if (checkbox.checked) {
            pw.setAttribute('type', 'text')
            // console.log("checked")
        } else if (!checkbox.checked) {
            pw.setAttribute('type', 'password')
        }
    }
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            handleSignIn(userCredential)
        }).catch((error) => {
            console.log(error);
        })
    }
    const handleSignIn = (userCredentials) => {
        console.log(userCredentials)
        setAuthUser(userCredentials)
        navigate("/")
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
        // console.log(e.target.value);
    }
    const updatePassword = (e) => {
        setPassword(e.target.value);
        // console.log(e.target.value);
    }
    const testBtn = () => {
        updateProfile(auth.currentUser, {
            displayName: "test"
        })
    }

    return (
        <>
        <div className="login-box mt-5 wide50-respond center">
            <div className="l-box container center mt-5">
            {/* <form method="POST" onSubmit={signIn}> */}
            <form method="POST">
            <h2 className="center-text">LOGIN</h2>
                    <div className='flx-c pad16'>
                    <label htmlFor="un" className="form-label m0 left-text color-dark">&nbsp;<strong>Username:</strong></label>
                    <input id="email" onChange={(e) => updateEmail(e)} name="username_email" className='form-input2' type="text" placeholder="Email or Username" />
                    <label htmlFor="pw" className="form-label m0 left-text color-dark">&nbsp;<strong>Password:</strong></label>
                    
                    <input onChange={(e) => updatePassword(e)} name="password" className='form-input2' id="password" type="password" placeholder="Password" />
                    <div>
                    <input id="show-password" type="checkbox" onClick={() => showPassword()} />
                    <label id="sp-label" htmlFor="show-password" className="color-black">Show Password</label>
                    </div>
                    <div className='pad28'>
                        <button className='square-btn center'>LOGIN</button>
                        <p className='center-text mb-0 uline'><Link className="black-text mt-3" to="/register">Don't have an account?</Link></p>
                        <button type="button" className='center square-btn2' onClick={toRegisterPage}>Create an account</button>
                    </div>
                    </div>
                    </form>
                    </div>
                    </div>
        </>
    )
}
export default Login;