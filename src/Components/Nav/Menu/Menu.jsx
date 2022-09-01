import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import Profile from './image/user.png';
import Home from './image/home.png';
import Coffee from './image/coffee-cup.png';
import Heart from './image/heart.png';

const Menu = ({active, setActive}) => {
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={()=>setActive(false)}>
            <div className='blur'>
                <div className='menu_content' onClick={e=>e.stopPropagation()}>
                    <div className='close-menu-box'>
                        <div className='close-menu' onClick={()=>setActive(false)}>
                            <div className='line-close1'/>
                            <div className='line-close2'/>
                        </div>
                    </div>
                    <div className='menu_header'>Menu</div>
                    <div className='menu-box'>
                        <Link to='/profile' className="menu_link">
                            <img src={Profile} alt="Profile" />
                            Profile
                        </Link>
                        <Link to='/home' className="menu_link">
                            <img src={Home} alt="Home" />
                            Home
                        </Link>
                        <Link to='/menu' className="menu_link">
                            <img src={Coffee} alt="coffee" />
                            Drink Menu
                        </Link>
                        <Link to='/' className="menu_link">
                            <img src={Heart} alt="heart" />
                            Favorit
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;