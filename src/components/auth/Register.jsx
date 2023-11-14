import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import auth from '../../firebase';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkSignUpFields() === true) {
            console.log(true)
            signUp(e)
            toLoginPage()
        } else {
            console.log('Invalid Entry')
        }
    }


    const toLoginPage = () => {
        navigate('/login')
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
        // console.log(e.target.value);
    }
    const updatePassword = (e) => {
        setPassword(e.target.value);
        // console.log(e.target.value);
    }
    const updateGender = (e) => {
        setGender(e.target.value)
        // console.log(e.target.value)
    }
    const checkPasswordMatch = () => {
        let confirmPassword = document.getElementById('reg-cpw')
        if (confirmPassword.value === password) {
            // console.log("Password Match!")
            return true
        } else {
            // console.log("Passwords do not match!")
            return false
        }
        console.log("password:", password)
        console.log("cpassword:", confirmPassword.value)
    }
    const passwordValidator = () => {
        // let numbers = ["0","1","2","3","4","5","6","7","8","9"]
        let special_chars = ["@", "#", "$", "!", "%", "&", "-"]
        let hasChars = false;
        let hasNumbers = false;
        let hasSpecialChars = false;
        if (password.length > 7) {
            let code = ''
            for (let i = 0; i < password.length; i++) {
                code = password.charCodeAt(i)
                if (code > 47 && code < 58) {
                    hasNumbers = true;
                } else if ((code > 64 && code < 91) || (code > 96 && code < 123)) {
                    hasChars = true
                } else if (special_chars.includes(password[i])) {
                    hasSpecialChars = true;
                }
            }
            if (hasNumbers && hasChars && hasSpecialChars) {
                console.log("***Password is valid***")
                return true
            } else {
                if (!hasChars) {
                    console.log("{Invalid Password: Passwords need at least one alpha character}")
                }
                if (!hasNumbers) {
                    console.log("{Invalid Password: Passwords need at least one numeric character}")
                }
                if (!hasSpecialChars) {
                    console.log("{Invalid Password: Passwords need at least one special character}")
                }
                // return "invalidPassword"
            }
        } else {
            console.log('{Invalid Password: Password must be 8 or more characters}')
            return "invalidPassword"
        }

        console.log("characters:", hasChars)
        console.log("numbers:", hasNumbers)
        console.log("special chars:", hasSpecialChars)
        return false
    }
    const checkSignUpFields = () => {
        // make sure name, username, email, gender and password all have values
        // make sure password is at least 8 characters, has a special char and a numeric char in it
        // check password match
        let check_complete = true
        let name = document.getElementById('name')
        let username = document.getElementById('username')
        // let gender = document.getElementById('gender')
        let email = document.getElementById('email')
        console.log(name.value)
        console.log(username.value)
        console.log(email.value)
        if (name.value === '' || username.value === '' || email.value === '') {
            check_complete = false
            console.log("{some values missing}")
            return 'valuesMissing'
        } else {
            if (gender) {
                if (password) {
                    if (checkPasswordMatch() === false) {
                        check_complete = false
                        console.log('{Passwords not matched}')
                        return "passwordNotMatching"
                    } else {
                        console.log("*Ready to validate Password*")
                        return passwordValidator()
                        // if (passwordValidator() === true) {
                        //     return true
                        // } else {
                        //     return false
                        // }
                    }
                } else {
                    check_complete = false
                    console.log('{No password entered}')
                    return "passwordMissing"
                }
            } else {
                console.log("{Please select your gender}")
                return "genderMissing"
            }
        }
    }

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            // .then((userCredentials) => {
            //     console.log(userCredentials)
            // })
            .then((userCredentials) => {
                handleSignUp(userCredentials);
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const handleSignUp = (userCredentials) => {
        console.log(userCredentials)
        let un = document.getElementById('name')
        console.log(un.value)
        updateProfile(auth.currentUser, {
            displayName: "test"
        })
        console.log(userCredentials)
    }
    
    // window.addEventListener('click', function() {
    //     console.log("something")
    // })
    // }



    const showPassword = () => {
        let password = document.getElementById("reg-pw")
        let confirm_password = document.getElementById("reg-cpw")
        let checkbox = document.getElementById('show-password')
        if (checkbox.checked) {

            password.setAttribute("type", "text")
            confirm_password.setAttribute("type", "text")

        } else if (!checkbox.checked) {
            // console.log('checkbox is unchecked')
            password.setAttribute("type", "password")
            confirm_password.setAttribute("type", "password")
        }

    }

    return (
        <>
            <div className="register-box pad mt-10 wide50-respond center">
                <div className="r-box container center">
                    {/* <form method="POST" onSubmit={handleSubmit}> */}
                    <form method="POST">
                        <h2 className="center-text">REGISTER</h2>
                        <div className='reg-div flx-c bg-gains see-thru'>
                            <div className='flx-c pad16'>
                                <label htmlFor="name" className="form-label m0 left-text color-dark">&nbsp;<strong>Name</strong></label>
                                <input id="name" name="name" className='form-input2' type="text" placeholder="Enter your name..." />
                                <label htmlFor="username" className="form-label m0 left-text color-dark">&nbsp;<strong>Username</strong></label>
                                <input id="username" name="username" className='form-input2' type="text" placeholder="Create a Username" />
                                <div className="my-2">
                                    <input onChange={(e) => updateGender(e)} value="male" name="sex" id="male" className='radio mx-2' type="radio" />
                                    <label htmlFor="male" className="color-black">Male</label>
                                    <input onChange={(e) => updateGender(e)} value="female" name="sex" id="female" className='radio mx-2' type="radio" />
                                    <label htmlFor="female" className="color-black">Female</label>
                                    <input onChange={(e) => updateGender(e)} value="noAnswer" name="sex" id="no-answer" className='radio mx-2' type="radio" />
                                    <label htmlFor="no-answer" className="color-black">No Answer</label>
                                </div>
                                <label htmlFor="em" className="form-label m0 left-text color-dark">&nbsp;<strong>Enter your email</strong></label>
                                <input id='email' onChange={(e) => updateEmail(e)} name="email" className='form-input2' type="email" placeholder="johndoe@example.com" />
                                <label htmlFor="pw" className="form-label m0 left-text color-dark">&nbsp;<strong>Create your password</strong></label>
                                <input onChange={(e) => updatePassword(e)} name="password" className='form-input2' id="reg-pw" type="password" placeholder="Password" />
                                <input name="confirmPassword" className='form-input2 mt-1' id="reg-cpw" type="password" placeholder="Confirm Password" />
                                <div>
                                    <input onClick={() => showPassword()} id="show-password" type="checkbox" />
                                    <label id="sp-label" htmlFor="show-password" className="color-black">Show Password</label>
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