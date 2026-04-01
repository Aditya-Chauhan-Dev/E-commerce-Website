const ProductsReducer=(state,action)=>{
    switch (action.type) {
        case "SET_LOADING":
            return{
            ...state,
            isLoading: true,
        };
        case "API_ERROR":
            return{
            ...state,
            isLoading: false,
            isError: true
        };
        case "API_DATA":
            const highRate = action.payload.filter((curElem)=>{
                    return curElem.rating > 4;
                })
            return{
                ...state,
                isLoading: false,
                products: action.payload,
                isRated:highRate,
            }

        case "SET_SINGLE_LOADING":
            return{
            ...state,
            isSingleLoading: true,
            };

        case "SET_SINGLE_PRODUCT":
            return{
                ...state,
                isSingleLoading: false,
                oneProduct: action.payload
            }
        case "SINGLE_ERROR":
            return{
                ...state,
                isSingleLoading: false,
                isError: true,
            } 
    
        default:
            return state;
    }
};


export default ProductsReducer;