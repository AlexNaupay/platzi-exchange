import axios from 'axios';

const url = 'https://api.coincap.io/v2'

async function getAssets() {
  /*return fetch(`${url}/assets?limit=20`)
    .then(res => res.json())
    .then(res => res.data)*/

  try{
    let response = await axios.get(`${url}/assets?limit=20`);
    return response.data.data;
  }catch (e) {
    console.log('Error getAssets');
  }
}

function getAssets2() {
  return new Promise((resolve,reject) => {
    axios.get(`${url}/assets?limit=20`)
        .then(function (response) {
          resolve(response.data.data)
        }).catch(function (error) {
          reject(error);
        });
  })
}

export default {
  getAssets,
  getAssets2
}
