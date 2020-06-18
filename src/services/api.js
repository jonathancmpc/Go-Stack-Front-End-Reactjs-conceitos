import axios from 'axios';

/* Criando uma instância do axios para passarmos a url base da nossa API */
const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export default api;