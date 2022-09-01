import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

export const recommendContext = createContext();

const API = 'http://localhost:8000/recommend';

const INIT_STATE = {
    recommends:[],
}

const reducer = (prevState = INIT_STATE, action) => {
    switch (action.type) {
        case 'GET_RECOMMENDS':
            return {
                ...prevState,
                products: action.payload.data,
            };
        case 'GET_ONE_RECOMMEND':
            return {
                ...prevState,
                productDetails: action.payload,
            };
        default:
            return prevState;
    }
};

const RecommendContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const navigate = useNavigate();

    const getRecommends = async () => {
        const res = await axios(`${API}`);
        dispatch({
          type: "GET_RECOMMENDS",
          payload: res,
        });
    };

    const addRecommends = async (product) => {
        await axios.post(API, product);
        getRecommends();
        navigate('/home')
    }

    const getOneRecommend = async (id) => {
        const { data } = await axios(`${API}/${id}`);
        dispatch({
          type: "GET_ONE_RECOMMEND",
          payload: data,
        });
    };

    const cloud = {
        getRecommends,
        getOneRecommend,
        addRecommends,
        recommendArr: state.products,
        recommendDetails: state.productDetails,
    }

    return (
        <recommendContext.Provider value={cloud}>
            {children}
        </recommendContext.Provider>
    );
};

export default RecommendContextProvider;