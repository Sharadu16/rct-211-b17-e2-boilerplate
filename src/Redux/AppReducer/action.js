//Create ActionCreator functions here

import { GET_SHOES_DATA_FAILURE, GET_SHOES_DATA_REQUEST, GET_SHOES_DATA_SUCCESS } from "./actionTypes"


  const getShoesDataRequest = () => {
     
      return {
          type : GET_SHOES_DATA_REQUEST
      }
  }

  const getShoesDataSuccess = (payload) => {
     
    return {
        type : GET_SHOES_DATA_SUCCESS,
        payload
    }
}
const getShoesDataFailure = () => {
     
    return {
        type : GET_SHOES_DATA_FAILURE
    }
}

export {getShoesDataRequest, getShoesDataSuccess, getShoesDataFailure}
  

