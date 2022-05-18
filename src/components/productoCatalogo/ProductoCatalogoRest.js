import Config from "../Config.json";
const axios = require('axios').default;

export function ProductoCatalogoRest(clave, nombre, descripcion){
  return axios.post(Config.APIURLDEV +'ProductoCatalogo', {
    clave: clave,
    nombre: nombre,
    descripcion: descripcion
  })
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    let respuesta= {
      status:'error',
      message: error + ""
  }
   return respuesta
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