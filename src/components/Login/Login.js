import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [signInWithEmailAndPassword, user, , hookError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, , hookError2] = useSignInWithGoogle(auth);

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleOnSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
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
                <h2 className='form-title'>Please Login</h2>
                <form onSubmit={handleOnSubmit}>
                    <div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmail} type="email" name="email" id="email" />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePassword} type="password" name="password" id="password" />
                        </div>
                        <p className='error'>{hookError?.message || hookError2?.message}</p>
                        <input className='form-submit' type="submit" value="Login" />
                        <p>New to this site? <Link className='form-link' to="/signup">SignUp</Link></p>
                        <p className='text'>or</p>
                        <div onClick={handleGoogleSignIn} className='google-sign'>
                            <img width={50} src="https://i1.wp.com/www.bane-tech.com/wp-content/uploads/2015/10/G.png" alt="" />
                            <p>Continue With Google</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;