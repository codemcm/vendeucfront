import Config from "../Config.json";
const axios = require('axios').default;

export function UsuarioRestAdd(usuario, contrasenia){
  return axios.post(Config.APIURLDEV +'Usuario', {
    username: usuario,
    contrasenia: contrasenia
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

export function UsuarioList(){
  return axios.get(Config.APIURLDEV +'Usuario')
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    console.log(error);
  })
}