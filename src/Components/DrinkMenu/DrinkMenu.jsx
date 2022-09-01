import React, { createContext, useContext, useEffect, useState } from 'react';
import { productsContext } from '../../context/ProductContexProvider';
import Home from '../Nav/Home';
import './DrinkMenu.css';
import plus from '../Nav/icons/plus.png';
import { useNavigate, Link } from 'react-router-dom';
import { recommendContext } from '../../context/RecommendContextProvider';
import { useSearchParams } from "react-router-dom";
import Filter from './Filter/Filter.jsx';
import { authContext } from '../../context/AuthContext';
import { Pagination } from '@mui/material';
import { cartContext } from '../../context/CartContextProvider';

const DrinkMenu = () => {

    const navigate = useNavigate();

    const { getProducts, productsArr, pageTotalCount } = useContext(productsContext);

    const [ searchParams, setSearchParams] = useSearchParams();

    const { addRecommends } = useContext(recommendContext);

    const [ type, setType ] = useState(searchParams.get("category") || "coffee");
    const [ page, setPage ] = useState(1);

    const {user} = useContext(authContext);

    const [ activeBtn, setActiveBtn] = useState("none")

    const { addProductCart } = useContext(cartContext);

    const admin = () => {
        if(user.email === "admin@mail.ru"){
            setActiveBtn("block")
        }else{
            return;
        }
    }

    const handleBtnType = (item)=>{
        setType(`${item}`)
    }

    const paramsWithType = () => {
        return {
            category: type,
            q: searchParams.get("q") || "",
            _page: page,
            _limit: 5,
            };
        };

    const paramsNoType = () => {
        return {
            q: searchParams.get("q") || "",
            _page: page,
            _limit: 5,
            };
        };

    useEffect(() => {
        getProducts();
            if (type === "all") {
                setSearchParams(paramsNoType());
            } else {
                setSearchParams(paramsWithType());
            }
            admin();
          }, [searchParams, type, page]);
        

    useEffect(() => {   
        if (searchParams.get("category")) {
            setSearchParams(paramsWithType());
        } else {
            setSearchParams(paramsNoType());
        }
    }, []);

    useEffect(()=>{
        admin()
        getProducts()
    }, [])

    return (
        <>  
            <Home/>
            <div className='Drink-menu'>
                
                <Filter handleClick={handleBtnType} />
                <div className='drink-menu-products'>
                    {productsArr.map((item)=>(
                        <div key={item.id} className='drink-menu-one'>
                            <div className='drink-left'>
                                <img className='drink-menu-img' src={item.image} alt="img" />
                                <div className='drink-menu-text'>
                                    <Link to={`/oneproduct/${item.id}`} className='drink-menu-title'>{item.title}</Link>
                                    <Link to={`/oneproduct/${item.id}`} className='drink-menu-sub'>{item.description}</Link>
                                    <Link to={`/oneproduct/${item.id}`} className='drink-menu-price'>{item.price}сом</Link>
                                </div>
                            </div>
                            <div style={{display:'flex', columnGap:'8px'}}>
                                <button onClick={()=>addRecommends(item)} style={{ display: activeBtn, width:'45px', height:'45px', border:'1px solid #834d1e', borderRadius:'10px', fontSize:'40px', paddingBottom:"20px", background:'none'}} className='drink-menu-btn-add-rec'>
                                    +
                                </button>
                                <button onClick={()=>addProductCart(item)} className='drink-menu-btn-add-cart'>
                                    <img width={25} height={25} src={plus} alt="" />
                                </button>
                            </div>
                        </div>
                    ))}
                    <Pagination style={{marginTop:'60px'}} count={+pageTotalCount} page={+page} onChange={(e, pageVal)=>{setPage(pageVal)}} variant="outlined" />
                </div>
            </div>
        </>
    );
};

export default DrinkMenu;