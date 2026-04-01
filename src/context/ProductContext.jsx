import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/ReducerProducts'

const AppContext = createContext();

// const API="https://fakestoreapi.com/products"
const API="https://dummyjson.com/products"

const initialState={
    isLoading: false,
    isError: false,
    products: [],
    isRated: [],
    isSingleLoading: false,
    oneProduct:{},
};


const AppProvider=({children})=>{
    const [state, dispatch] = useReducer(reducer,initialState);

    const data=async (url)=>{
        dispatch({type: "SET_LOADING"});
        try {
            const res=await axios.get(url);
            const products=res.data
            const productsData=products.products
            // console.log(products.products);
            
            dispatch({ type: "API_DATA", payload: productsData });
        } catch (error) {
            dispatch({type: "API_ERROR"})
        }
        
    };

    const getsingleProduct= async(url)=>{
        dispatch({type: "SET_SINGLE_LOADING"})
        try {
            const res=await axios.get(url)
            const singleProduct=await res.data
            dispatch({type: "SET_SINGLE_PRODUCT",payload:singleProduct})
        } catch (error) {
            dispatch({type: "SINGLE_ERROR"})
        }
    };

    useEffect(()=>{
        data(API);
    },[])
    return <AppContext.Provider value={{...state,getsingleProduct}}>{children}</AppContext.Provider>
};


const Globalcontext=()=>{
    return useContext(AppContext);
};

export {AppContext,AppProvider,Globalcontext}