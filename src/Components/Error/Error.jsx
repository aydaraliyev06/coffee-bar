import React from 'react';
import Home from '../Nav/Home';
import './Error.css';

const Error = () => {
    return (
        <>
            <Home/>
            <div className='Error'>
                <h3>404</h3>
                <p>ERROR</p>
                <img width={300} src="https://i.gifer.com/XOsX.gif" alt="" />
            </div>
        </>
    );
};

export default Error;