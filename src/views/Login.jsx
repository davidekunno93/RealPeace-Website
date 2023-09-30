import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()

    const toRegisterPage = () => {
        navigate('/register')
    }
    const showPassword = () => {

    }
    const loginSubmit = () => {

    }

    return (
        <>
        <div className="login-box mt-5 wide50-respond center">
            <div className="l-box container center mt-5">
            <form method="POST" onSubmit={loginSubmit}>
            <h2 className="center-text">LOGIN</h2>
                    <div className='flx-c pad16'>
                    <label htmlFor="un" className="form-label m0 left-text">&nbsp;<strong>Username:</strong></label>
                    <input name="username_email" className='form-input2' type="text" placeholder="Email or Username" />
                    <label htmlFor="pw" className="form-label m0 left-text">&nbsp;<strong>Password:</strong></label>
                    
                    <input name="password" className='form-input2' id="login-pw" type="password" placeholder="Password" />
                    <div>
                    <input id="show-password" type="checkbox" onClick={() => showPassword()} />
                    <label id="sp-label" htmlFor="show-password">Show Password</label>
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