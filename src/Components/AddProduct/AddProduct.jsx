import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsContext } from '../../context/ProductContexProvider';
import './AddProduct.css';
import Home from '../Nav/Home';

const AddProduct = () => {

    const { addProduct } = useContext(productsContext);
    const navigate = useNavigate()

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  function handleClick() {
    if (!title || !price || !image || !description || !category) {
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

    addProduct(product);
    navigate('/home')
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
                    onChange={(e)=> setTitle(e.target.value)}
                    />
                    <input type='number'
                    placeholder='Price'
                    onChange={(e)=> setPrice(e.target.value)}
                    />
                    <input type='text'
                    placeholder='Image'
                    onChange={(e)=> setImage(e.target.value)}
                    />
                    <input type='text'
                    placeholder='Description'
                    onChange={(e)=> setDescription(e.target.value)}
                    />
                    <input type='text'
                    placeholder='Category'
                    onChange={(e)=> setCategory(e.target.value)}
                    />
                </div>
                <button onClick={handleClick} className='btn-add'>Add</button>
            </div>
        </div>
        </>
    );
};

export default AddProduct;