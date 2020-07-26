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

function getAsset(coin) {
    /*return fetch(`${url}/assets/${coin}`)
        .then(res => res.json())
        .then(res => res.data)*/
    return axios.get(`${url}/assets/${coin}`).then(r => r.data.data);

}

function getAssetHistory(coin) {
    const now = new Date();
    const end = now.getTime()
    now.setDate(now.getDate() - 1)
    const start = now.getTime()

    return fetch(`${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`)
        .then(res => res.json())
        .then(res => res.data)
}

export default {
    getAssets,
    getAssets2,
    getAsset,
    getAssetHistory
}
