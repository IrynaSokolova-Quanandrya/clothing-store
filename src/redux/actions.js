import { createAction } from "@reduxjs/toolkit";

 const getProductsRequest = createAction("products/getProductsRequest");
 const getProductsSuccess = createAction("products/getProductsSuccess");
 const getProductsError = createAction("products/getProductsError");

 const updateCurrencyRequest = createAction("currency/updateCurrencyRequest");
 const updateCurrencySuccess = createAction("currency/updateCurrencySuccess");
 const updateCurrencyError = createAction("currency/updateCurrencyError");

 const getProductByIdRequest = createAction("product/getProductByIdRequest");
 const getProductByIdSuccess = createAction("product/getProductByIdSuccess");
 const getProductByIdError = createAction("product/getProductByIdError");

//  const cityId = createAction("city/cityId");

//  const deleteCity = createAction("city/deleteCity");

//  const errorOff = createAction("error/off");

 const actions = {
   getProductsRequest,
   getProductsSuccess,
   getProductsError,
   updateCurrencyRequest,
   updateCurrencySuccess,
   updateCurrencyError,
   getProductByIdRequest,
   getProductByIdSuccess,
   getProductByIdError,
 }
 export default actions;