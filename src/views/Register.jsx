import { Link, useNavigate } from "react-router-dom"


const Register = () => {
    const navigate = useNavigate()
    const handleSubmit = () => {

    }

    const toLoginPage = () => {
        navigate('/login')
    }

    return (
        <>
            <div className="register-box pad mt-10 wide50-respond center">
            <div className="r-box container center">
            <form method="POST" onSubmit={handleSubmit}>
            <h2 className="center-text">REGISTER</h2>
                <div className='reg-div flx-c bg-gains see-thru'>
                    <div className='flx-c pad16'>
                    <label htmlFor="nm" className="form-label m0 left-text">&nbsp;<strong>Name</strong></label>
                    <input name="name" className='form-input2' type="text" placeholder="Enter your name..." />
                    <label htmlFor="un" className="form-label m0 left-text">&nbsp;<strong>Username</strong></label>
                    <input name="username" className='form-input2' type="text" placeholder="Create a Username" />
                    <div className="my-2">
                        <input value="male" name="sex" id="male" className='radio mx-2' type="radio" />
                        <label htmlFor="male">Male</label>
                        <input value="female" name="sex" id="female" className='radio mx-2' type="radio" />
                        <label htmlFor="female">Female</label>
                        <input value="noAnswer" name="sex" id="noanswer" className='radio mx-2' type="radio" />
                        <label htmlFor="noanswer">No Answer</label>
                    </div>
                    <label htmlFor="em" className="form-label m0 left-text">&nbsp;<strong>Enter your email</strong></label>
                    <input name="email" className='form-input2' type="email" placeholder="johndoe@example.com" />
                    <label htmlFor="pw" className="form-label m0 left-text">&nbsp;<strong>Create your password</strong></label>
                    <input name="password" className='form-input2' id="reg-pw" type="password" placeholder="Password" />
                    <input name="confirmPassword" className='form-input2 mt-1' id="reg-cpw" type="password" placeholder="Confirm Password" />
                    <div>
                    <input id="show-password" type="checkbox" />
                    <label id="sp-label" htmlFor="show-password color-black">Show Password</label>
                    </div>
                    <div className='pad28'>
                        <button className='square-btn center'>REGISTER</button>
                        <p className='center-text mb-0 uline'><Link className="black-text mt-3" to="/login">Already have an account?</Link></p>
                        <button type="button" onClick={() => toLoginPage()} className='white-btn center square-btn2'>Sign In</button>
                    </div>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </>
    )
}
export default Register;