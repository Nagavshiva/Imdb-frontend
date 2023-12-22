import axios from 'axios';

const url = "https://imdb-backend-yw73.onrender.com"

const movieService = {
    getAllMovies: async () => {
        const response = await axios.get(`${url}/api/movies`);
        console.log(response.data)
        return response.data;
    },
    getMovieById: async (id) => {
       const response =  await axios.get(`${url}/api/movies/${id}`);
       console.log(response.data)
       return response.data;
    },
    addMovie: async (movieData) => {
        const response= await axios.post(`${url}/api/movies`, movieData);
        console.log(response.data)
        return response.data;
    },
    editMovie: async (moviesId, movieData) => {
        const response=await axios.put(`${url}/api/movies`, moviesId, movieData);
        console.log(response.data)
        return response.data;
    }
};

export default movieService;
