import React, { useContext, useState } from 'react';
import { authContext } from '../../context/AuthContext';
import './Home.css';
import Menu from './Menu/Menu';
import plus from './icons/plus.png';
import cart from './icons/cart.png';
import { Link } from 'react-router-dom';

const Home = () => {

    const { user } = useContext(authContext);

    const [ burgerMenu, setBurgerMenu ] = useState(false)

    return (
        <div className='home'>
            <div className='home-top'>
                <h3 className='home-top-title'>Good day, {user.email}</h3>
                <div className='home-left'>
                    {user.email === "admin@mail.ru" ? 
                        (<Link to='/add' className="home-btn-add">
                            <img width={35} src={plus} alt="add" />
                        </Link>) : null}
                    <Link to='/cart' className="home-btn-cart">
                        <img width={35} src={cart} alt="cart" />
                    </Link>
                    <button onClick={()=>setBurgerMenu(!burgerMenu)} className='burger-menu'>
                        <div style={{width:'40px', height:'3px', background:'#FCF2D9', borderRadius:'30px'}} className="line-bureger-menu"></div>
                        <div style={{width:'40px', height:'3px', background:'#FCF2D9', borderRadius:'30px'}} className="line-bureger-menu"></div>
                        <div style={{width:'40px', height:'3px', background:'#FCF2D9', borderRadius:'30px'}} className="line-bureger-menu"></div>
                        <Menu active={burgerMenu} setActive={setBurgerMenu} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;