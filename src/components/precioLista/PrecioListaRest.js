import Config from "../Config.json";
const axios = require('axios').default;

export function PrecioListaRest(precioCompra, precioVenta, fechaRegistro){
  return axios.post(Config.APIURLDEV +'PrecioLista', {
    precioCompra: precioCompra,
    precioVenta: precioVenta,
    fechaRegistro: fechaRegistro
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

export function PrecioListaList(){
    return axios.get(Config.APIURLDEV +'PrecioLista')
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    })
}