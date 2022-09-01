import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productsContext } from '../../context/ProductContexProvider';
import Home from '../Nav/Home';
import './ProductDetails.css';
import close from './icons/close.png';
import like from './icons/like.png';
import nolike from './icons/nolike.png';
import deleteBtn from './icons/delete.png';
import edit from './icons/edit.png';
import { authContext } from '../../context/AuthContext';
import { cartContext } from '../../context/CartContextProvider';

const ProductDetails = () => {

    const { getOneProduct, productDetails, deleteProduct } = useContext(productsContext);

    const { user } = useContext(authContext);

    const [ amount, setAmount ] = useState(1);

    const [ activeBtn, setActiveBtn] = useState("none");

    const { addProductCart } = useContext(cartContext);

    const admin = () => {
        if(user.email === "admin@mail.ru"){
            setActiveBtn("block")
        }else{
            return;
        }
    }

    let {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getOneProduct(id)
        admin();
    }, [id])

    const handleDelete = () =>{
        deleteProduct(id);
        navigate('/menu')
    }

    return (
        <>
            <Home/>
            <div className="product-details-box">
            { productDetails === null ? null : (
                <div style={{background:`url(${productDetails.image}`}} className='product-details'>
                    <div className='product-details-back'>
                        <div className='product-details-btns'>
                            <button onClick={()=>navigate('/menu')} className="product-details-btn">
                                <img width={35} className='img-close' src={close} alt="close" />
                            </button>
                            <div className='product-details-menu'>
                                <button style={{display: activeBtn}} onClick={()=>navigate(`/edit/${id}`)} className={ "product-details-btn"}>
                                    <img width={40} src={edit} alt="edit" />
                                </button>
                                <button style={{display: activeBtn}} onClick={()=>handleDelete()} className="product-details-btn">
                                    <img width={39} src={deleteBtn} alt="delete" />
                                </button>
                                <button className="product-details-btn">
                                    <img width={40} src={like} alt="like" />
                                </button>
                            </div>
                        </div>
                        <div className='product-details-bottom'>
                            <h1 className='product-details-title'>{productDetails.title}</h1>
                            <p className='product-details-sub'>{productDetails.description}</p>
                            <p className='product-details-price'>{productDetails.price}сом</p>
                            <div className='product-details-bottom-btn'>
                                <div className='product-details-amount'>
                                    <button onClick={amount > 1 ? ()=>setAmount(amount - 1) : null} className="product-details-amount-btn">-</button>
                                    <p className='product-details-amount-p'>{amount}</p>
                                    <button onClick={()=>setAmount(amount + 1)} className="product-details-amount-btn">+</button>
                                </div>
                                <button onClick={()=>navigate('/menu')} className='product-details-btn-buy'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </>
    );
};

export default ProductDetails;