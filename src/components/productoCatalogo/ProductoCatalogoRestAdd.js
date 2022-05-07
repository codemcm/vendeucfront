import Config from "../Config.json";
const axios = require('axios').default;

export function ProductoCatalogoRestAdd(clave, nombre, descripcion){
  return axios.post(Config.APIURLDEV +'ProductoCatalogo', {
    clave: clave,
    nombre: nombre,
    descripcion: descripcion
  })
  .then(function (response) {
    console.log(response);
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
}

export function ProductoCatalogoList(){
    return axios.get(Config.APIURLDEV +'ProductoCatalogo')
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    })
}