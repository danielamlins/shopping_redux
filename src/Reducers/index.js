import  shopReducer from './shopReducer';
import cartReducer from './cartReducer';
import { combineReducers } from 'redux';

// To use multiple reducers, we need to combine them
const allReducers = combineReducers({
    cart: cartReducer, // if we only use counterReducer it means counterReducer: counterReducer
    shop: shopReducer

})

export default allReducers;

