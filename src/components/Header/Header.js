import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import CustomLink from '../CustomLink/CustomLink';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div className='header'>
            <nav className='nav-bar'>
                <div>
                    <CustomLink to="/">Home</CustomLink>
                </div>
                <div>
                    <CustomLink to="/checkout">Checkout</CustomLink>
                </div>
                <div>
                    <CustomLink to="/about">About</CustomLink>
                </div>
                <div>
                    {
                        user ? <button onClick={handleSignOut}>Sign Out</button> : <CustomLink to="/login">Login</CustomLink>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;