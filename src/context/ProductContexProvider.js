import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const productsContext = createContext();

const API = 'http://localhost:8000/products';

const APIREC = 'http://localhost:8000/recommend';

const INIT_STATE = {
    products:[],
    productDetails: null,
    pageTotalCount: 1,
};

const reducer = (prevState = INIT_STATE, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...prevState,
                products: action.payload.data,
                pageTotalCount: Math.ceil(action.payload.headers['x-total-count']/5)
            };
        case 'GET_ONE_PRODUCT':
            return {
                ...prevState,
                productDetails: action.payload,
            };
        default:
            return prevState;
    }
};

const ProductContexProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();

  const navigate = useNavigate();

  const getProducts = async () => {
    const res = await axios(`${API}${location.search}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: res,
    });
  };

  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  };

  const addProduct = async (product) => {
    await axios.post(API, product);
    getProducts();
    navigate("/menu");
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
    navigate("/menu");
  };

  const editProduct = async (id, obj) => {
    await axios.patch(`${API}/${id}`, obj);
    await axios.patch(`${APIREC}/${id}`, obj);
    getProducts();
    navigate("/menu");
  };

  const cloud = {
    getProducts,
    getOneProduct,
    addProduct,
    deleteProduct,
    editProduct,
    productsArr: state.products,
    productDetails: state.productDetails,
    pageTotalCount: state.pageTotalCount,
  };

    return (
        <productsContext.Provider value={cloud}>
            {children}
        </productsContext.Provider>
    );
};

export default ProductContexProvider;