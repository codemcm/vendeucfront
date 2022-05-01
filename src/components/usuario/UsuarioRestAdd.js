import Config from "../Config.json";
const axios = require('axios').default;

export function UsuarioRestAdd(usuario, password){
  return axios.post(Config.APIURLDEV +'Usuario', {
    username: usuario,
    password: password
  })
  .then(function (response) {
    console.log(response);
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
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