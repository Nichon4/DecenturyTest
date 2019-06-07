import axios from "axios";


const API_ROOT = 'https://phone-book-decentury.herokuapp.com/api';

class Api {

  constructor() {
    const client = axios.create({
      baseURL: API_ROOT,
      timeout: 5000,
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      }
    });

    this.client = client
  }

  get(path) {
    return this.client.get(path)
      .then(response => response.data)
  }

  post(path, payload) {
    return this.client.post(path, payload)
      .then(response => response.data)
  }

  put(path, payload) {
    return this.client.put(path, payload)
      .then(response => response.data)
  }

  delete(path, payload) {
    return this.client.delete(path, payload)
      .then(response => response.data)
  }

}

export default new Api()