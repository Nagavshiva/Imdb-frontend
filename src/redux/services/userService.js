import axios from 'axios';

const url = "https://imdb-backend-yw73.onrender.com"
const userService = {
  login: async (userData) => {
    return await axios.post(`${url}/api/auth/login`, userData)
  },
  register: async (userData) => {
    return await axios.post(`${url}/api/auth/register`, userData);
  },

};

export default userService;