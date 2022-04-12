import { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathName || "/";
    const [createUserWithEmailAndPassword, user, , hookError] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, , hookError2] = useSignInWithGoogle(auth);


    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }

    const handleOnSubmit = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two passwords does not matched');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    useEffect(() => {
        if (user || googleUser) {
            navigate(from, { replace: true });
        }
    }, [user, googleUser, navigate, from]);

    return (
        <div className='form'>
            <div>
                <h2 className='form-title'>Please SignUp</h2>
                <form onSubmit={handleOnSubmit}>
                    <div>
                        <div className="input-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmail} type="email" name="email" id="email" />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePassword} type="password" name="password" id="password" />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input onBlur={handleConfirmPassword} type="password" name="confirm-password" id="confirm-password" />
                        </div>
                        <p className="error">{hookError?.message || hookError2?.message || error}</p>
                        <input className='form-submit' type="submit" value="SignUp" />
                        <p>Already have an account? <Link className="form-link" to="/login">Login</Link></p>
                        <p className='text'>or</p>
                        <div onClick={handleGoogleSignIn} className='google-sign'>
                            <img width={50} src="https://i1.wp.com/www.bane-tech.com/wp-content/uploads/2015/10/G.png" alt="" />
                            <p>Continue With Google</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;