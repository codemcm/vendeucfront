import Config from "../Config.json";
const axios = require('axios').default;

export function ProductoCatalogoRestAdd(){
  return axios.post(Config.APIURLDEV +'UserUC', {
    
  })
  .then(function (response) {
    console.log(response);
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
}

export function UsereUCList(){
    return axios.get(Config.APIURLDEV +'UserUC')
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    })
}