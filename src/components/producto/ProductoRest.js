import Config from "../Config.json";
const axios = require('axios').default;

export function ProductoRest (productoCatalogoId, proveedorId, precioListaId){
  return axios.post(Config.APIURLDEV +'Producto', {
    productoCatalogoId: productoCatalogoId,
    proveedorId: proveedorId,
    precioListaId: precioListaId
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

export function ProductoList(){
    return axios.get(Config.APIURLDEV +'Producto')
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    })
}