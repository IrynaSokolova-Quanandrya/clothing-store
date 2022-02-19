import { createAction } from "@reduxjs/toolkit";

 const addProductsRequest = createAction("products/addProductsRequest");
 const addProductsSuccess = createAction("products/addProductsSuccess");
 const addProductsError = createAction("products/addProductsError");

 const updateCurrencyRequest = createAction("currency/updateCurrencyRequest");
 const updateCurrencySuccess = createAction("currency/updateCurrencySuccess");
 const updateCurrencyError = createAction("currency/updateCurrencyError");

 const getProductByIdRequest = createAction("product/getProductByIdRequest");
 const getProductByIdSuccess = createAction("product/getProductByIdSuccess");
 const getProductByIdError = createAction("product/getProductByIdError");

 const cityId = createAction("city/cityId");

 const deleteCity = createAction("city/deleteCity");

 const errorOff = createAction("error/off");

 const actions = {
   addProductsRequest,
   addProductsSuccess,
   addProductsError,
   updateCurrencyRequest,
   updateCurrencySuccess,
   updateCurrencyError,
   getProductByIdRequest,
   getProductByIdSuccess,
   getProductByIdError,
 }
 export default actions;