import Axios from 'axios';

const Api = Axios.create({
  baseURL: 'https://desafionodegx2.herokuapp.com'
  // baseURL: 'https://localhost:2222'
});


export default Api;


