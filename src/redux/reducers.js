import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { fetchAllProducts,fetchById } from './operations';

const products = createReducer([],{
    [fetchAllProducts.fulfilled]: (_, {payload})=>[...payload],
    // [weatherActions.deleteCity]: (state, {payload})=>
    // state.filter(({id})=>id !== payload),

    // [weatherActions.updateCitySuccess]: (state, {payload}) =>
    // state.map((city) => {
    //   if (city.id === payload.id) {
    //     return payload;
    //   }
    //   return city;
    // }),
});

const productId = createReducer([], {
    [fetchById.fulfilled]: (state, {payload}) =>
    [...state, payload]
    // state.map((product) => {
    //   if(product.id === payload.id){
    //     return state
    //   }
    //   return [...state, product]
    // }
    // )
});
  
  
const isLoading = createReducer(false, {
    [fetchAllProducts.pending]: () => true,
    [fetchAllProducts.fulfilled]: () => false,
    [fetchAllProducts.rejected]: () => false,
    [fetchById.pending]: () => true,
    [fetchById.fulfilled]: () => false,
    [fetchById.rejected]: () => false,

  });
  
const error = createReducer(
    { error: false },
    {
      [fetchAllProducts.rejected]: (_, {payload}) => ({
        error: true,
        message: payload,
      }),
      [fetchAllProducts.pending]: () => null,
      [fetchById.rejected]: (_, {payload}) => ({
        error: true,
        message: payload,
      }),
      // [fetchById.pending]: () => null,
  
    }
  );

  export default combineReducers({
    products,
    productId,
    isLoading,
    error,
  })
  