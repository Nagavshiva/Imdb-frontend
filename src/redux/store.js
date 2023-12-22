import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import movieReducer from './reducers/movieReducer'
import actorReducer from './reducers/actorReducer';
import producerReducer from './reducers/producerReducer';


export const store = configureStore({
  reducer: {
    auth:userReducer,
    movies:movieReducer,
    actors: actorReducer,
    producers: producerReducer,
  },
})