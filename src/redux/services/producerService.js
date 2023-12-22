import axios from 'axios';

const url = "https://imdb-backend-yw73.onrender.com/api/producers";

const producerService = {
  getAllProducers: async () => {
    const response = await axios.get(url);
    return response.data;
  },
  getProducerById: async (id) => {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  },
  addProducer: async (producerData) => {
    const response = await axios.post(url, producerData);
    console.log(response.data)
    return response.data;
  },
};

export default producerService;
