import Axios from 'axios';

const Api = Axios.create({
  baseURL: 'https://desafionodegx2.herokuapp.com'
  // baseURL: 'http://localhost:2228'
});


export default Api;


