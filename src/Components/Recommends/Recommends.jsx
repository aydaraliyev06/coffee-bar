import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { recommendContext } from '../../context/RecommendContextProvider';
import Home from '../Nav/Home';
import './Recommends.css';

const Recommends = () => {

    const { getRecommends, recommendArr } = useContext(recommendContext);

    useEffect(()=>{
        getRecommends()
    },[])

    return (
        <>
            <Home/>
            <div className='recommend'>
                <div className='drink-menu-products'>
                        {recommendArr === undefined ? null :
                        
                        recommendArr.map((item)=>(
                            <div className='drink-menu-one'>
                                <div className='drink-left'>
                                    <img style={{backgroundSize: 'cover'}} className='drink-menu-img' src={item.image} alt="img" />
                                    <div className='drink-menu-text'>
                                        <Link to={`/oneproduct/${item.id}`} className='drink-menu-title'>{item.title}</Link>
                                        <Link to={`/oneproduct/${item.id}`} className='drink-menu-sub'>{item.description}</Link>
                                        <Link to={`/oneproduct/${item.id}`} className='drink-menu-price'>{item.price}сом</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
        </>
    );
};

export default Recommends;