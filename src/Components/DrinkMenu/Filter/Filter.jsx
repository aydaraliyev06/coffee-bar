import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import './Filter.css';

const Filter = ({handleClick}) => {

    const [searchValue, setSearchValue] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    const [ btnCoffee, setBtnCoffee ] = useState(true);
    const [ btnChocolate, setBtnChocolate ] = useState(false);
    const [ btnOther, setBtnOther ] = useState(false);

    const btnsCatergory = (s) => {
        if(s === 'coffee'){
            setBtnCoffee(true);
            setBtnChocolate(false);
            setBtnOther(false);
        }if(s === 'chocolate'){
            setBtnCoffee(false)
            setBtnChocolate(true);
            setBtnOther(false);
        }if(s === 'other'){
            setBtnCoffee(false)
            setBtnChocolate(false);
            setBtnOther(true);
        }
        handleClick(s)
    }

    useEffect(() => {
        if (location.pathname === "/menu") {
            setSearchParams({
                q: searchValue,
            });
        }
    }, [searchValue]);

    return (
        <>
            <input value={searchValue} onChange={(e)=>setSearchValue(e.target.value || '')} placeholder='Search' type='text' className='drink-menu-search'/>
            <div className='drink-menu-btns'>
                <button onClick={()=>btnsCatergory('coffee')} style={{borderRadius:'10px 0px 0px 10px'}} className={btnCoffee ? "drink-menu-btn-active" : "drink-menu-btn1"}>Coffee</button>
                <button onClick={()=>btnsCatergory('chocolate')} className={btnChocolate ? "drink-menu-btn-active" : "drink-menu-btn2"}>Chocolate</button>
                <button onClick={()=>btnsCatergory('other')} style={{borderRadius:'0px 10px 10px 0px'}} className={btnOther ? "drink-menu-btn-active" : "drink-menu-btn3"}>Others</button>
            </div>
        </>
    );
};

export default Filter;