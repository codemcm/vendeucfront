import Config from "../Config.json";
const axios = require('axios').default;

export function ProveedorRest(nombreEmpresa, direccion, telefono, celular){
  return axios.post(Config.APIURLDEV +'Proveedor', {
    empresaNombre: nombreEmpresa,
    direccion: direccion,
    telefono: telefono,
    celular : celular
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

export function ProveedorList(){
    return axios.get(Config.APIURLDEV +'Proveedor')
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    })
}