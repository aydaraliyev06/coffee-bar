import React, { useContext, useState } from 'react';
import { authContext } from '../../context/AuthContext';
import './Authorization.css';
import icon1 from './image/Group30.svg';
import img1 from './image/Rectangle1.png';
import img2 from './image/Rectangle2.png';
import img3 from './image/image.svg';
import { useNavigate } from 'react-router-dom';

const Authorization = () => {

    const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    user,
    } = useContext(authContext);

    const navigate = useNavigate();

    const signIn = () => {
        handleLogin();
        navigate('/home')
    };

    const singUp = () => {
        handleSignUp();
        navigate("/home")
    }

    console.log(emailError, passwordError)

    return (
        <div className='Auth'>
            <div className='back-auth'></div>
            <img className='auth-icon' src={icon1} alt="icon" />   
            <div className='auth-box'>
                <div className='auth-box-btn'>
                    <button
                     onClick={()=>setHasAccount(true)} className={hasAccount ? 'auth-btn-active' : "auth-btn-log"}>Login</button>
                    <button onClick={() => setHasAccount(false)} className={!hasAccount ? 'auth-btn-active' : "auth-btn-sing"}>Sing Up</button>
                </div>
                <div className='auth-box-inp'>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' className='inp-auth' />
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className="inp-auth"/>
                </div>
                <span>{emailError}</span>
                <span>{passwordError}</span>
                { hasAccount ? (
                    <button onClick={signIn} className='btn-auth'>Login</button>
                ) : (
                    <button onClick={singUp} className='btn-auth'>Sing Up</button>
                )
                }
            </div>
            <div style={{ position:'relative', top:'end', width:'100%', display:'flex', justifyContent:'space-between'}}>
                <img src={img1} alt="img1" />
                <img src={img2} alt="img2" />
            </div>
        </div>
    );
};

export default Authorization;