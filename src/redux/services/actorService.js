import axios from 'axios';

const baseURL = 'https://imdb-backend-yw73.onrender.com/api';

const actorService = {
  getAllActors: async () => {
    const response = await axios.get(`${baseURL}/actors`);
    console.log(response.data)
    return response.data;
  },

  getActorById: async (id) => {
    const response = await axios.get(`${baseURL}/actors/${id}`);
    return response.data;
  },

  addActor: async (actorData) => {
    const response = await axios.post(`${baseURL}/actors`, actorData);
    console.log(response.data)
    return response.data;
  },
};

export default actorService;
