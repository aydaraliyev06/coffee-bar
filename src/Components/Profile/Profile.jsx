import React, { useContext } from 'react';
import { authContext } from '../../context/AuthContext';
import Home from '../Nav/Home';
import './Profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const {handleLogout} = useContext(authContext);

    const navigate = useNavigate();

    const LogOut = () => {
        handleLogout();
        navigate('/')
    }

    return (
        <>
            <Home/>
            <div className='profile'>
                <div className='log-out'>
                    <h3>Account Exit</h3>
                    <button onClick={()=>LogOut()} className='Acc-logout'>Log Out</button>
                </div>
            </div>
        </>
    );
};

export default Profile;