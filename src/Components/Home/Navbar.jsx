import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Navbar.css';
import img1 from './right-arrow.png';
import Home from '../Nav/Home';
import { recommendContext } from '../../context/RecommendContextProvider';

const Navbar = () => {

    const { getRecommends, recommendArr } = useContext(recommendContext);

    const {id} = useParams();

    useEffect(()=>{
        getRecommends()
    }, [])

    return (
        <>
        <Home/>
            <div className='navbar'>
                <div className='navbar-box'>
                    <div className='navbar-box-text'>
                        <h5 className='navbar-box-h5'>Best seller of the week</h5>
                        <h1 className='navbar-box-h1'>Iced Coffee<br/>Sweet Heaven</h1>
                        <Link to='/oneproduct/3' className="navbar-box-text-link">
                            More info
                            <img src={img1} alt="right" />
                        </Link>
                    </div>
                    <img className='img-navbar' src="https://pantryandlarder.com/wp-content/uploads/2021/02/sweeten-iced-coffee-recipe-feature.png" alt="" />
                </div>
                <div className='products'>
                    <div className='text-recommend'>
                        <h1 className='recommend-h1'>This week's recommendations</h1>
                        <Link className='recommend-a' style={{textDecoration:'none'}} to='/recommends'>See all</Link>
                    </div>
                    <div className='product-box'>
                        {recommendArr === undefined ? null : 

                            recommendArr.map((item)=>(
                                <div style={{background: `url(${item.image})`, backgroundSize: 'cover'}} key={item.id} className='products-one'>
                                    <div className='product-one-back'>
                                        <Link to={`/oneproduct/${item.id}`} className='product-title'>{item.title}</Link>
                                        <Link to={`/oneproduct/${item.id}`} className='product-price'>{item.price} сом</Link>
                                    </div>
                                </div>
                    ))}
                    </div>
                </div>
                <div className='inshop'>
                    <h1 className='inshop-title'>What's in the shop?</h1>
                    <div className='inshop-card'>
                        <div className='inshop-card-back'>
                            <h4 className='inshop-card-back-title'>Introducing our<br/>new lemonade<br/>menu</h4>
                            <p className='inshop-card-back-sub'>Try our refteshing lemonade, strawberry<br/>lemonade, and orange lemonade</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;