import React from 'react';
import './Face.css';
import img1 from '../Auth/image/Group30.svg';
import { useNavigate } from 'react-router-dom';

const Face = () => {

    const navigate = useNavigate()

    return (
        <div className='face'>
            <div onClick={()=>navigate('/auth')} className='face-white'>
                <img src={img1} alt="img" />
            </div>
        </div>
    );
};

export default Face;