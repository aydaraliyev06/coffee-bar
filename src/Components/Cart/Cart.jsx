import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { cartContext } from "../../context/CartContextProvider";
import { recommendContext } from "../../context/RecommendContextProvider";
import Home from "../Nav/Home";
import "./Cart.css";
import Cards from "react-credit-cards"

const Cart = () => {

    const { cart ,getCarts, changeProductCount, deleteCartProduct } = useContext(cartContext);

    const { getRecommends, recommendArr } = useContext(recommendContext);

    const [ mainBlock, setMainBlock ] = useState(false);

    const navigate = useNavigate()

    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");
    const [focus, setFocus] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
 
    useEffect(() => {
        getCarts();
        getRecommends();
    }, []); 

    console.log(cart)
    console.log(recommendArr)

    function handleClick(){
        if ( !expiry || !cvc || !name ) {
            alert('Заполните поля', 'error')
            return;
        }
        setCvc('');
        setName('')
        navigate('/cart')
            setMainBlock(false)
    }


    return (
        <>
            <Home/>
            <div className="cart">
                <div className="cart-products">
                    <h4 className="cart-title">Your order:</h4>
                    {cart.products? cart.products.map((item)=>(
                        <div key={item.item.id} className="cart-box">
                            <div className="cart-product-one">
                                <p className="cart-product-num">{item.count}x</p>
                                <div className="cart-product-text">
                                    <Link to={`/oneproduct/${item.item.id}`} className="cart-product-title">{item.item.title}</Link>
                                    <p className="cart-product-price">{item.subPrice}сом</p>
                                </div>
                            </div>
                        </div>
                    )) : null}
                    <div className="line"></div>
                    <div className="other-text">
                        <Link to={'/recommends'} className="other-title">Other drinks we recommends</Link>
                        <Link to={'/recommends'} className="other-sub">See all</Link>
                    </div>
                    <div className="recommends">
                        {!recommendArr ? null : 
                            recommendArr.map((item)=>(
                                <div key={item.id} style={{background:`url(${item.image})`, backgroundSize:'cover'}} className="recommend-one">
                                    <div className="recommend-one-back">
                                        <h3 className="recommend-title">{item.title}</h3>
                                        <p className="recommend-price">{item.price}сом</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <p className="totalprice"><strong>Total Price:</strong> {cart.totalPrice}сом</p>
                    <button onClick={()=>setMainBlock(true)} className='buy'>
                        Buy
                    </button>
                </div>
            </div>
            {console.log(mainBlock)}
            {mainBlock === true ? (
                <div className="main-modal">
                    <div className="inner-modal">
                        <div className="close">
                            <Button onClick={() => setMainBlock(false)} variant="contained" className="btn-closer">X</Button>
                        </div>
                        <div className='cl-input'>
                            <Cards
                                number={number}
                                name={name}
                                expiry={expiry}
                                cvc={cvc}
                                focused={focus}
                            />
                            <form className='cl-input__down'>
                                <input
                                    type="tel"
                                    name="number"
                                    placeholder="Card Number"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                    onFocus={(e) => setFocus(e.target.name)}
                                    // ref={ref}
                                />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onFocus={(e) => setFocus(e.target.name)}
                                />
                                <input
                                    type="text"
                                    name="expiry"
                                    placeholder="MM/YY"
                                    value={expiry}
                                    onChange={(e) => setExpiry(e.target.value)}
                                    onFocus={(e) => setFocus(e.target.name)}
                                />
                                <input
                                    type="tel"
                                    name="cvc"
                                    placeholder="CVC"
                                    value={cvc}
                                    onChange={(e) => setCvc(e.target.value)}
                                    onFocus={(e) => setFocus(e.target.name)}
                                />
                            </form>
                        <Button onClick={handleClick} variant="contained" disableElevation>
                            Оплатить
                        </Button>
                        </div>
                    </div>
                </div>) : null}
        </>
    );
};

export default Cart;