import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productsContext } from '../../context/ProductContexProvider';
import Home from '../Nav/Home';
import './EditProduct.css';

const EditProduct = () => {

    const { editProduct, getOneProduct, productDetails } = useContext(productsContext);
    const navigate = useNavigate()
    const {id} = useParams()

    const [title, setTitle] = useState(productDetails.title);
    const [price, setPrice] = useState(productDetails.price);
    const [image, setImage] = useState(productDetails.image);
    const [description, setDescription] = useState(productDetails.description);
    const [category, setCategory] = useState(productDetails.category);

    useEffect(()=>{
        getOneProduct(id);
    },[id])
  
    function handleClick() {
        if (
            !title ||
            !price ||
            !image ||
            !description ||
            !category
          ) {
            alert("Введите все инпуты");
            return;
          }
      let product = {
        title,
        price: parseInt(price),
        image,
        description,
        category,
      };
      editProduct(id, product)
      navigate('/menu')
    }
    return (
        <>
            <Home/>
            <div className='add'>
            <div className='add-box'>
                <h3 className='add-title'>
                    Add Product
                </h3>
                <div className='add-inp'>
                    <input type='text'
                    placeholder='Name'
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    />
                    <input type='number'
                    placeholder='Price'
                    value={price}
                    onChange={(e)=> setPrice(e.target.value)}
                    />
                    <input type='text'
                    placeholder='Image'
                    value={image}
                    onChange={(e)=> setImage(e.target.value)}
                    />
                    <input type='text'
                    placeholder='Description'
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                    />
                    <input type='text'
                    placeholder='Category'
                    value={category}
                    onChange={(e)=> setCategory(e.target.value)}
                    />
                </div>
                <button onClick={handleClick} className='btn-add'>Add</button>
            </div>
        </div>
        </>
    );
};

export default EditProduct;