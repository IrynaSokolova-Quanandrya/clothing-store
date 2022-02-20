import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../serviceApi"

export const fetchAllProducts = createAsyncThunk(
  'products/getProductsRequest',
  async ()=>{
  const products = await api.fetchDataForCard();
  return products;
})

export const fetchById = createAsyncThunk(
  "product/getProductByIdRequest",
  async ()=>{
    const product = await api.fetchProductById();
    return product;
  }); 

//   export const updateCity = (cityName) => async (dispatch) => {
//     dispatch(weatherActions.updateCityRequest());
//     try {
//       const data = await api.fetchWeatherApi(cityName);
//       dispatch(weatherActions.updateCitySuccess(data));
//     } catch (error) {
//       dispatch(weatherActions.updateCityError(error));
//     }
//   };
  
//   export const getHourlyWeather = (lat, lon) => async (dispatch) => {
//     dispatch(weatherActions.getHourlyWeatherRequest());
//     try {
//       const data = await api.fetchHourlyWeatherApi(lat, lon);
  
//       dispatch(weatherActions.getHourlyWeatherSuccess(data));
//     } catch (error) {
//       dispatch(weatherActions.getHourlyWeatherError(error));
//     }
//   };