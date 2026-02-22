import products from "../../data/products";
import CartActionTypes from "./action-types";

const initialState = {
    products: [],
    productsTotalPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
            const productAlreadyInCart = state.products.some(
                (product) => product.id === action.payload.id
            );

            if (productAlreadyInCart) {
                return {
                    ...state,
                    products: state.products.map((product) =>
                        product.id === action.payload.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                    ),
                    productsTotalPrice: state.products.map((product) =>
                        ( state.productsTotalPrice = state.productsTotalPrice + product.price )
                    ),
                };
            } else {
                return { 
                    ...state, 
                    products: [...state.products, action.payload],
                    productsTotalPrice: action.payload.price
                };
            }

            
        default:
            return state;
    }
}

export default cartReducer;