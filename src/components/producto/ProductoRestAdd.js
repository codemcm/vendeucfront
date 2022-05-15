import Config from "../Config.json";
const axios = require('axios').default;

export function ProductoRestAdd( /*que recibe?*/){
  return axios.post(Config.APIURLDEV +'Producto', {
    
  })
  .then(function (response) {
    console.log(response);
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
}

export function ProductoList(){
    return axios.get(Config.APIURLDEV +'Producto')
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    })
}